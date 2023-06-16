import React from "react";

const PreLoader = () => {
    return(
       <>
       <style >{`
      .loader {
        position: relative;
        width: 2.5em;
        height: 2.5em;
        transform: rotate(165deg);
      }
      .loader:before, .loader:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 0.25em;
        transform: translate(-50%, -50%);
      }
      .loader:before {
        animation: before 2s infinite;
      }
      .loader:after {
        animation: after 2s infinite;
      }
      
      @keyframes before {
        0% {
          width: 0.5em;
          box-shadow: 1em -0.5em rgba(53, 69, 126, 0.75), -1em 0.5em rgba(53, 69, 126, 0.75);
        }
        35% {
          width: 2.5em;
          box-shadow: 0 -0.5em rgba(240, 124, 0, 0.7), 0 0.5em rgba(240, 124, 0, 0.7);
        }
        70% {
          width: 0.5em;
          box-shadow: -1em -0.5em rgba(53, 69, 126, 0.75), 1em 0.5em rgba(53, 69, 126, 0.75);
        }
        100% {
          box-shadow: 1em -0.5em rgba(53, 69, 126, 0.75), -1em 0.5em rgba(53, 69, 126, 0.75);
        }
      }
      @keyframes after {
        0% {
          height: 0.5em;
          box-shadow: 0.5em 1em rgba(240, 124, 0, 0.7), -0.5em -1em rgba(240, 124, 0, 0.7);
        }
        35% {
          height: 2.5em;
          box-shadow: 0.5em 0 rgba(240, 124, 0, 0.7), -0.5em 0 rgba(240, 124, 0, 0.7);
        }
        70% {
          height: 0.5em;
          box-shadow: 0.5em -1em rgba(240, 124, 0, 0.7), -0.5em 1em rgba(240, 124, 0, 0.7);
        }
        100% {
          box-shadow: 0.5em 1em rgba(240, 124, 0, 0.7), -0.5em -1em rgba(240, 124, 0, 0.7);
        }
      }
      /**
       * Attempt to center the whole thing!
       */
      html,
      body {
        height: 100%;
      }
      
      .loader {
        position: absolute;
        top: calc(50% - 1.25em);
        left: calc(50% - 1.25em);
      }
        `}</style>
        <div role="status" className="flex flex-col bg-white bg-opacity-50 shadow-3xl shadow-black  z-50 left-0 top-0 w-full  h-full fixed  items-center justify-center ">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-black  animate-bounce ">
            <   path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>         */}
            <div className="loader"></div>
        </div>
       </>
    )
}

export default PreLoader