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

        <button
          href="./StarScroll.zip"
          className="space-button"
          onClick={setIntroSate}
        >
          Play Now!
        </button>
      </header>
    </div>
  );
}

export default App;
