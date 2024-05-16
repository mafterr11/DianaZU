import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "DianaZU - Designer Freelance",
  description = "Alege Myriad Tech pentru servicii personalizate de web development, transformând viziunea afacerii tale în realitate prin soluții digitale inovatoare.",
  keywords = "dezvoltare web, design web personalizat, dezvoltator web freelancer, site-uri responsive, solutii e-commerce, Myriad Tech, design web, freelancer, bucuresti, romania, afacere mica, maftei alexandru, preturi site, super pret",
  image = "/logo.png",
  icons = "/icon.svg",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "https://myriad-tech.ro",
      description,
      images: [image],
      creator: "@dianazu",
    },
    icons,
    metadataBase: new URL("https://dianazu.vercel.app"),
  };
}
