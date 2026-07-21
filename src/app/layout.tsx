import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: { default: "Soumya Sagar Nayak", template: "%s | Soumya Sagar Nayak" },
    description: "An engineering undergrad who likes making end-to-end web experiences",
    metadataBase: new URL("https://soumyacodes.vercel.app"),
    alternates: { canonical: "/" },
    openGraph: {
        title: "Soumya Sagar Nayak",
        description: "An engineering undergrad who likes making end-to-end web experiences",
        url: "https://soumyacodes.vercel.app",
        siteName: "Soumya Sagar Nayak",
        images: [
            {
                url: "/images/hero-screenshot.png",
                width: 1200,
                height: 630,
                alt: "Soumya Sagar Nayak — Software Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Soumya Sagar Nayak",
        description: "An engineering undergrad who likes making end-to-end web experiences",
        images: ["/images/hero-screenshot.png"],
    },
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Soumya Sagar Nayak",
        url: "https://soumyacodes.vercel.app",
        sameAs: [
            "https://x.com/theprinceraj",
            "https://github.com/theprinceraj",
            "https://www.linkedin.com/in/theprinceraj",
        ],
        jobTitle: "Software Engineer",
        email: "profile.princeraj@gmail.com",
    } as const;
    return (
        <html lang="en">
            <body
                className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white font-sans antialiased")}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Script
                    id="google-gtag"
                    src="https://www.googletagmanager.com/gtag/js?id=G-7M8S3FX4CC"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7M8S3FX4CC');`}
                </Script>
                {children}
            </body>
        </html>
    );
}
