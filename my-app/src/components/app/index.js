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
    compCardSetVisible(false); //hide computer card
    setData("");
  }

  const [planet, setPlanet] = useState("Planet Pending...");

  useEffect(() => {
    async function fetchCard() {
      const response = await fetch(`https://swapi.py4e.com/api/planets/1${userId}/`);
      // const response = await fetch(`https://swapi.dev/api/planets/${userId}/`);
      const data = await response.json();
      setPlanet(data);
    }
    fetchCard();
  }, [userId]);

  const [compPlanet, setCompPlanet] = useState("Planet Pending...");

  useEffect(() => {
    async function fetchCard() {
      const response = await fetch(`https://swapi.py4e.com/api/planets/1${id}`);
      // const response = await fetch(`https://swapi.dev/api/planets/${id}`);
      const data = await response.json();
      setCompPlanet(data);
    }
    fetchCard();
  }, [id]);

  function challengeComputer(userChoise) {
    if (userChoise === undefined) {
      document.querySelector(".result").innerHTML = "please select a stat";
      document.querySelector(".result").style.color = "red";
    } else if (userChoise[1] === "unknown") {
      document.querySelector(".result").innerHTML =
        "Sorry stat unavailable - please select another stat";
      document.querySelector(".result").style.color = "red";
    } else {
      document.querySelector(".result").style.color = "green";

      compCardSetVisible(true);
      compareScores(userChoise);
    }
  }

  const [userChoise, setUserChoise] = useState();
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  function compareScores(userChoise) {
    const userStat = userChoise[0];
    const userValue = userChoise[1];
    const computerValue = compPlanet[userStat];

    if (userValue > computerValue) {
      document.querySelector(".result").innerHTML = "you won!";
      setUserScore(userScore + 1);
    } else if (userValue < computerValue) {
      document.querySelector(".result").innerHTML = "you lost!";
      setCompScore(compScore + 1);
    } else {
      document.querySelector(".result").innerHTML = "it's a Draw!";
    }
    document.querySelector('input[type="radio"]:checked').checked = false;
    setUserChoise();

    // if i call newCard() here it will generate a new card for the computer(and hide it), well before the user has seen the result
    // newCard();
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
          <HumanCard
            className="HCard"
            id={userId}
            childToParent={childToParent}
            userChoise={userChoise}
            setUserChoise={setUserChoise}
            planet={planet}
          />
          <p className="result"></p>

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
        <p>Score:</p>
        <p>You= {userScore}</p>
        <p>Computer= {compScore}</p>

        <button className="newcard" onClick={newCard}>
          Generate New Card
        </button>
        <button
          className="challengecomputer"
          onClick={() => {
            challengeComputer(userChoise);
          }}
        >
          Challenge Computer
        </button>
      </div>
    );
  }
}
