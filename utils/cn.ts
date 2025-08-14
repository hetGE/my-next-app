import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for better className handling
 * Merges Tailwind CSS classes without conflicts
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}