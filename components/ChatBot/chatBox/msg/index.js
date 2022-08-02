import React from "react";

const Msg = (props) =>{
    

    switch(props.MsgAction){
        case "input":
            if(props.User == "Client"){
                return(
                    <div className="ml-auto w-fit right-0 max-w-[70%]  min-h-10 rounded-l-3xl rounded-tr-3xl bg-[#3e395a] text-white shadow-lg py-2 px-4">
                        {props.MsgValue} 
                    </div>
                )
            }else if(props.User == "BotServer"){
                return(
                    <div className=" w-fit max-w-[70%] min-h-10 rounded-r-3xl rounded-tl-3xl bg-white shadow-lg p-2 px-3">
                        {props.MsgValue} 
                    </div>
                )
            }else{
                return(<></>)
            }
            break;
        case "preLoader": 
        let circleCommonClasses = 'h-2.5 w-2.5  bg-slate-200 shadow-2xl rounded-full';

        return (
       <div class="col-3">
        <div class="snippet" data-title=".dot-pulse">
          <div class="stage">
            <div class="dot-pulse"></div>
          </div>
        </div>
      </div>
        );
        case "items": break;
        default : return(<></>);

    }
    
};

export default Msg;