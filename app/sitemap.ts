import { MetadataRoute } from "next";

/**
 * Dynamic sitemap generation
 * Automatically accessible at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
    
    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ];
    
    // Dynamic pages (example with blog posts)
    // const posts = await getPosts(); // Fetch from your data source
    // const dynamicPages = posts.map((post) => ({
    //     url: `${baseUrl}/blog/${post.slug}`,
    //     lastModified: post.updatedAt,
    //     changeFrequency: "weekly" as const,
    //     priority: 0.7,
    // }));
    
    // return [...staticPages, ...dynamicPages];
    return staticPages;
}