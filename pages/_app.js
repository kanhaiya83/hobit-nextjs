import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { AuthContextProvider } from "../src/context/authContext";
import { ChakraProvider } from '@chakra-ui/react'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight:["300","500","700"],
  variable: '--font-poppins'
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
