import "../styles/index.css"

import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PreLoader from "../components/preLoader";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PreLoader path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
 
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>

  <style>{`/* width */
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #edf2f7;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 100vh;
    border: 3px solid #edf2f7;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
  }`}</style>
  <Component {...pageProps} />
  </>

}

export default MyApp
