import React from "react"
import axios from "axios";

const BotServer = async (switchApi, input) => {
  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
  const intent = {}

  const chatbotApis = {
 
    "getChatApi": process.env.CHATBOT_API,  

  }
  switch (switchApi) {
    case "getChat":
      const getChatUrl = chatbotApis.getChatApi
      const getChatData = {
        convo: input,
      }
      const getChat_other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(getChatData),
        method: "POST",
        mode: "cors",
      }

    
      intent = await fetch(getChatUrl, getChat_other_params)
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } else {
            console.log("response.statusText: ", response)
            throw new Error("Something Went Wrong!: " + response.statusText)
          }
        })
        .then(function (data) {
          return data
        })
        .catch(function (error) {
          console.log("error.message: server down maybe : =>", error.message)
        })
      break
    case "storeChat":
      const storeChatUrl = chatbotApis.storeChatApi
      const storeChatData = {
        conversation: input,
      }
      const storeChat_other_params = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(storeChatData),
        method: "POST",
        mode: "cors",
      }

      intent = await fetch(storeChatUrl, storeChat_other_params)
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } else {
            console.log("response.statusText: ", response)
            throw new Error("Something Went Wrong!: " + response.statusText)
          }
        })
        .then(function (data) {
          let result = data
        })
        .catch(function (error) {
          console.log("error.message: ", error.message)
        })
      break
    default:
      console.log("request failed in BotServer function")
      break
  }
  console.log("=============", intent)
  let result = IsJsonString(JSON.stringify(intent))
    ? JSON.parse(JSON.stringify(intent))
    : null
  let question = input
  let switchAction

  if (result) {
    if (result.probability > 0.8) {
      if (result.entities.length > 0) {
        switchAction = 0
        // show entity, then respond and up_suggestion if any
      } else if (
        result.actions.includes("get") ||
        result.actions.includes("post")
      ) {
        switchAction = 1
        // call FP api show response and up_suggestion if any
      } else if (result.actions.includes("show")) {
        switchAction = 2
        // show response and up_suggestion if any
      }
    } else if (result.probability > 0.7) {
      if (result.down_suggestions.length > 0) {
        switchAction = 3
        // show down_suggestion and lead to tag
      } else {
        switchAction = 4
        // show response
      }
    } else if (result.probability < 0.7 && result.probability > 0.6) {
      switchAction = 5
      // show top 4 tags
    } else {
      switchAction = "default"
    }
  } else {
    switchAction = 500
    intent = null
  }

  intent = result

  return { intent, switchAction, question }
}

export default BotServer
