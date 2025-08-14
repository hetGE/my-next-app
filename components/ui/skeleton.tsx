import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "text" | "circular" | "rectangular";
    animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
    className,
    variant = "text",
    animation = "pulse",
    ...props
}: SkeletonProps) {
    const baseStyles = "bg-gray-200 dark:bg-gray-700";
    
    const variants = {
        text: "h-4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-md",
    };
    
    const animations = {
        pulse: "animate-pulse",
        wave: "animate-shimmer",
        none: "",
    };
    
    return (
        <div
            className={cn(
                baseStyles,
                variants[variant],
                animations[animation],
                className
            )}
            {...props}
        />
    );
}

// Compound components for common skeleton patterns
export function SkeletonCard({ className }: { className?: string }) {
    return (
        <div className={cn("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg", className)}>
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            <div className="flex space-x-2">
                <Skeleton className="h-10 w-24" variant="rectangular" />
                <Skeleton className="h-10 w-24" variant="rectangular" />
            </div>
        </div>
    );
}

export function SkeletonList({ count = 5, className }: { count?: number; className?: string }) {
    return (
        <div className={cn("space-y-4", className)}>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12" variant="circular" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SkeletonTable({ rows = 5, cols = 4, className }: { rows?: number; cols?: number; className?: string }) {
    return (
        <div className={cn("overflow-hidden rounded-lg border dark:border-gray-700", className)}>
            <div className="bg-gray-50 dark:bg-gray-800 p-4">
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    {Array.from({ length: cols }).map((_, index) => (
                        <Skeleton key={index} className="h-4" />
                    ))}
                </div>
            </div>
            <div className="divide-y dark:divide-gray-700">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="p-4">
                        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <Skeleton key={colIndex} className="h-4" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}