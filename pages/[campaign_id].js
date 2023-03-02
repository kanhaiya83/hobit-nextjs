import TopSection from "../src/components/TopSection";
import FAQSection from "../src/components/FAQSection";
import CheckboxSection from "../src/components/CheckboxSection";
import {useEffect, useState} from "react";
import Header from "../src/components/Header";
import TimerSection from "../src/components/TimerSection";
import pagesData from "../src/constants/pages.json";
import Footer from "../src/components/Footer";
import FeaturedSection from "../src/components/FeaturedSection";
import SlidingTestimonials from "../src/components/SlidingTestimonials";
import MentorSection from "../src/components/MentorSection";
import AdvantagesSection from "../src/components/AdvantagesSection";
import VideoTestimonialSection from "../src/components/VideoTestimonialSection";
import { useAuthContext } from "../src/context/authContext";
import { auth, db } from "../src/utils/firebase";
import { ref, child, get } from "firebase/database";
import { useRouter } from "next/router";
import { RazorpayContextProvider } from "../src/context/razorpayContext";
import Divider from "../src/components/Divider";
import ChatButton from "../src/components/ChatButton";
import Script from "next/script";
import Head from "next/head";
export default function CampaignPage({ data }) {
  let html = ``;
  let pixelId = null;
  if(data.activity_name === 'Cooking') {
    html = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1319617838557771');
    fbq('track', 'PageView');
    `;
    pixelId = '1319617838557771';
  }
  const { isAuthenticated, hasEnrolled, setHasEnrolled } = useAuthContext();
  const router = useRouter();
  const pid = router.query;
  useEffect(() => {
    return
    if (!isAuthenticated || hasEnrolled === pid) return;
    (async () => {
      const res = await fetch(
        `/api/razorpay?uid=${auth.currentUser.uid}&course=${pid}`
      );
      const response = await res.json();
      if (response.success) {
        setHasEnrolled(pid);
      }
    })();
  }, [hasEnrolled, isAuthenticated, pid, setHasEnrolled]);
  return (
    <>
      <Script
        id={"facebook-pixel"}
        strategy={"afterInteractive"}
        dangerouslySetInnerHTML={{
          __html:html
        }}
        />
      <Head>
        <noscript><img height="1" width="1" style={{display: 'none'}}
                       src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        /></noscript>
      </Head>
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
      </RazorpayContextProvider>
      <ChatButton />
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const campaign_id = params.campaign_id;
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `Campaigns`));
  if (snapshot.exists()) {
    const foundCampaign = snapshot.val()[campaign_id];
    return {
      props: {
        data: foundCampaign,
      },
      revalidate: 30

    };
  } else {
    console.log("No data available");
  }

}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { campaign_id: "zumba" } },
      { params: { campaign_id: "cooking" } },
      { params: { campaign_id: "bellydance" } },
      { params: { campaign_id: "bhangra" } },
      { params: { campaign_id: "yoga" } },
    ],
    fallback: false,
  };
}
