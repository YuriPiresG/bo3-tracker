import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SymbolToggle } from "./components/SymbolToggle";
import image1 from "./assets/wall 1.png"
import image2 from "./assets/wall 2.png"
import image3 from "./assets/wall 3.png"
import image4 from "./assets/wall 4.png"
import image5 from "./assets/wall 5.png"
import image6 from "./assets/wall 6.png"
import image7 from "./assets/wall 7.png"
import image8 from "./assets/wall 8.png"
import image9 from "./assets/wall 9.png"
import parentImg from "./assets/wall.jpg"


const symbols = [
  {
    left: 30,
    top: 320,
    src: image1
  },
  {
    left: 32,
    top: 232,
    src: image2
  },
  {
    left: 48,
    top: 140,
    src: image3
  },
  {
    left: 113,
    top: 68,
    src: image4
  },
  {
    left: 190,
    top: 35,
    src: image5
  },
  {
    left: 284,
    top: 62,
    src: image6
  },
  {
    left: 340,
    top: 133,
    src: image7
  },
  {
    left: 361,
    top: 234.3,
    src: image8
  },
  {
    left: 360,
    top: 329,
    src: image9
  },
];

function App() {
  return (
    <div className="App">
      <div className="parent-img">
      {symbols.map((symbol)=>{
        return <SymbolToggle key={symbol.src} src={symbol.src} left={symbol.left} top={symbol.top} />;
      })}
      <img src={parentImg}/>
      </div>
    </div>
  );
}

export default App;
