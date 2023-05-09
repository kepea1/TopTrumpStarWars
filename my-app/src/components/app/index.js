import React from "react";
import "./index.css";
import ComputerCard from "../computerCard";
import HumanCard from "../humanCard";
import { useState, useEffect } from "react";

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
        console.log(setId);
        console.log(setUserId);
        compCardSetVisible(false);//hide computer card
        setData("");
    }
    
       //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
       const [planet, setPlanet] = useState("Planet Pending...");
       //console.log(id);
       useEffect(() => {
           async function fetchCard() {
               const response = await fetch(
                   `https://swapi.dev/api/planets/${id}/`
               );
               const data = await response.json();
               console.log(data);
               setPlanet(data);
           }
           fetchCard();
       }, [id]);
      
    // function userCard() {
    //     userCardSetVisible(true);
    // }

    const [compPlanet, setCompPlanet] = useState("Planet Pending...");
    //console.log(id);
    useEffect(() => {
        async function fetchCard() {
            const response = await fetch(`https://swapi.dev/api/planets/${id}`);
            const data = await response.json();
            console.log(data);
            setCompPlanet(data);
        }
        fetchCard();
    }, [id]);



    function challengeComputer() {
        compCardSetVisible(true);
        comparescores();
    }

    const [winner,setWinner]=useState("Winner Pending...");
    function comparescores() {
        if (planet.rotation_period> compPlanet.population) {
            alert("You Win!");
        } else if (planet.population < compPlanet.population) {
            alert("You Lose!");
        } else {
            alert("Draw!");
        }


    }

    //function to take data from children to check computer score

    const [data, setData] = useState("");
    const childToParent = (childdata) => {
        setData(childdata);
    };

    if (TrumpsAppVisible === true) {
        return (

        <div>
        
                <h1>Star Wars Top Trumps</h1>
            <view className="cardLayout">

                {/* <HumanCard  className="HCard" id={userId} childToParent={childToParent} visible={usercardvisible}/> */}
                <HumanCard  className="HCard" id={userId} childToParent={childToParent} planet={planet} />
                <ComputerCard className="CCard" id={id} visible={compcardvisible} compPlanet={compPlanet} />

            </view>
            <view className="cardTitles">
                <h2>User Card:</h2>
                <h2> Computer Card:</h2>
            </view>
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
