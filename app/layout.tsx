import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Open_Sans({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Discord",
    description: "This is a discord clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${font.variable} antialiased`}>
                    <ThemeProvider
                    attribute={'class'}
                    defaultTheme="light"
                    enableSystem={true}
                    storageKey="discord-theme">{children}</ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
