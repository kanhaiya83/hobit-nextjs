import TopSection from "../../src/components/TopSection";
import FAQSection from "../../src/components/FAQSection";
import CheckboxSection from "../../src/components/CheckboxSection";
import LoginModal from "../../src/components/LoginModal";
import { useState } from "react";
import Header from "../../src/components/Header";
// import VideoTestimonialSection from "../../src/components/VideoTestimonialSection";
import TimerSection from "../../src/components/TimerSection";
import  pagesData  from "../../src/constants/pages.json";
import { Divider } from "@chakra-ui/react";
import Footer from "../../src/components/Footer";
import FeaturedSection from "../../src/components/FeaturedSection";
import SlidingTestimonials from "../../src/components/SlidingTestimonials";
import MentorSection from "../../src/components/MentorSection";
import AdvantagesSection from "../../src/components/AdvantagesSection";

export default function CampaignPage({ data }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div id="recaptcha-container" style={{ width: "100%" }}></div>
      <Header />
      <TopSection data={data}/>
      <FeaturedSection />
    <Divider maxW={700} mx="auto"/>
      {/* <VideoTestimonialSection data={data}/> */}
      {/* <Divider maxW={700} mx="auto"/> */}
<AdvantagesSection data={data}/>
    <Divider maxW={700} mx="auto"/>
    <SlidingTestimonials/>
    <Divider maxW={700} mx="auto"/>
      <TimerSection data={data}/>
    <Divider maxW={700} mx="auto"/>
      <CheckboxSection data={data}/>
    <Divider maxW={700} mx="auto"/>
    <MentorSection data={data}/>
    <Divider maxW={700} mx="auto"/>
      <FAQSection />
      <Footer/>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const campaign_id = params.campaign_id;
  const foundCampaign = pagesData.find((p) => p.campaign_id === campaign_id);
  return {
    props: {
      data: foundCampaign,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { campaign_id: "zumba" } },
      // { params: { campaign_id: "bellydance" } },
      // { params: { campaign_id: "bollywooddance" } },
      // { params: { campaign_id: "kathak" } },
      // { params: { campaign_id: "bhangra" } },
    ],
    fallback: false,
  };
}
