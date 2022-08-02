import React, { useEffect } from "react";
import Msg from "./msg";

const ChatBox = (props) => {

    const logoShadow = {
        '-webkit-filter': 'drop-shadow(0px 16px 10px rgba(0,0,60,0.6))',
          '-moz-filter':' drop-shadow(0px 16px 10px rgba(0,0,60,0.6))',
          '-ms-filter':' drop-shadow(0px 16px 10px rgba(0,0,60,0.6))',
          '-o-filter':' drop-shadow(0px 16px 10px rgba(0,0,60,0.6))',
          ' filter': 'drop-shadow(0px 16px 10px rgba(0,0,60 ,0.6))',
    }

    const [msgList, setMsgList] = React.useState([]);
    const [inputField, setInputField] = React.useState("");

    // useEffect(()=>{setInputField("")},[inputField]);

    return (<>
        <div className={props.action ? "absolute bottom-[60px] sm:bottom-0 right-[110px] sm:right-0 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.7)] w-[370px] sm:w-screen sm:h-screen  h-[600px] bg-secondary rounded-2xl": "hidden"}>
            <div className="flex flex-col bg-secondary rounded-2xl sm:rounded-none h-full w-full justify-between p-2">
                <div className="h-[15%] flex relative bg-white rounded-xl shadow-lg ">
                    <div className="w-1/4">
                        <img src="images/Chatbot/chatButton.png" style={logoShadow} className=" animate-bounce2 absolute h-22 w-24 -top-2" alt="" />
                    </div>
                    <div className="w-3/4 flex flex-col p-2 pl-5">
                        <div className="font-bold text-3xl text-[#3e395a]">
                            Mista
                        </div>
                        <div className="flex flex-row items-center mt-2">
                            <div className="w-[25%] h-1 bg-[#3e395a]"></div>
                            <div className="h-[.4px] w-[60%] bg-[#3e395a]"></div>
                        </div>
                        <div className="flex flex-row justify-end items-center text-slate-400 text-xs gap-2 pr-8">
                            <p className="tracking-wider">Your KIT Assistant</p><div className="w-2 h-2 rounded-sm bg-green-300"></div>
                        </div>
                    </div>
                </div>
                {/* --- */}
                <div id="chatBox" className=" h-[90%] bg-transparent rounded-xl flex flex-col  overflow-y-auto p-3 space-y-4">
                    
                    <div className="text-xs my-0 mx-auto py-1 px-4  bg-[#eee] text-[#999] rounded-[32px] w-fit">Today</div>
                    {msgList}
                    

                </div>
                {/* --- */}
                <div className="h-[15%] bg-transparent rounded-xl mt-2 ">
                    <div className="flex flex-col">
                        <div className="flex flex-row space-x-2">
                         
                            <input type="text" value={inputField} onChange={e => setInputField(e.target.value)} className=" bg-white h-10 rounded-3xl w-5/6 shadow-lg flex items-center justify-center p-4"  placeholder="Type your message here"></input>          
                           
                            <button onClick={(e)=>{

                                setMsgList(msgList.concat(<Msg MsgAction="preLoader" User="Client" MsgValue={inputField}  key={msgList.length} />));
                                setInputField("");  
                                }} className="focus:shadow-inner focus:bg-slate-100 hover:cursor-pointer hover:-rotate-12 rounded-full bg-white w-fit h-fit p-[10px] shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" rotate-90 h-5 w-5 text-[#3e395a]" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>   
                        </div>  
                        <div className="flex mt-3 justify-center">
                        <p className="flex flex-row text-xs text-slate-500">Powered by <a href="www.hashinclude.co.in" className="flex flex-row"> <img src="images/ChatBot/hashinclude_logo.png" className="h-4 w-4 mx-1" alt="" />  Hashinclude</a></p>    
                        </div>  
                    </div>   
                </div>                
            </div>
        </div>
    </>)
};

export default ChatBox;