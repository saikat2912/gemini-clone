import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context=createContext();

const ContextProvider =(props)=>{

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResults,setShowResults]= useState(false);
    const [isLoading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("")

    const delayPara = (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    const newChat=()=>{
      

        setLoading(false);
        setShowResults(false);
    }

    const onSent = async(prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResults(true)
        let response="";
        if(prompt!=undefined){
            console.log("the prompt is ",prompt)
            setRecentPrompt(prompt)
            response=  await runChat(prompt) 
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            console.log("the prompt is ",prompt)
            setRecentPrompt(input)
            response=  await runChat(input) 
        }
        
        let responseArray = response.split("**");
        let newArray="";
       // console.log('Response with out start is ',responseArray)
        for(let i=0;i<responseArray.length;i++){
            if(i==0 || i%2!=1){
                newArray+=responseArray[i];
            }
            else{
                newArray+="<b>"+responseArray[i]+"</b>";
            }

        }
      //  console.log("The first response is ",newArray)
        let newResponse2 = newArray.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
       
       // setResultData(newResponse2);
        setLoading(false)
        setInput("");

    }

  

    const contextValue={
        prevPrompts,setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        isLoading,
        resultData,
        setLoading,
        setInput,
        input,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;