import { Html, Head, Main, NextScript } from "next/document"


export default function Document() {
  return (
    <Html>
      <Head>


        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <div id="page-transition"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
