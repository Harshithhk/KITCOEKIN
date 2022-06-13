import ChatBotButtonStyle from "../styles/ChatBotButton.module.css"
import ChatBoxStyle from "../styles/ChatBox.module.css"
import {botPicButton} from "../styles/ChatBotButton.module.css"
const ChatBotButton = () => {

    function overlay (e){
      
        if (document.getElementById('botPicButton').style.display == 'none') {
            document.getElementById('closeBoxButton').style.display = 'none';
            document.getElementById('botPicButton').style.display = 'block';
            // this.shadowRoot.getElementById('closeBox').id = 'openBox';
            document.getElementById('chatBox').open = false;
            document.getElementById('chatBox').style.display = 'none';
    
        } else {
            document.getElementById('closeBoxButton').style.display = 'block';
            document.getElementById('botPicButton').style.display = 'none';
            // this.shadowRoot.getElementById('openBox').id = 'closeBox';
            document.getElementById('chatBox').open = true;
            document.getElementById('chatBox').style.display = 'block';
            setTimeout(() => document.getElementById('chatBox').style.opacity = 1,1);
        }
    }

    return (
        <div id="overlay" className={ChatBotButtonStyle.overlay} style={{display:"block"}} onClick={overlay}>
        <div id="openBox">
            <img className={`${ChatBoxStyle.itemBounce} ${ChatBotButtonStyle.botPicButton}`} id="botPicButton" src="/images/Chatbot/chatButton.png"
                height="auto" width="90px" />
            <div id="closeBoxButton" style={{display:"none"}}>
                <a>
                    {/* <span class="left">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                    </span>
                    <span class="right">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                    </span> */}
                </a>
            </div>
        </div>
    </div>
    )
  }
  
  export default ChatBotButton
  