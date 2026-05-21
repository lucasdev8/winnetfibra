
import SectionAbout from "./components/SectionAbout";
import SectionFaq from "./components/SectionFaq";
import SectionInfo from "./components/SectionInfo";
import SectionTec from "./components/SectionTec";
import SectionTestmonials from "./components/SectionTestmonials";

export default function Home() {
  return (
    <>
      <SectionAbout />
      <SectionInfo />
      <SectionTec />
      <SectionTestmonials />
      <SectionFaq />
    </>
  )
}
