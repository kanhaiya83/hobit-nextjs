import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <script async src={'/static/facebook_pixel.js'} />
          <noscript><img height="1" width="1" style="display:none"
                         src="https://www.facebook.com/tr?id=724029262513851&ev=PageView&noscript=1"
          /></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
