import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  // Function responsible for giving the random color
  const getRandomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // formula from the web, prints all whole numbers between 0 and 16777215, toString gives right letters for hex code.

    setHex(randomColor);

    // console.log(randomColor); displays random hex codes in conole
  };

  return (
    // Shows random color when clicked on the button
    <div className="App" style={{ backgroundColor: hex }}>
      <div>
        {/* Shows text + hex codes on the website */}
        Generated Color: {hex}
        <br />
        {/* Created a button and then pass a function as the event handler*/}
        <button className="btn" onClick={() => getRandomHex()}>
          Generate
        </button>
      </div>
    </div>
  );
}
