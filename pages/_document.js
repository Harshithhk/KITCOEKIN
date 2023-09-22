import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>


        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />

        <link href="code/homepage/css/vendors/aos.css" rel="stylesheet"/>
        <link rel="stylesheet" href="code/homepage/css/vendors/swiper-bundle.min.css"/>
        <link href="code/homepage/style.css" rel="stylesheet"/>

      </Head>
      <body>
        <div id="page-transition"></div>
        <Main />
        <NextScript />
      </body>
     
    </Html>
  )
}
