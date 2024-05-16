import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "DianaZU - Designer Freelance",
  description = "Alege Diana pentru servicii personalizate de ilustrare, artă de fundal și design grafic, transformând ideile tale în realitate prin creații vizuale captivante și inovatoare.",
  keywords = "ilustrație, artă de fundal, design grafic personalizat, artist vizual freelancer, fundaluri creative, soluții grafice, Diana, ilustrații, freelancer, București, România, artă vizuală, prețuri accesibile, proiecte grafice, calitate superioară",
  image = "/logo.webp",
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
      site: "https://dianazu.vercel.app",
      description,
      images: [image],
      creator: "@dianazu",
    },
    icons,
    metadataBase: new URL("https://dianazu.vercel.app"),
  };
}
