import "../styles/globals.css";
import "../styles/index.css";
import "../styles/firebase.css";
import {AuthContextProvider} from "../src/context/authContext";
import Head from 'next/head'
import localFont from '@next/font/local'
import Script from 'next/script'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from "../src/components/LoginModal";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const gilroy = localFont({
    src: [{
        path: '../public/fonts/gilroy/Gilroy-Light.woff', weight: '300', style: 'normal',
    }, {
        path: '../public/fonts/gilroy/Gilroy-Regular.woff', weight: '400', style: 'normal',
    }, {
        path: '../public/fonts/gilroy/Gilroy-Medium.woff', weight: '500', style: 'normal',
    }, {
        path: '../public/fonts/gilroy/Gilroy-SemiBold.woff', weight: '600', style: 'normal',
    }, {
        path: '../public/fonts/gilroy/Gilroy-Bold.woff', weight: '800', style: 'normal',
    }, {
        path: '../public/fonts/gilroy/Gilroy-Heavy.woff', weight: '900', style: 'normal',
    }], variable: '--font-gilroy'
})


export default function App({Component, pageProps}) {
    const router = useRouter();
    const [pixelId, setPixelId] = useState(null);
    const [scriptSrc, setScriptSrc] = useState(null);

    useEffect(() => {
        switch (router.pathname) {
            case '/zumba':
                setPixelId('724029262513851');
                setScriptSrc('/static/facebook_pixel/zumba.js');
                break;
            case '/cooking':
                setPixelId('488470343303714');
                setScriptSrc('/static/facebook_pixel/cooking.js');
                break;
        }


    }, [pixelId, router]);

    return (<>
            {/*<Script*/}
            {/*    id={'facebook-pixel'}*/}
            {/*    strategy={"afterInteractive"}*/}
            {/*    dangerouslySetInnerHTML={{*/}
            {/*        __html: `*/}
            {/*         !function(f,b,e,v,n,t,s)*/}
            {/*            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/}
            {/*                n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
            {/*                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
            {/*                n.queue=[];t=b.createElement(e);t.async=!0;*/}
            {/*                t.src=v;s=b.getElementsByTagName(e)[0];*/}
            {/*                s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
            {/*            'https://connect.facebook.net/en_US/fbevents.js');*/}
            {/*            fbq('init', '${pixelId}');*/}
            {/*            fbq('track', 'PageView');*/}

            {/*        `*/}
            {/*    }}/>*/}
            <Head>
                <title>Hobit</title>
                <link rel="shortcut icon" href="/images/logo.png"/>
                {/*<noscript><img height="1" width="1" style={{display: 'none'}}*/}
                {/*               src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}*/}
                {/*/></noscript>*/}
                <meta name="facebook-domain-verification" content="mbcpw64k4w11wp31hucxk5tr6ayjip" />
            </Head>
            <AuthContextProvider>
                <main className={`${gilroy.variable} font-sans`}>

                    <Component {...pageProps} />
                    <LoginModal/>

                </main>
            </AuthContextProvider>
            <ToastContainer/>
        </>
    );
}
