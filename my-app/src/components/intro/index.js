import React from "react";

function Intro({ introVisible }) {
  if (introVisible === true) {
    return (
      <div className="star-wars-intro">
        {/* <!-- Blue Intro Text --> */}
        <p className="intro-text">
          During week 6 of School Of Code Hackathon,I made
        </p>

        {/* <!-- Logo Image or Text goes in here --> */}
        <h2 className="main-logo">
          {/* <img alt ="star wars" src="img/star-wars-intro.png"/> */}
        </h2>

        {/* <!-- All Scrolling Content Goes in here --> */}
        <div className="main-content">
          <div className="title-content">
            <p className="content-header">
              STAR WARS
              <br />A Top Trump Game
            </p>

            <br></br>
            <p className="content-body">
              How to play the star wars Top Trump Game!
              <br></br>
              <br></br>
              1. Click The Play Now Button.
              <br></br>
              <br></br>
              2. You Will Be Shown A Random Card Full Of Star Wars Planet Stats.
              <br></br>
              <br></br>
              3. Dont like your card? Click The Generate New Card Button.
              <br></br>
              <br></br>
              4. Choose and click a Stat from your card.
              <br></br>
              <br></br>
              5. Click the challege computer button, To See If You Have Won!
              <br></br>
              <br></br>
              6. If you want to play again click the new card button.
              <br></br>
              <br></br>
              May the force be with you!
            </p>

            {/* <!-- button or link or whatever --> */}
            {/* <a href="./StarScroll.zip" class="space-button">Click Me To Play The Game Now!</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
