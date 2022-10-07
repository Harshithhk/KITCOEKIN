// export function chatBoxMiddleWare(fetchDataCallback){

//     let sendMsg = document.getElementById('sendMsg');
//     let inputField = document.getElementById('inputField');
//     let msgField = document.getElementById('chat_third_screen');
//     let yourMsg = JSON.stringify(inputField.value);
//     let chatBoxScreen = document.getElementById("chat_third_screen")
//     // let botSound = new sound("/sound1.wav");
//     // let yourSound = new sound("/sound2.wav");

//     //init add code
//     msgField.innerHTML += addCode("Hey there 👋, How can I help you?").botMsgHtml;
//     let initTags = ['Admission','Placement','Syllabus','College Fee','Courses Offered']
//     msgField.innerHTML += addCode().msgItems(initTags);

//     let selectedInit = msgField.querySelectorAll('.tag-button');
//     for (let i = 0; i < selectedInit.length; i++) {
//         selectedInit[i].addEventListener('click',  function (e) {
//             selectedInit.forEach((i)=>i.style.pointerEvents = 'none');
//             let thisTag2 = this;
//             thisTag2.style.backgroundColor = '#333333';
//             thisTag2.style.color = '#ffffff';
//             addMessage(thisTag2.childNodes[0].data);
//         });
//     }


//     sendMsg.addEventListener("click", ()=>{addMessage(inputField.value)});

//     inputField.addEventListener("keyup", function(event) {
//         if (event.keyCode === 13) {
//             event.preventDefault();
//             sendMsg.click();
//         }
//     });

//     function addCode(value){
//         let botMsgHtml = "<div class=\"message botChat\">"+value+"</div>"
//         let yourMsgHtml = "<div class=\"message yourChat\">"+value+"</div>"
//         let msgPreLoader = "<div class=\"message botChat preLoad\" id='perLoader'><div class=\"typing typing-1\"></div><div class=\"typing typing-2\"></div><div class=\"typing typing-3\"></div></div>"
//         let msgItems = (items)=>{
//             let str ="<div class=\"chat_msg_item\" id='tagItems'><ul class=\"tags\">"
//             items.forEach(function(item) {
//                 str += "<li class='tag-button' id='tag"+ item + "'>"+ item + "</li>";
//             });
//             str += "</ul></div>";
//             return str
//         }

//         return {yourMsgHtml,botMsgHtml,msgPreLoader,msgItems}
//     }

//     function preLoader(bool){
//         if(bool){
//             msgField.innerHTML += addCode().msgPreLoader;
//         }else{
//             removeElement(".preLoad")
//         }

//     }

//     function removeElement(className) {
//         let x = msgField.querySelectorAll(className);
//         x.forEach((item)=>{
//             item.remove();
//         })

//     }
    
//     const chatbotApis = {
//         "getChatApi":"http://127.0.0.1:8050/getChat",
//         "getIntentsApi":"http://127.0.0.1:8050/getIntents",
//         "storeChatApi":"http://127.0.0.1:8050/storeChat",
//         "storeIntentApi":"http://127.0.0.1:8050/storeIntent",
//     };

//     const requestPyServer =  (switchApi,input) => {
//         switch (switchApi) {
//             case "getChat":
//                 const getChatUrl = chatbotApis.getChatApi;
//                 const getChatData = {
//                     "convo": input
//                 };
//                 const getChat_other_params = {
//                     headers: {"content-type": "application/json; charset=UTF-8"},
//                     body: JSON.stringify(getChatData),
//                     method: "POST",
//                     mode: "cors"
//                 };


//                 fetch(getChatUrl, getChat_other_params)
//                     .then(function (response) {
//                         if (response.ok) {
//                             return response.json();
//                         } else {
//                             console.log('response.statusText: ', response)
//                             throw new Error("Something Went Wrong!: " + response.statusText);
//                         }
//                     }).then(function (data) {
//                     botResponse(data, input);
//                 }).catch(function (error) {
//                     console.log('error.message: ', error.message);
//                 });
//                 break;
//             case "storeChat":
//                 const storeChatUrl = chatbotApis.storeChatApi;
//                 const storeChatData = {
//                     "conversation": input
//                 };
//                 const storeChat_other_params = {
//                     headers: {"content-type": "application/json; charset=UTF-8"},
//                     body: JSON.stringify(storeChatData),
//                     method: "POST",
//                     mode: "cors"
//                 };


//                 fetch(storeChatUrl, storeChat_other_params)
//                     .then(function (response) {
//                         if (response.ok) {
//                             return response.json();
//                         } else {
//                             console.log('response.statusText: ', response)
//                             throw new Error("Something Went Wrong!: " + response.statusText);
//                         }
//                     }).then(function (data) {
//                     let result  = data
//                 }).catch(function (error) {
//                     console.log('error.message: ', error.message);
//                 });
//                 break;
//             default:
//                 console.log("request failed")
//                 break;
//         }
//     }

