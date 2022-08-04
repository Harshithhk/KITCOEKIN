import React, { useEffect } from "react";
import Msg from "./msg";
import BasicStyles from "../../../styles/basic.module.css"
import BotServer from "../../../controllers/botServer"; 

const ChatBox = (props) => {

    const [msgList, setMsgList] = React.useState([]);
    const [inputField, setInputField] = React.useState("");
    const [data, setData] = React.useState({});
    const [selectItem, setSelectItem] = React.useState({});

    useEffect(()=>{
        const dataTemp = msgList;
        if(dataTemp.length === 0){
            setMsgList((prevState,index) => {
                return [...prevState, ...(prevState = [
                    <Msg MsgAction="input" User="BotServer" MsgValue={"Hey there 👋, How can I help you?"}  key={prevState.length} />,
                    <Msg MsgAction="items" MsgItems={['Admission','Placement','Syllabus','College Fee']}  key={prevState.length +1} selectItem = {selectItem} setSelectItem = {setSelectItem} />])];
            });        }
    })

    
    useEffect(()=>{
        const dataTemp = msgList;
        if(dataTemp.length > 0){
            if(dataTemp[dataTemp.length-1].props.MsgAction == "preLoader"){
                dataTemp.pop()
            }
        }
        setMsgList(dataTemp);
    },[msgList]);

    useEffect(()=>{
        const dataTemp = msgList;
        if(dataTemp.length > 2){

            let intent = data.intent
            let switchAction = data.switchAction
            let question = data.question

            if(switchAction == 0){
                setMsgList(msgList.concat(<Msg MsgAction="items" MsgItems={intent.entities}  key={msgList.length} selectItem = {selectItem} setSelectItem = {setSelectItem} />));  
            }else if(switchAction == 2){
                 let botResponse = intent.responses[Math.floor(Math.random()*intent.responses.length)]
                 setMsgList(msgList.concat(<Msg MsgAction="input" User="BotServer" MsgValue={botResponse}  key={msgList.length} />));  
            }
            if(intent.up_suggestions.length > 0){
                setMsgList((prevState,index) => {
                    return [...prevState, ...(prevState = [<Msg MsgAction="preLoader"  key={prevState.length} />])];
                });
                setTimeout(()=>{
                setMsgList((prevState,index) => {
                    return [...prevState, ...(prevState = [<Msg MsgAction="items" MsgItems={intent.up_suggestions}  key={prevState.length} selectItem = {selectItem} setSelectItem = {setSelectItem} />])];
                });
            },3000) 
            }
           
        }
    },[data]);


    useEffect(async ()=>{
      
        const dataTemp = msgList;
        if(dataTemp.length > 0){
            setMsgList(msgList.concat(<Msg MsgAction="input" User="Client" MsgValue={selectItem}  key={msgList.length} />))
            setMsgList((prevState,index) => {
                return [...prevState, ...(prevState = [<Msg MsgAction="preLoader"  key={msgList.length} />])];
            });
            const response = await BotServer("getChat",selectItem)
            setTimeout(()=>{setData(response);},3000);
        }
        
          
    },[selectItem]);

    

    return (<>
        <div className={props.action ? "absolute bottom-[60px] sm:bottom-0 right-[110px] sm:right-0 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.7)] w-[370px] sm:w-screen sm:h-screen  h-[600px] bg-secondary rounded-2xl": "hidden"}>
            <div className="flex flex-col bg-secondary rounded-2xl sm:rounded-none h-full w-full justify-between p-2">
                <div className="h-[15%] flex relative bg-white rounded-xl shadow-lg ">
                    <div className="w-1/4">
                        <img src="images/Chatbot/chatButton.png" className={`${BasicStyles.hugeShadow} animate-bounce2 absolute h-22 w-24 -top-2`} alt="" />
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
                <div id="chatBox" className=" overflow-x-clip h-[90%] bg-transparent rounded-xl flex flex-col  overflow-y-auto p-3 space-y-4">
                    
                    <div className="text-xs my-0 mx-auto py-1 px-4  bg-[#eee] text-[#999] rounded-[32px] w-fit">Today</div>
                    {msgList}
                    

                </div>
                {/* --- */}
                <div className="h-[15%] bg-transparent rounded-xl mt-2 ">
                    <div className="flex flex-col">
                        <div className="flex flex-row space-x-2">
                         
                            <input onKeyPress={(e) => e.key === 'Enter' && submit.click()} type="text" value={inputField} onChange={e => setInputField(e.target.value)} className=" bg-white h-10 rounded-3xl w-5/6 shadow-lg flex items-center justify-center p-4 focus:outline-none"  placeholder="Type your message here"></input>          
                           
                            <button 
                                id="submit"
                                disabled={!inputField}
                                onClick={ async (e)=>{
                                
                                    try{                                    
                                        setMsgList(msgList.concat(<Msg MsgAction="input" User="Client" MsgValue={inputField}  key={msgList.length} />,<Msg MsgAction="preLoader"  key={msgList.length + 1} />));  
                                        setInputField(""); 
                                        const response = await BotServer("getChat",inputField)
                                        setTimeout(()=>{setData(response);},3000);    
                                    }catch(err){
                                        console.log("Demn there's a error : ",err)
                                    }
                                }} 

                                className="focus:shadow-inner focus:bg-slate-100 hover:cursor-pointer hover:-rotate-12 rounded-full bg-white w-fit h-fit p-[10px] shadow-lg">
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