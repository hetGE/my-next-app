"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 max-w-md mx-auto">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}