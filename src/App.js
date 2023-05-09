import './App.css';
import { useState, useEffect, useRef } from 'react';
import Card from './components/Card';

function App() {
  let numberOfCards = 16;
  let numberOfColors = 256 * 256 * 256;

  function randomize(num) {
    const set = new Set();
    while (set.size < numberOfCards) {
      set.add(Math.floor(Math.random() * num));
    }
    return Array.from(set);
  }

  const [cards, setCards] = useState(randomize(numberOfCards));
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  // const [colors, setColors] = useState(randomize(numberOfColors));
  // const colors = randomize(numberOfColors);
  
  // let colors; 
  // useEffect(() => {
  //   colors = randomize(numberOfColors);
  //   console.log("🚀 ~ file: App.js:26 ~ useEffect ~ colors:", colors)
  // }, [])

  const colors = useRef(randomize(numberOfColors))
  
  function handleClick(e) {
    const index = e.target.dataset.index;
    if (clickedCards.includes(index)) {
      alert('Game over!');
    } else {
      const tempArray = [...clickedCards, index];
      console.log("🚀 ~ file: App.js:28 ~ handleClick ~ tempArray:", tempArray)
      setClickedCards(tempArray);
      setCards(randomize(numberOfCards));
    }
  }

  return (
    <div className="App">
      <header>Memory Game</header>
      <main>
        <div className="game-board">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                order={card}
                colors={colors.current}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
