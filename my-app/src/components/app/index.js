import React from "react";
import "./index.css";
import ComputerCard from "../computerCard";


import HumanCard from "../humanCard";

import { useState } from "react";

export default function TrumpsApp({TrumpsAppVisible}) {

    const [id, setId] = useState(2);
    const [userId, setUserId] = useState(1);
    const [compcardvisible, compCardSetVisible] = useState(false);
    // const [usercardvisible, userCardSetVisible] = useState(false);//    user card state



    function handleClick() {
        let randomNumberComputer = Math.floor(Math.random() * 30 + 1);
        let randomNumberUser = Math.floor(Math.random() * 30 + 1);
        setId(randomNumberComputer);
        setUserId(randomNumberUser);
        compCardSetVisible(false);//hide computer card
        setData("");
    }
    
      
    // function userCard() {
    //     userCardSetVisible(true);
    // }

    function challengeComputer() {
        compCardSetVisible(true);
    }


    //function to take data from children to check computer score

    const [data, setData] = useState("");
    const childToParent = (childdata) => {
        setData(childdata);
    };

    if (TrumpsAppVisible === true) {
        return (

        <div class="">
        
                <h1>Star Wars Top Trumps</h1>
                   <div class="cardTitles">
                        <h2>User Card:</h2>
                        <h2> Computer Card:</h2>
                    </div>

                    <div class="playincg-cards">
                        {/* <HumanCard  className="HCard" id={userId} childToParent={childToParent} visible={usercardvisible}/> */}
                        <HumanCard  className="HCard" id={userId} childToParent={childToParent} />
                 
                        <ComputerCard className="CCard" id={id} visible={compcardvisible} />
                    </div>

            <p>Youve Chosen:{data}</p>

            <button className="newcard" onClick={handleClick}>
                Generate New Card
            </button>
            <button className="challengecomputer" onClick={challengeComputer}>
                Challenge Computer
            </button>
        </div>
    );
        }
}
