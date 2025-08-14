"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SkeletonCard } from "@/components/ui/skeleton";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useDebounce } from "@/hooks/use-debounce";

export default function Home() {
    // Demo: useLocalStorage hook
    const [savedName, setSavedName] = useLocalStorage("user-name", "");
    const [nameInput, setNameInput] = useState("");
    
    // Demo: useMediaQuery hook
    const isMobile = useMediaQuery("(max-width: 640px)");
    const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    
    // Demo: useDebounce hook
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearch = useDebounce(searchQuery, 500);
    
    // Demo: Loading state for skeleton
    const [isLoading, setIsLoading] = useState(false);
    
    const features = [
        {
            title: "TypeScript",
            description: "Type-safe code with better IDE support and fewer runtime errors",
            icon: "🚀",
        },
        {
            title: "Tailwind CSS",
            description: "Rapidly build modern interfaces with utility-first CSS framework",
            icon: "🎨",
        },
        {
            title: "App Router",
            description: "Next.js 14+ App Router with server components and streaming",
            icon: "⚡",
        },
        {
            title: "Custom Hooks",
            description: "Pre-built React hooks for common functionality",
            icon: "🪝",
        },
        {
            title: "UI Components",
            description: "Reusable components with multiple variants and full TypeScript support",
            icon: "🧩",
        },
        {
            title: "Dark Mode",
            description: "Automatic dark mode support with system preference detection",
            icon: "🌙",
        },
    ];

    const testimonials = [
        {
            name: "Alex Chen",
            role: "Full-Stack Developer",
            content: "This template saved me hours of setup time. Everything just works out of the box!",
            avatar: "AC",
        },
        {
            name: "Sarah Johnson",
            role: "Frontend Engineer",
            content: "The best Next.js template I've used. Clean code, great structure, and amazing DX.",
            avatar: "SJ",
        },
        {
            name: "Mike Williams",
            role: "Tech Lead",
            content: "Perfect starting point for our projects. We've built 5 apps with this template.",
            avatar: "MW",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900
                        dark:to-gray-800"
                />
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
                        Build Something
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {" "}
                            Amazing
                        </span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 sm:text-2xl dark:text-gray-300">
                        A modern Next.js template with TypeScript, Tailwind CSS, and best practices built-in. Start your
                        next project in seconds, not hours.
                    </p>
                    
                    {/* Demo responsive detection */}
                    <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        You&apos;re viewing on: {isMobile && "📱 Mobile"} {isTablet && "📱 Tablet"} {isDesktop && "💻 Desktop"}
                    </p>
                    
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button variant="primary" size="lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg">
                            View Documentation
                        </Button>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>5.0 Stars</span>
                        </div>
                        <div>10K+ Developers</div>
                        <div>MIT License</div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Interactive Demo
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Try out the built-in hooks and components
                        </p>
                    </div>
                    
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* LocalStorage Demo */}
                        <Card>
                            <CardHeader>
                                <CardTitle>LocalStorage Hook</CardTitle>
                                <CardDescription>
                                    Your name is saved in localStorage and persists across page refreshes
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    label="Enter your name"
                                    placeholder="John Doe"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                />
                                <Button
                                    onClick={() => setSavedName(nameInput)}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Save to LocalStorage
                                </Button>
                                {savedName && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Hello, <strong>{savedName}</strong>! (Saved in localStorage)
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                        
                        {/* Debounce Demo */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Debounce Hook</CardTitle>
                                <CardDescription>
                                    Search input is debounced by 500ms to reduce API calls
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    label="Search anything"
                                    placeholder="Start typing..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className="text-sm">
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Immediate value: <strong>{searchQuery || "Empty"}</strong>
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Debounced value: <strong>{debouncedSearch || "Empty"}</strong>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section with Cards */}
            <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Everything You Need
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Built with modern tools and best practices
                        </p>
                    </div>
                    
                    {/* Demo loading state */}
                    <div className="mb-8 text-center">
                        <Button
                            onClick={() => setIsLoading(!isLoading)}
                            variant="secondary"
                            size="sm"
                        >
                            {isLoading ? "Show Content" : "Show Skeleton Loading"}
                        </Button>
                    </div>
                    
                    {isLoading ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[...Array(6)].map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => (
                                <Card key={index} variant="default">
                                    <CardHeader>
                                        <div className="mb-4 text-4xl">{feature.icon}</div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Loved by Developers
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            See what others are saying about this template
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white">
                                            {testimonial.avatar}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 italic dark:text-gray-300">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                    <div className="mt-4 flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Ready to Build?
                    </h2>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                        Start your next project with this production-ready template
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button variant="primary" size="lg">
                            Use This Template
                        </Button>
                        <Button variant="outline" size="lg">
                            Star on GitHub
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}