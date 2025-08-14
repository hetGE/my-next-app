"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook for syncing state with localStorage
 * Handles SSR safely and syncs across tabs
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
    // Get from local storage then parse stored json or return initialValue
    const readValue = useCallback((): T => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    // State to store our value
    const [storedValue, setStoredValue] = useState<T>(readValue);

    // Return a wrapped version of useState's setter function that persists the new value to localStorage
    const setValue = useCallback(
        (value: T | ((val: T) => T)) => {
            try {
                // Allow value to be a function so we have the same API as useState
                const valueToStore = value instanceof Function ? value(storedValue) : value;

                // Save to local storage
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }

                // Save state
                setStoredValue(valueToStore);

                // Dispatch a custom event so every useLocalStorage hook is notified
                window.dispatchEvent(new Event("local-storage"));
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    // Remove value from localStorage
    const removeValue = useCallback(() => {
        try {
            if (typeof window !== "undefined") {
                window.localStorage.removeItem(key);
            }
            setStoredValue(initialValue);
            window.dispatchEvent(new Event("local-storage"));
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [initialValue, key]);

    useEffect(() => {
        setStoredValue(readValue());
    }, [readValue]);

    useEffect(() => {
        const handleStorageChange = () => {
            setStoredValue(readValue());
        };

        // this only works for other documents, not the current one
        window.addEventListener("storage", handleStorageChange);

        // this is a custom event, triggered in setValue
        window.addEventListener("local-storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("local-storage", handleStorageChange);
        };
    }, [readValue]);

    return [storedValue, setValue, removeValue];
}