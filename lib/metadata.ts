import type { Metadata } from "next";

const BASE_URL = "https://www.creatorstouchglobal.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Creators Touch Global | AI, Web Development & Digital Marketing Agency",
    template: "%s | Creators Touch Global",
  },
  description:
    "Creators Touch Global is a next-generation agency specializing in AI solutions, web development, and digital marketing. We build bold, intelligent, and high-converting digital experiences.",
  keywords: [
    "AI agency",
    "web development agency",
    "digital marketing agency",
    "AI solutions",
    "branding agency",
    "creative agency",
    "Creators Touch Global",
    "creatorstouchglobal",
  ],
  authors: [{ name: "Creators Touch Global", url: BASE_URL }],
  creator: "Creators Touch Global",
  publisher: "Creators Touch Global",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/creator_touch.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Creators Touch Global",
    title: "Creators Touch Global | AI, Web Development & Digital Marketing Agency",
    description:
      "Next-generation agency specializing in AI solutions, web development, and digital marketing.",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Creators Touch Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators Touch Global | AI, Web Development & Digital Marketing Agency",
    description:
      "Next-generation agency specializing in AI solutions, web development, and digital marketing.",
    images: ["/images/og/og-default.jpg"],
    creator: "@creatorstouchglobal",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  ogImage?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Creators Touch Global`,
      description,
      url: `${BASE_URL}${path}`,
      images: [
        {
          url: ogImage ?? "/images/og/og-default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title} | Creators Touch Global`,
      description,
      images: [ogImage ?? "/images/og/og-default.jpg"],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}
