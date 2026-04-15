import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aman.xyz",
  description: "a blog by aman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-16">
            <a href="/" className="group">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                aman.xyz
              </h1>
              <p className="text-text-secondary text-sm mt-1">
                a blog by aman
              </p>
            </a>
          </header>
          <main>{children}</main>
          <footer className="mt-24 pt-8 border-t border-border text-text-secondary text-sm flex gap-6">
            <a
              href="https://github.com/amandhe"
              className="hover:text-accent transition-colors"
            >
              github
            </a>
            <a
              href="https://x.com/amansplaining"
              className="hover:text-accent transition-colors"
            >
              twitter/x
            </a>
            <a
              href="mailto:hello@aman.xyz"
              className="hover:text-accent transition-colors"
            >
              email
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
