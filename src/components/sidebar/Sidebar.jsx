import React, { useContext, useState } from "react";
import './sidebar.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {
        prevPrompts, setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        isLoading,
        resultData,
        setInput,
        input,setLoading,
        newChat
    } = useContext(Context);

    const loadPrompt = async(prompt)=>{
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

   

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(!extended)} src={assets.menu_icon} alt="" className="menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" onClick={()=>newChat()}/>
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">
                        Recent
                    </p>

                    {prevPrompts.map((ele, index) => {
                        return (
                            <>
                                <div className="recent-entry" onClick={()=>loadPrompt(ele)}>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{ele}</p>
                                </div>
                            </>
                        )
                    })}

                </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;