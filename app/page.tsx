
export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
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
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button
                            className="transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4
                                font-semibold text-white transition-all hover:scale-105 hover:from-blue-700
                                hover:to-indigo-700"
                        >
                            Get Started
                        </button>
                        <button
                            className="rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-900
                                transition-all hover:bg-gray-100 dark:border-gray-600 dark:text-white
                                dark:hover:bg-gray-800"
                        >
                            View Documentation
                        </button>
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

            {/* Features Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Everything You Need</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Built with modern tools and best practices
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
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
                                title: "SEO Optimized",
                                description: "Built-in SEO best practices with metadata and sitemap support",
                                icon: "🔍",
                            },
                            {
                                title: "Dark Mode",
                                description: "Automatic dark mode support with system preference detection",
                                icon: "🌙",
                            },
                            {
                                title: "Fast Refresh",
                                description: "Instant feedback with Fast Refresh for a better developer experience",
                                icon: "♻️",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl
                                    dark:bg-gray-800"
                            >
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Get Started in Minutes
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            From template to production in three simple steps
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                step: "1",
                                title: "Clone Template",
                                description: "Use this template on GitHub or clone the repository to get started",
                            },
                            {
                                step: "2",
                                title: "Install & Customize",
                                description: "Run npm install and customize the template to match your needs",
                            },
                            {
                                step: "3",
                                title: "Deploy",
                                description: "Deploy to Vercel, Netlify, or any platform with one command",
                            },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full
                                        bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white"
                                >
                                    {item.step}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Loved by Developers</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            See what others are saying about this template
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Alex Chen",
                                role: "Full-Stack Developer",
                                content:
                                    "This template saved me hours of setup time. Everything just works out of the box!",
                                avatar: "AC",
                            },
                            {
                                name: "Sarah Johnson",
                                role: "Frontend Engineer",
                                content:
                                    "The best Next.js template I've used. Clean code, great structure, and amazing DX.",
                                avatar: "SJ",
                            },
                            {
                                name: "Mike Williams",
                                role: "Tech Lead",
                                content:
                                    "Perfect starting point for our projects. We've built 5 apps with this template.",
                                avatar: "MW",
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <div className="mb-4 flex items-center">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full
                                            bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white"
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic dark:text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>
                                <div className="mt-4 flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                question: "Is this template free to use?",
                                answer: "Yes! This template is completely free and open source under the MIT license.",
                            },
                            {
                                question: "Can I use this for commercial projects?",
                                answer: "Absolutely! You can use this template for personal, commercial, or client projects without any restrictions.",
                            },
                            {
                                question: "Do I need to give attribution?",
                                answer: "No attribution is required, but it's always appreciated if you want to mention this template.",
                            },
                            {
                                question: "Is TypeScript required?",
                                answer: "While this template uses TypeScript by default, you can easily convert it to JavaScript if preferred.",
                            },
                            {
                                question: "How do I get support?",
                                answer: "You can open an issue on GitHub or check the documentation for common solutions.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Ready to Build?</h2>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                        Start your next project with this production-ready template
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button
                            className="transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4
                                font-semibold text-white transition-all hover:scale-105 hover:from-blue-700
                                hover:to-indigo-700"
                        >
                            Use This Template
                        </button>
                        <button
                            className="rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-900
                                transition-all hover:bg-gray-100 dark:border-gray-600 dark:text-white
                                dark:hover:bg-gray-800"
                        >
                            Star on GitHub
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8 dark:border-gray-800">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Product</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Company</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Resources</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Legal</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-600 dark:border-gray-800
                            dark:text-gray-400"
                    >
                        <p>© 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