//     function botResponse(data,question){
//         setTimeout(()=>{
//             preLoader(false)
//             // botSound.play();
//             // setTimeout(()=>{ botSound.stop() }, 150)
//             let result =JSON.parse(JSON.stringify(data));
//             let switchAction

//             if(result.probability > 0.8){
//                 if(result.entities.length > 0){
//                     switchAction = 0;
//                     // show entity, then respond and up_suggestion if any
//                 }else if(result.actions.includes('get') || result.actions.includes('post')){
//                     switchAction = 1;
//                     // call FP api show response and up_suggestion if any
//                 }else if(result.actions.includes('show')){
//                     switchAction = 2;
//                     // show response and up_suggestion if any
//                 }
//             }else if(result.probability > 0.7){
//                 if(result.down_suggestions.length > 0){
//                     switchAction = 3;
//                     // show down_suggestion and lead to tag
//                 }else{
//                     switchAction = 4;
//                     // show response
//                 }
//             }else if(result.probability < 0.7 && result.probability > 0.6){
//                 switchAction = 5;
//                 // show top 4 tags
//             }else{
//                 switchAction = 'default'
//             }


//             switch (switchAction) {
//                 case 0:

//                     msgField.innerHTML += addCode().msgItems(result.entities);

//                     let selectedtag = chatBoxScreen.querySelectorAll('.tag-button');
//                     for (let i = 0; i < selectedtag.length; i++) {
//                         selectedtag[i].addEventListener('click',  function (e) {
//                             selectedtag.forEach((i)=>i.style.pointerEvents = 'none');
//                             let thisTag = this
//                             thisTag.style.backgroundColor = '#333333';
//                             thisTag.style.color = '#ffffff';
//                             fetchDataCallback(thisTag.childNodes[0].data,result.tag,function (data){
//                                 let conversation = {
//                                     "client": question,
//                                     "bot":data,
//                                     "intent":result
//                                 }
//                                 requestPyServer("storeChat",conversation);
//                                 msgField.innerHTML += addCode(data).botMsgHtml;
//                                 if(result.up_suggestions.length > 0){
//                                     preLoader(true)
//                                     setTimeout(() =>{
//                                         setTimeout(() => {
//                                             preLoader(false)
//                                             // botSound.play();
//                                             // setTimeout(() => {
//                                             //     botSound.stop()
//                                             // }, 150);
//                                             msgField.innerHTML += addCode().msgItems(result.up_suggestions);
//                                             let selectedSugs = msgField.querySelectorAll('.tag-button');
//                                             for (let i = 0; i < selectedSugs.length; i++) {
//                                                 selectedSugs[i].addEventListener('click',  function (e) {
//                                                     selectedSugs.forEach((i)=>i.style.pointerEvents = 'none');
//                                                     let thisTag2 = this;
//                                                     thisTag2.style.backgroundColor = '#333333';
//                                                     thisTag2.style.color = '#ffffff';
//                                                     addMessage(thisTag2.childNodes[0].data);
//                                                 });
//                                             }
//                                         });
//                                     },2000)
//                                 }
//                             });


