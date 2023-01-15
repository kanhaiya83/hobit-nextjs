import Script from 'next/script'
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/firebase.css";
import { AuthContextProvider } from "../src/context/authContext";
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import localFont from '@next/font/local'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const gilroy = localFont({ src: [{
  path: '../public/fonts/gilroy/Gilroy-Light.woff',
  weight: '300',
  style: 'normal',
},{
  path: '../public/fonts/gilroy/Gilroy-Regular.woff',
  weight: '400',
  style: 'normal',
},{
  path: '../public/fonts/gilroy/Gilroy-Medium.woff',
  weight: '500',
  style: 'normal',
},{
  path: '../public/fonts/gilroy/Gilroy-SemiBold.woff',
  weight: '600',
  style: 'normal',
},{
  path: '../public/fonts/gilroy/Gilroy-Bold.woff',
  weight: '800',
  style: 'normal',
},{
  path: '../public/fonts/gilroy/Gilroy-Heavy.woff',
  weight: '900',
  style: 'normal',
}] ,variable: '--font-gilroy'})


export default function App({ Component, pageProps }) {

  return (
    <>
    <Head>
    <title>Hobit</title>
        <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
    <ChakraProvider>
      <AuthContextProvider>
          <main className={`${gilroy.variable} font-sans`}>

          <Component {...pageProps} />
          <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
          </main>
      </AuthContextProvider>
      </ChakraProvider>
      <ToastContainer/>
    </>
  );
}
