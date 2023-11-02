import "./App.css";
import TrumpsApp from "./components/app";
import Intro from "./components/intro";
import { useState } from "react";

function App() {
  const [introVisible, introSetVisible] = useState(true); // intro state
  const [appVisible, appSetVisible] = useState(false); //  app card state

  function setIntroSate() {
    introSetVisible(false);
    appSetVisible(true);
    document.querySelector(".space-button").style.display = "none";
  }

  return (
    <div className="App">
      <header className="App-header">
        <TrumpsApp TrumpsAppVisible={appVisible} />
        <Intro introVisible={introVisible} />

        {/* <button onClick={() => introSetVisible(false)}>Click Me To Play The Game Now!</button> */}
        {/* <button onClick={() =>{ setIntroSate(); userCard()}}>Click Me To Play The Game Now!</button> */}
        <button
          href="./StarScroll.zip"
          className="space-button"
          onClick={setIntroSate}
        >
          Play Now!
        </button>
        {/* <a href="./StarScroll.zip" class="space-button" onClick={setIntroSate}>Click Me To Play The Game Now!</a> */}
      </header>
    </div>
  );
}

export default App;