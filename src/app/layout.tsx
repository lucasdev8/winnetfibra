import Script from "next/script"
import "../../public/vendor/bootstrap/css/bootstrap.min.css"
import "../../public/vendor/aos/aos.css"
import "../../public/vendor/boxicons/css/boxicons.min.css"
import "../../public/vendor/swiper/swiper-bundle.min.css"
import "./bootstrap.css"
import InitAOS from "./components/InitAOS"
import Header from "./components/Header"
import SectionHero from "./components/SectionHero"
import Footer from "./components/Footer"
import SectionTestmonials from "./components/SectionTestmonials"
import SectionFaq from "./components/SectionFaq"
import SectionAbout from "./components/SectionAbout"
import SectionInfo from "./components/SectionInfo"
import SectionTec from "./components/SectionTec"
import { Poppins } from "next/font/google"

export const metadata = {
  metadataBase: new URL("https://oneclickfibra.com.br"),

  title:
    "OneClick Fibra | Internet Fibra Óptica de Alta Velocidade",

  description:
    "Internet fibra óptica com ultra velocidade, estabilidade e suporte de qualidade para sua casa ou empresa.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "OneClick Fibra | Internet Fibra Óptica de Alta Velocidade",

    description:
      "Internet fibra óptica em Mata roma-MA, com ultra velocidade, estabilidade e suporte de qualidade para sua casa ou empresa.",

    url: "https://oneclickfibra.com.br",

    siteName: "OneClick Fibra",

    type: "website",

    locale: "pt_BR",

    images: [
      {
        url: "https://oneclickfibra.com.br/img/logo-cor.png",
        width: 1200,
        height: 630,
        alt: "OneClick Fibra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "OneClick Fibra | Internet Fibra Óptica de Alta Velocidade",

    description:
      "Internet fibra óptica com ultra velocidade e estabilidade.",

    images: ["https://oneclickfibra.com.br/img/og-image.jpg"],
  }
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-br">
      <InitAOS />
      <head>

        {/* Favicons */}
        <link rel="icon" href="/img/favicon.png" />

      </head>

      <body className={poppins.className}>

        {/* Header */}
        <Header />
        <SectionHero />

        {children}

        <SectionAbout />
        <SectionInfo />
        <SectionTec />
        <SectionTestmonials />
        <SectionFaq />

        <Footer />

        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InternetServiceProvider',

              name: 'OneClick Fibra',

              url: 'https://oneclickfibra.com.br',


              logo: 'https://oneclickfibra.com.br/img/logo.png',

              image: 'https://oneclickfibra.com.br/img/og-image.jpg',

              telephone: '+5598992489457',

              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mata Roma',
                addressRegion: 'MA',
                addressCountry: 'BR',
              },

              areaServed: 'Mata roma',

              sameAs: [
                'https://instagram.com/oneclickfibra',
              ],
            }),
          }}
        />

      </body>
    </html>
  )
}