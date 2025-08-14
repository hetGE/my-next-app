"use client";

import { useState, useEffect } from "react";

/**
 * Hook for responsive design and media queries
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        // Set initial value
        setMatches(media.matches);

        // Define the listener
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add the listener
        if (media.addEventListener) {
            media.addEventListener("change", listener);
        } else {
            // Fallback for older browsers
            media.addListener(listener);
        }

        // Clean up
        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", listener);
            } else {
                // Fallback for older browsers
                media.removeListener(listener);
            }
        };
    }, [query]);

    return matches;
}

/**
 * Preset media query hooks for common breakpoints
 */
export function useIsMobile(): boolean {
    return useMediaQuery("(max-width: 639px)");
}

export function useIsTablet(): boolean {
    return useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
}

export function useIsDesktop(): boolean {
    return useMediaQuery("(min-width: 1024px)");
}

export function useIsDarkMode(): boolean {
    return useMediaQuery("(prefers-color-scheme: dark)");
}

export function useIsReducedMotion(): boolean {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}