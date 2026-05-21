import Script from "next/script"
import "../../public/vendor/bootstrap/css/bootstrap.min.css"
import "../../public/vendor/aos/aos.css"
// import "../../public/vendor/boxicons/css/boxicons.min.css"
import "../../public/vendor/swiper/swiper-bundle.min.css"
import "./bootstrap.css"
import InitAOS from "./components/InitAOS"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Poppins } from "next/font/google"

export const metadata = {
  metadataBase: new URL("https://oneclickfibra.com.br"),
  alternates: {
    canonical: "https://oneclickfibra.com.br",
  },
  title: "OneClick Fibra | Internet Fibra Óptica de Alta Velocidade",
  description:
    "Internet fibra óptica com ultra velocidade, estabilidade e suporte de qualidade para sua casa ou empresa.",
  icons: {
    icon: "/img/favicon.png",
  },

  openGraph: {
    title: "OneClick Fibra | Internet Fibra Óptica de Alta Velocidade",
    description:
      "Internet fibra óptica em Mata Roma-MA com alta performance e estabilidade.",
    url: "https://oneclickfibra.com.br",
    siteName: "OneClick Fibra",
    images: [
      {
        url: "https://oneclickfibra.com.br/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OneClick Fibra",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade.",
    images: ["https://oneclickfibra.com.br/img/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  "priceRange": "$$",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55992489457",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -3.625,
    "longitude": -43.1108
  },

  name: "OneClick Fibra",

  url: "https://oneclickfibra.com.br",

  logo: "https://oneclickfibra.com.br/img/logo.png",

  image: "https://oneclickfibra.com.br/img/og-image.jpg",

  description:
    "Internet fibra óptica com ultra velocidade e estabilidade.",

  telephone: "+5589982489457",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Mata Roma",
    addressRegion: "MA",
    addressCountry: "BR",
  },

  areaServed: "Mata Roma",

  sameAs: [
    "https://instagram.com/oneclickfibra",
    "https://oneclickfibra.speedtestcustom.com"
  ],
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

      </head>

      <body className={poppins.className}>

        {/* Header */}
        <InitAOS />
        <Header />

        {children}

        <Footer />

        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}