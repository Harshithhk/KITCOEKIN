import React from "react"
import PreLoader from "../../../../styles/preLoader.module.css"
import { Markup } from "interweave"

const Msg = (props) => {
  switch (props.MsgAction) {
    case "input":
      if (props.User == "Client") {
        return (
          <div className="ml-auto w-fit right-0 max-w-[70%]  min-h-10 rounded-l-3xl rounded-tr-3xl bg-[#3e395a] text-white shadow-lg py-2 px-4">
            {props.MsgValue}
          </div>
        )
      } else if (props.User == "BotServer") {
        return (
          <div className=" flex flex-wrap w-fit max-w-[70%] min-h-10 rounded-r-3xl rounded-tl-3xl bg-white shadow-lg p-2 px-3">
            <Markup content={props.MsgValue} />
          </div>
        )
      } else {
        return <></>
      }
      break
    case "preLoader":
      return (
        <div>
          <div className={`${PreLoader.dotPulse} ml-4`}></div>
        </div>
      )
    case "items":
      return (
        <div className="flex flex-wrap justify-end">
          {props.MsgItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  props.setSelectItem(item)
                }}
                className="ring-2 ring-[#3e395a] w-fit h-[30px] text-[#3e395a] rounded-2xl p-[3px] px-2 m-1 hover:bg-[#3e395a] hover:text-white cursor-pointer focus:bg-[#3e395a] focus:text-white"
              >
                {item}
              </div>
            )
          })}
        </div>
      )
    case "serverDown":
      return (
        <div className="flex flex-col items-center justify-center w-full ">
          <img
            src="images/ChatBot/hashinclude_logo.png"
            className="h-36 w-36"
            alt=""
          />
          <div className="flex p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Under Development Please Come Back Later
          </div>
        </div>
      )

    default:
      return <></>
  }
}

export default Msg
