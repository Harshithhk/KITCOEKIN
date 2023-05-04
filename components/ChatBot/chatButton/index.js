import React from "react";
import ChatBox from "../chatBox";

const ChatButton = () => {
    const [action, setAction] = React.useState(false)
    return (<>
        <div className=" sm:p-5 fixed sm:right-0 sm:bottom-0 3xl:bottom-10 2xl:bottom-10 3xl:right-10 2xl:right-10 z-50">
            <div className={!action?"absolute right-12":"hidden"}>
                <div className="relative w-fit h-fit">
                    <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                </div>
            </div>
            <div onClick={()=>{setAction(!action)}} className="hover:cursor-pointer bg-[#3e395a] rounded-full shadow-lg shadow-[#3e395a] p-2 sm:h-14 sm:w-14 h-16 w-16 flex items-center justify-center">
                {
                    action?
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white  h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    :
                   
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white animate-wiggle  hover:animate-none h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                }
            </div>
            <ChatBox action = {action} setAction = {setAction} />
        </div>
    </>)
};

export default ChatButton;