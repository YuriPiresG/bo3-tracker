import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SymbolToggle } from "./components/SymbolToggle";

const symbols = [
  {
    left: 30,
    top: 320,
    src: "/src/assets/wall 1.png"
  },
  {
    left: 32,
    top: 232,
    src: "/src/assets/wall 2.png"
  },
  {
    left: 48,
    top: 140,
    src: "/src/assets/wall 3.png"
  },
  {
    left: 113,
    top: 68,
    src: "/src/assets/wall 4.png"
  },
  {
    left: 190,
    top: 35,
    src: "/src/assets/wall 5.png"
  },
  {
    left: 284,
    top: 62,
    src: "/src/assets/wall 6.png"
  },
  {
    left: 340,
    top: 133,
    src: "/src/assets/wall 7.png"
  },
  {
    left: 361,
    top: 234.3,
    src: "/src/assets/wall 8.png"
  },
  {
    left: 360,
    top: 329,
    src: "/src/assets/wall 9.png"
  },
];

function App() {
  return (
    <div className="App">
      <div className="parent-img">
      {symbols.map((symbol)=>{
        return <SymbolToggle key={symbol.src} src={symbol.src} left={symbol.left} top={symbol.top} />;
      })}
      <img src="/src/assets/wall.jpg"/>
      </div>
    </div>
  );
}

export default App;
