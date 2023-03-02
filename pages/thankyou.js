import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import Script from "next/script";
import fbq from "../src/utils/fbq";

const ThankYouPage = () => {
    const router = useRouter();
    const amount = router.query.amount;
    const productUID = router.query.productUID;
    const campaignId = router.query.campaignId;
    let html = ``;
    let pixelId = null;
    switch (campaignId) {
        case 'cooking':
            html = html = `
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
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = year + '-' + month + '-' + day;
    setTimeout(() => {
        router.push("https://hobit.in/my-stuff");
        // fbq('track', 'Purchase');
    }, 5000);
    console.log('pixelId', pixelId);

    return (
        <>
            <Script
                id={"facebook-pixel"}
                strategy={"afterInteractive"}
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            />
            <Head>
                <title>ThankYou for your purchase!</title>
                <noscript><img height="1" width="1" style={{display: 'none'}}
                               src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                /></noscript>
            </Head>
            <div className={'h-screen flex flex-col bg-black items-center justify-center'}>
                <div className={'flex p-5 text-center justify-center mx-auto flex-col text-white'}>
                    <Image height={100} width={100} src={'/images/checkmark.png'} alt={'Thank You'} className={'mx-auto'}/>
                    <h1 className={'mt-4 font-bold text-2xl'}>Thank You</h1>
                    <p>Your class is confirmed.</p>
                    <br/>
                    <p>Your class will start on official app of Hobit.</p>
                    <p>Thankyou for choosing Hobit to pursue your hobbies.</p>
                </div>
                <div className={'flex flex-row justify-center text-white items-center mx-auto'}>
                    <div className={'border-r-2 border-white px-2 text-center'}>
                        <p className={'font-bold'}>Class ID:</p>
                        <p>{productUID}</p>
                    </div>
                    <div className={'border-r-2 border-white px-2 text-center'}>
                        <p className={'font-bold'}>Date:</p>
                        <p>{date}</p>
                    </div>
                    <div className={'border-r-2 border-white px-2 text-center'}>
                        <p className={'font-bold'}>Total:</p>
                        <p>₹{amount}</p>
                    </div>
                    <div className={' px-2 text-center'}>
                        <p className={'font-bold'}>Payment Status:</p>
                        <p>Success</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYouPage;
