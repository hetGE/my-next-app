"use client";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
                    <div className="text-center max-w-md">
                        <h1 className="text-6xl font-bold text-red-500 mb-4">Critical Error</h1>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Application Error
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            A critical error has occurred. The application encountered an unexpected problem.
                            Please refresh the page or try again later.
                        </p>
                        <button
                            onClick={reset}
                            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}