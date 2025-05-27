# LinkMe - Social Media Link Sharing Platform

A clean, modern platform to store and share all your social media links in one beautiful place. Perfect for your bio links, social media profiles, or anywhere you need to share multiple links at once.

## ✨ Features

- **Responsive Design** - Looks great on all devices
- **Clean Interface** - Beautiful, minimalist design
- **Easy Sharing** - One link to share all your social profiles
- **Fast Loading** - Optimized for performance
- **Simple Setup** - Get started in minutes

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/null-kaustubh/linkme.git
cd linkme
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Customize Your Information

#### Update User Information

Edit `components/UserInfo.tsx`:

```tsx
export default function UserInfo() {
  const name = "Your Name Here";
  const bio = "Your bio description";

  // ... rest of component
}
```

#### Add Your Links

Edit `constants/links.ts`:

```tsx
export const links = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
  },
  // Add more links as needed...
];
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your link page.

## 📱 Responsive Design

The template is fully responsive and works great on:

- **Mobile phones** - Full width layout
- **Tablets** - Full width layout
- **Laptops & Desktops** - Centered layout with proper spacing

## 🛠️ Built With

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Deploy on Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

---

**Made with ❤️ by [Kaustubh](https://github.com/null-kaustubh)**

_Don't forget to star ⭐ this repository if you found it helpful!_
