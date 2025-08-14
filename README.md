# Next.js Modern Template

A production-ready Next.js template with TypeScript, Tailwind CSS, and best practices built-in. Perfect for building modern web applications quickly and efficiently.

## ✨ Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Type-safe development experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **Dark Mode** - Built-in dark mode support with system preference detection
- **Responsive Design** - Mobile-first, fully responsive components
- **SEO Optimized** - Meta tags, Open Graph, and structured data ready
- **Performance** - Optimized for Core Web Vitals
- **Developer Experience** - Fast Refresh, ESLint, Prettier pre-configured
- **Production Ready** - Best practices and scalable architecture

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm, npm, yarn, or bun package manager

### Installation

1. **Use this template** (recommended):
   ```bash
   # Click "Use this template" button on GitHub
   # Or clone directly
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-next-app/
├── app/                  # App Router directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── components/          # React components (create as needed)
├── lib/                 # Utility functions (create as needed)
├── hooks/               # Custom React hooks (create as needed)
├── stores/              # Zustand state stores (create as needed)
├── utils/               # Helper functions (create as needed)
├── types/               # TypeScript type definitions (create as needed)
├── CLAUDE.md            # AI assistant guidelines
└── ...config files      # Various configuration files
```

**Note**: The template supports Next.js routing conventions including route groups `(auth)`, dynamic routes `[id]`, and catch-all routes `[...slug]`.

## 🛠️ Customization Guide

### 1. Update Metadata
Edit `app/layout.tsx` to update your site's metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};
```

### 2. Modify Color Scheme
Update the CSS variables in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### 3. Configure Tailwind
Customize your design system in `tailwind.config.js` (if using Tailwind v3) or through CSS variables.

### 4. Add Environment Variables
Create a `.env.local` file for your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🔧 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (installed, ready to use)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: [Deploy to Netlify](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify**: [Deploy to AWS](https://aws.amazon.com/amplify/)
- **Railway**: [Deploy to Railway](https://railway.app/)
- **Docker**: Dockerfile can be added for containerized deployments

## 🎯 Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow the Next.js file-based routing conventions

### Performance
- Use Next.js Image component for optimized images
- Implement lazy loading for heavy components
- Utilize Next.js font optimization
- Enable static generation where possible

### SEO
- Use semantic HTML elements
- Implement proper meta tags
- Add structured data for rich snippets
- Create a sitemap.xml and robots.txt

### Security
- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper CORS policies
- Keep dependencies updated

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using conventional commits with emojis (see CLAUDE.md for format)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note**: Please refer to `CLAUDE.md` for coding standards and commit conventions.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## 📚 Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn TypeScript

## 💬 Support

For support, please open an issue in the GitHub repository or reach out to the community.

---

Built with ❤️ using Next.js