//                         });
//                     }
//                     break;
//                 case 1:
//                     let options = '';
//                     fetchDataCallback(options,result.tag,function (data){
//                         let conversation = {
//                             "client": question,
//                             "bot":data,
//                             "intent":result
//                         }
//                         requestPyServer("storeChat",conversation);
//                         msgField.innerHTML += addCode(data).botMsgHtml;
//                         if(result.up_suggestions.length > 0){
//                             preLoader(true)
//                             setTimeout(() =>{
//                                 setTimeout(() => {
//                                     preLoader(false)
//                                     // botSound.play();
//                                     // setTimeout(() => {
//                                     //     botSound.stop()
//                                     // }, 150);
//                                     msgField.innerHTML += addCode("Select one to get more details").botMsgHtml;
//                                     msgField.innerHTML += addCode().msgItems(result.up_suggestions);
//                                     let selectedSugs = msgField.querySelectorAll('.tag-button');
//                                     for (let i = 0; i < selectedSugs.length; i++) {
//                                         selectedSugs[i].addEventListener('click',  function (e) {
//                                             selectedSugs.forEach((i)=>i.style.pointerEvents = 'none');
//                                             let thisTag2 = this;
//                                             thisTag2.style.backgroundColor = '#333333';
//                                             thisTag2.style.color = '#ffffff';
//                                             addMessage(thisTag2.childNodes[0].data);
//                                         });
//                                     }
//                                 });
//                             },2000)
//                         }
//                     });
//                     break;
//                 case 2:
//                     let botAnswer2 = result.responses[Math.floor(Math.random()*result.responses.length)]
//                     msgField.innerHTML += addCode(botAnswer2).botMsgHtml;
//                     let conversation2 = {
//                         "client": question,
//                         "bot":botAnswer2,
//                         "intent":result
//                     }
//                     requestPyServer("storeChat",conversation2);
//                     if(result.up_suggestions.length > 0){
//                         msgField.innerHTML += addCode("Is there anything else i can assist you with?").botMsgHtml;
//                         let initTags2 = ['Yes','No']
//                         msgField.innerHTML += addCode().msgItems(initTags2);
//                         let selectedApprove = msgField.querySelectorAll('.tag-button');
//                         for (let i = 0; i < selectedApprove.length; i++) {
//                             selectedApprove[i].addEventListener('click',  function (e) {
//                                 selectedApprove.forEach((i)=>i.style.pointerEvents = 'none');
//                                 let thisTag2 = this;
//                                 thisTag2.style.backgroundColor = '#333333';
//                                 thisTag2.style.color = '#ffffff';
//                                 // addMessage(thisTag2.childNodes[0].data);
//                                 if(thisTag2.childNodes[0].data == "Yes"){
//                                     msgField.innerHTML += addCode("Select  one to get more details?").botMsgHtml;
//                                     preLoader(true)
//                         setTimeout(() =>{
//                             setTimeout(() => {
//                                 preLoader(false)
//                                 // botSound.play();
//                                 // setTimeout(() => {
//                                 //     botSound.stop()
//                                 // }, 150);
//                                 // msgField.innerHTML += addCode("Select one to get more details").botMsgHtml;
//                                 msgField.innerHTML += addCode().msgItems(result.up_suggestions);
//                                 let selectedSugs = msgField.querySelectorAll('.tag-button');
//                                 for (let i = 0; i < selectedSugs.length; i++) {
//                                     selectedSugs[i].addEventListener('click',  function (e) {
//                                         selectedSugs.forEach((i)=>i.style.pointerEvents = 'none');
//                                         let thisTag2 = this;
//                                         thisTag2.style.backgroundColor = '#333333';
//                                         thisTag2.style.color = '#ffffff';
//                                         addMessage(thisTag2.childNodes[0].data);
//                                     });
//                                 }
//                             });
//                         },2000)
//                                 }
//                             });
//                         }
                        
//                     }
//                     break;
//                 case 3:
//                     msgField.innerHTML += addCode().msgItems(result.down_suggestions);
//                     let selectedSugs = msgField.querySelectorAll('.tag-button');
//                     for (let i = 0; i < selectedSugs.length; i++) {
//                         selectedSugs[i].addEventListener('click',  function (e) {
//                             selectedSugs.forEach((i)=>i.style.pointerEvents = 'none');
//                             let thisTag2 = this;
//                             thisTag2.style.backgroundColor = '#333333';
//                             thisTag2.style.color = '#ffffff';
//                             addMessage(thisTag2.childNodes[0].data);
//                         });
//                     }
//                     break;
//                 case 4:
//                     let botAnswer3 = result.responses[Math.floor(Math.random()*result.responses.length)]
//                     msgField.innerHTML += addCode(botAnswer3).botMsgHtml;
//                     let conversation3 = {
//                         "client": question,
//                         "bot":botAnswer3,
//                         "intent":result
//                     }
//                     requestPyServer("storeChat",conversation3);
//                     break;
//                 case 5:
//                     msgField.innerHTML += addCode().msgItems(result.tags);
//                     let selectedTags = msgField.querySelectorAll('.tag-button');
//                     for (let i = 0; i < selectedTags.length; i++) {
//                         selectedTags[i].addEventListener('click',  function (e) {
//                             selectedSugs.forEach((i)=>i.style.pointerEvents = 'none');
//                             let thisTag2 = this;
//                             thisTag2.style.backgroundColor = '#333333';
//                             thisTag2.style.color = '#ffffff';
//                             addMessage(thisTag2.childNodes[0].data);
//                         });
//                     }
//                     break;
//                 default:
//                     console.log("=======ddd===================")
//                     if(result.probability == 0){
//                         msgField.innerHTML += addCode(result.msg).botMsgHtml;
//                     }else{
//                         msgField.innerHTML += addCode(result.responses[Math.floor(Math.random()*result.responses.length)]).botMsgHtml;

//                     }
//                     break;
//             }

//         }, 2000);
//     }

//     function sound(src) {
//         this.sound = document.createElement("audio");
//         this.sound.src = src;
//         this.sound.setAttribute("preload", "auto");
//         this.sound.setAttribute("controls", "none");
//         this.sound.style.display = "none";
//         document.body.appendChild(this.sound);
//         this.play = function(){
//             this.sound.play();
//         }
//         this.stop = function(){
//             this.sound.pause();
//         }
//     }

//     function addMessage(input) {
//         if(inputField.value.length > 0 || input.length > 0) {
//             // yourSound.play();
//             // setTimeout(()=>{ yourSound.stop() }, 100)
//             msgField.innerHTML += addCode(input).yourMsgHtml;
//             preLoader(false)
//             preLoader(true)
//             inputField.value = '';
//             requestPyServer("getChat", input)
            
//         }
//     }

// }