import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "SaaS 2026 AI Dashboard | Production Ready",
    description: "Advanced AI-powered dashboard for next-gen startups.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en" className="dark scroll-smooth">
                <body className={`${inter.variable} ${outfit.variable} font-sans bg-black min-h-screen selection:bg-purple-500/30`}>
                        <div className="fixed inset-0 bg-[#050505] -z-10" />
                        <div className="fixed top-0 left-[20%] w-[40%] h-[40%] bg-purple-600/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
                        <div className="fixed bottom-0 right-[20%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
                        <div className="relative flex flex-col min-h-screen">
                          {children}
                        </div>div>
                </body>body>
          </html>html>
        );
}
</html>
