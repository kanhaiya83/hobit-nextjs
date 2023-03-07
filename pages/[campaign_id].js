import TopSection from "../src/components/TopSection";
import FAQSection from "../src/components/FAQSection";
import CheckboxSection from "../src/components/CheckboxSection";
import {useEffect} from "react";
import Header from "../src/components/Header";
import TimerSection from "../src/components/TimerSection";
import Footer from "../src/components/Footer";
import FeaturedSection from "../src/components/FeaturedSection";
import SlidingTestimonials from "../src/components/SlidingTestimonials";
import MentorSection from "../src/components/MentorSection";
import AdvantagesSection from "../src/components/AdvantagesSection";
import VideoTestimonialSection from "../src/components/VideoTestimonialSection";
import {useAuthContext} from "../src/context/authContext";
import {auth, db} from "../src/utils/firebase";
import {child, get, ref} from "firebase/database";
import {useRouter} from "next/router";
import {RazorpayContextProvider} from "../src/context/razorpayContext";
import Divider from "../src/components/Divider";
import ChatButton from "../src/components/ChatButton";
import Script from "next/script";
import Head from "next/head";

export default function CampaignPage({data}) {
    let html = ``;
    let pixelId = null;
    let gtagId = null;
    switch (data.activity_name) {
        case 'Cooking':
            html = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '561600562411357');
            fbq('track', 'PageView');
            
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "g4aonndzcc");
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7JGEZWVYKJ');
            `;
            pixelId = '561600562411357';
            gtagId = 'G-7JGEZWVYKJ';
            break;
        case 'Zumba':
            html = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '488470343303714');
            fbq('track', 'PageView');
            
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "g4anuod2eu");
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GYGQB9FTG');
            `;
            pixelId = '488470343303714';
            gtagId = 'G-3GYGQB9FTG';
            break;
        case 'bhangra Fitness':
            html = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '72688042548112');
            fbq('track', 'PageView');
            
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "g4apbw7ex6");
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JS687YD8JE');
            `;
            pixelId = '72688042548112';
            gtagId = 'G-JS687YD8JE';
            break;
        case 'Belly Dance':
            html = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '206049795340000');
            fbq('track', 'PageView');
            
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "g4aq6jmx2k");
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S054LL1JP2');
            `;
            pixelId = '206049795340000';
            gtagId = 'G-S054LL1JP2';
            break;
        case 'yoga':
            html = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '73215676828834');
            fbq('track', 'PageView');
            
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "g4aqvkkhjb");
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRJ1E1CDLR');
            `;
            pixelId = '73215676828834';
            gtagId = 'G-NRJ1E1CDLR';
            break;
    }
    const {isAuthenticated, hasEnrolled, setHasEnrolled} = useAuthContext();
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
                    __html: html
                }}
            />

            {/*Google Tag implementation*/}
            <Script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}/>

            <Head>
                <noscript><img height="1" width="1" style={{display: 'none'}}
                               src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                /></noscript>
            </Head>
            <RazorpayContextProvider pageData={data}>
                <div id="recaptcha-container" style={{width: "100%"}}></div>
                <Header/>
                <TopSection data={data}/>
                <FeaturedSection/>
                <Divider maxW={700} mx="auto"/>
                <VideoTestimonialSection data={data}/>
                <Divider maxW={700} mx="auto"/>
                <AdvantagesSection data={data}/>
                <Divider maxW={700} mx="auto"/>
                <SlidingTestimonials data={data}/>
                <Divider maxW={700} mx="auto"/>
                <TimerSection data={data}/>
                <Divider maxW={700} mx="auto"/>
                <CheckboxSection data={data}/>
                <Divider maxW={700} mx="auto"/>
                <MentorSection data={data}/>
                <Divider maxW={700} mx="auto"/>
                <FAQSection data={data}/>
                <Footer/>
            </RazorpayContextProvider>
            <ChatButton/>
        </>
    );
}

export async function getStaticProps(context) {
    const {params} = context;
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
            {params: {campaign_id: "zumba"}},
            {params: {campaign_id: "cooking"}},
            {params: {campaign_id: "bellydance"}},
            {params: {campaign_id: "bhangra"}},
            {params: {campaign_id: "yoga"}},
        ],
        fallback: false,
    };
}
