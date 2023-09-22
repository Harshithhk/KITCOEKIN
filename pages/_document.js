import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>


        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />

        <link href="code/homePage/style.css" rel="stylesheet"/>

      </Head>
      <body>
        <div id="page-transition"></div>
        <Main />
        <NextScript />
      </body>
     
    </Html>
  )
}
