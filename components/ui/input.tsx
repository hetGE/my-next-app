import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
        
        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        "w-full px-3 py-2 border rounded-lg",
                        "bg-white dark:bg-gray-800",
                        "text-gray-900 dark:text-white",
                        "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        "transition-colors",
                        error
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-300 dark:border-gray-600",
                        className
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };