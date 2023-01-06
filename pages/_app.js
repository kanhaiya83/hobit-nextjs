import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/index.css";
import { AuthContextProvider } from "./src/context/authContext";
import { ChakraProvider } from '@chakra-ui/react'
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
        <Component {...pageProps} />
      </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}
