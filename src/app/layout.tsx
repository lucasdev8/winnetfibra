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

export const metadata = {
  title: "OneClick Fibra | internet de verdade!",
  description: "Vem pra para a melhor!",
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-br">
      <InitAOS />
      <head>

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Montserrat:300,400,600,700|Poppins:300,400,600,700"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link rel="icon" href="/img/favicon.png" />
        
      </head>

      <body>

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

      </body>
    </html>
  )
}