/**
 * Global type definitions
 */

// Environment variables
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Database
            DATABASE_URL?: string;
            
            // NextAuth
            NEXTAUTH_URL?: string;
            NEXTAUTH_SECRET?: string;
            
            // Public environment variables
            NEXT_PUBLIC_API_URL?: string;
            NEXT_PUBLIC_BASE_URL?: string;
            NEXT_PUBLIC_GA_ID?: string;
            NEXT_PUBLIC_POSTHOG_KEY?: string;
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?: string;
            NEXT_PUBLIC_ENABLE_ANALYTICS?: string;
            NEXT_PUBLIC_MAINTENANCE_MODE?: string;
            
            // Private API keys
            OPENAI_API_KEY?: string;
            STRIPE_SECRET_KEY?: string;
            
            // Email
            SMTP_HOST?: string;
            SMTP_PORT?: string;
            SMTP_USER?: string;
            SMTP_PASSWORD?: string;
            SMTP_FROM?: string;
            
            // Node environment
            NODE_ENV: "development" | "production" | "test";
        }
    }
}

// Common types
export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
    data?: T;
    error?: string;
    message?: string;
    status: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export interface SearchParams {
    [key: string]: string | string[] | undefined;
}

export interface PageProps<P = Record<string, never>, S = Record<string, never>> {
    params: P;
    searchParams: S;
}

// Form types
export interface FormState {
    errors?: Record<string, string[]>;
    message?: string;
    success?: boolean;
}

// Component props types
export interface WithChildren {
    children: React.ReactNode;
}

export interface WithClassName {
    className?: string;
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncFunction<T = void> = () => Promise<T>;

// Re-export types that might be used across the app
export type { Metadata } from "next";