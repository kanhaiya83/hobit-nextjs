import TopSection from "../../src/components/TopSection";
import FAQSection from "../../src/components/FAQSection";
import CheckboxSection from "../../src/components/CheckboxSection";
import LoginModal from "../../src/components/LoginModal";
import { useEffect, useState } from "react";
import Header from "../../src/components/Header";
import TimerSection from "../../src/components/TimerSection";
import pagesData from "../../src/constants/pages.json";
import Footer from "../../src/components/Footer";
import FeaturedSection from "../../src/components/FeaturedSection";
import SlidingTestimonials from "../../src/components/SlidingTestimonials";
import MentorSection from "../../src/components/MentorSection";
import AdvantagesSection from "../../src/components/AdvantagesSection";
import VideoTestimonialSection from "../../src/components/VideoTestimonialSection";
import { useAuthContext } from "../../src/context/authContext";
import { auth } from "../../src/utils/firebase";
import { useRouter } from "next/router";
import { RazorpayContextProvider } from "../../src/context/razorpayContext";
import Divider from "../../src/components/Divider";

export default function CampaignPage({ data }) {
const {isAuthenticated,hasEnrolled,setHasEnrolled} = useAuthContext()
const router  = useRouter()
const pid = router.query;
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if(!isAuthenticated || hasEnrolled===pid) return;
    (async () => {
      const res= await fetch(`/api/razorpay?uid=${auth.currentUser.uid}&course=${pid}`);
      const response = await res.json();
      if(response.success){
        setHasEnrolled(pid);
      }
    })();
  }, [isAuthenticated]);
  return (
    <>
    <RazorpayContextProvider pageData={data}>
      <div id="recaptcha-container" style={{ width: "100%" }}></div>
      <Header />
      <TopSection data={data} />
      <FeaturedSection />
      <Divider maxW={700} mx="auto" />
      <VideoTestimonialSection data={data} />
      <Divider maxW={700} mx="auto" />
      <AdvantagesSection data={data} />
      <Divider maxW={700} mx="auto" />
      <SlidingTestimonials data={data} />
      <Divider maxW={700} mx="auto" />
      <TimerSection data={data} />
      <Divider maxW={700} mx="auto" />
      <CheckboxSection data={data} />
      <Divider maxW={700} mx="auto" />
      <MentorSection data={data} />
      <Divider maxW={700} mx="auto" />
      <FAQSection data={data} />
      <Footer />

      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </RazorpayContextProvider>
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
      { params: { campaign_id: "cooking" } },
      { params: { campaign_id: "bellydance" } },
      { params: { campaign_id: "bhangra" } },
      { params: { campaign_id: "yoga" } }
    ],
    fallback: false,
  };
}
