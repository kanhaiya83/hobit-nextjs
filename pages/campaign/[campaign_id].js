import TopSection from "../../src/components/TopSection";
import FAQSection from "../../src/components/FAQSection";
import WorkshopDetailsSection from "../../src/components/WorkshopDetailsSection";
import CheckboxSection from "../../src/components/CheckboxSection";
import LoginModal from "../../src/components/LoginModal";
import { useState } from "react";
import Header from "../../src/components/Header";
import TestimonialSection from "../../src/components/TestimonialSection";
import TimerSection from "../../src/components/TimerSection";
import { useRouter } from "next/router";
import  pagesData  from "./constants/pages.json";
import { Divider } from "@chakra-ui/react";

export default function CampaignPage({ data }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div id="recaptcha-container" style={{ width: "100%" }}></div>
      <Header />
      <TopSection data={data}/>
      {/* <WorkshopDetailsSection /> */}
      <TestimonialSection testimonials={data.testimonials}/>
    <Divider maxW={700} mx="auto"/>
      <TimerSection data={data}/>
    <Divider maxW={700} mx="auto"/>
      <CheckboxSection checklist={data.advantages}/>
    <Divider maxW={700} mx="auto"/>
      <FAQSection />
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
