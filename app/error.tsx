"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Something went wrong
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    We apologize for the inconvenience. An unexpected error has occurred.
                    Please try again or contact support if the problem persists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                        Go Home
                    </button>
                </div>
                {process.env.NODE_ENV === "development" && error.digest && (
                    <p className="text-xs text-gray-500 mt-8">Error ID: {error.digest}</p>
                )}
            </div>
        </div>
    );
}