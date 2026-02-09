import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartButton } from "@/components/cart/CartButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wine Store - Premium Wine Collection",
  description: "Discover our curated selection of premium wines from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          {/* Navigation Header */}
          <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 shadow-lg shadow-emerald-500/30">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9.5 11 12 11C14.5 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2ZM12 9C10.62 9 9.5 7.88 9.5 6.5C9.5 5.12 10.62 4 12 4C13.38 4 14.5 5.12 14.5 6.5C14.5 7.88 13.38 9 12 9ZM11 12H13V22H11V12Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Wine Store
                  </span>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">
                    Premium Collection
                  </p>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden items-center gap-8 md:flex">
                <Link
                  href="/"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  Products
                </Link>
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-4">
                {/* API Status */}
                <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 sm:flex dark:border-emerald-800 dark:bg-emerald-900/30">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Live API</span>
                </div>

                {/* Cart Button */}
                <CartButton />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>{children}</main>

          {/* Cart Drawer */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
