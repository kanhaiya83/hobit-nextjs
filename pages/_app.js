import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { AuthContextProvider } from "../src/context/authContext";
import { ChakraProvider } from '@chakra-ui/react'
import { Poppins } from '@next/font/google'
import Head from 'next/head'
const poppins = Poppins({
  weight:["300","500","700"],
  variable: '--font-poppins',
  subsets:["latin"]
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
    <Head>
    <title>Hobit</title>
        <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
    <ChakraProvider>
      <AuthContextProvider>
          <main className={`${poppins.variable} font-sans`}>
          <Component {...pageProps} />
          </main>
      </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}
