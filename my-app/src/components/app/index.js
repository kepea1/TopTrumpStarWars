import React from "react";
import "./index.css";
import ComputerCard from "../computerCard";
import HumanCard from "../humanCard";
import { useState, useEffect } from "react";

export default function TrumpsApp({ TrumpsAppVisible }) {
  const [id, setId] = useState(2);
  const [userId, setUserId] = useState(1);
  const [compcardvisible, compCardSetVisible] = useState(false);

  function newCard() {
    let randomNumberComputer = Math.floor(Math.random() * 30 + 1);
    let randomNumberUser = Math.floor(Math.random() * 30 + 1);
    setId(randomNumberComputer);
    setUserId(randomNumberUser);
    console.log(setId);
    console.log(setUserId);
    compCardSetVisible(false); //hide computer card
    setData("");
  }

  const [planet, setPlanet] = useState("Planet Pending...");

  useEffect(() => {
    async function fetchCard() {
      const response = await fetch(`https://swapi.dev/api/planets/${userId}/`);
      const data = await response.json();
      console.log(data);
      setPlanet(data);
    }
    fetchCard();
  }, [userId]);

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

  function challengeComputer(childdata) {
    //chack if a check box is clicked and alert if not
    compCardSetVisible(true);
    comparescores();
  }

  // alert coming too soon maybe put it in a use effect fuction?

  function comparescores(userChoise) {
    if (userChoise === undefined) {
      alert("please select a stat");
    } else {
      console.log(userChoise);
      const userStat = userChoise[0];
      const userValue = userChoise[1];
      const computerValue = compPlanet[userStat];
      console.log(computerValue);

      if (userValue > computerValue) {
        alert("you won");
        console.log("youwon");
      } else if (userValue < computerValue) {
        alert("you lost");
      } else {
        alert("Draw");
      }
      //                        comparescores(["rotation_period",planet.rotation_period])
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
        <div className="cardLayout">
          {/* <HumanCard  className="HCard" id={userId} childToParent={childToParent} visible={usercardvisible}/> */}
          <HumanCard
            className="HCard"
            id={userId}
            childToParent={childToParent}
            comparescores={comparescores}
            planet={planet}
          />
          <ComputerCard
            className="CCard"
            id={id}
            visible={compcardvisible}
            compPlanet={compPlanet}
          />
        </div>
        <div className="cardTitles">
          <h2>your Card:</h2>
          <h2> Computer Card:</h2>
        </div>
        <p>Youve Chosen:{data}</p>

        <button className="newcard" onClick={newCard}>
          Generate New Card
        </button>
        <button className="challengecomputer" onClick={challengeComputer}>
          Challenge Computer
        </button>
      </div>
    );
  }
}
