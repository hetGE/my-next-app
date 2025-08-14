import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static export for GitHub Pages deployment
   * Comment out this line if you need server-side features
   */
  output: process.env.GITHUB_PAGES ? "export" : undefined,
  
  /**
   * Set base path for GitHub Pages (if deploying to username.github.io/repo-name)
   * Update this to match your repository name
   */
  basePath: process.env.GITHUB_PAGES ? "/my-next-app" : "",
  
  /**
   * Disable image optimization for static export
   */
  images: {
    unoptimized: process.env.GITHUB_PAGES === "true",
  },
};

export default nextConfig;
