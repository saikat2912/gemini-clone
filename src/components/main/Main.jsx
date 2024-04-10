import React from "react";
import './main.css'
import { assets } from "../../assets/assets";

const Main =()=>{
    return(
        <div>
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt=""/>
                </div>
                <div className="main-container">
                    <div className="greet">
                        <p><span>Hello , Saikat.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggesr  beautiful places to visit</p>
                            <img src={assets.compass_icon} alt=""/>
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept :urban planning</p>
                            <img src={assets.bulb_icon} alt=""/>
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat.</p>
                            <img src={assets.message_icon} alt=""/>
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt"/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            <img src={assets.send_icon} alt=""/>
                        </div>
                    </div>
                    <p className="bottom-info">Gemini might display wrong coz its just an AI , so employ a human to recheck!!</p>
                </div>
            </div>
        </div>
    )
}

export default Main;