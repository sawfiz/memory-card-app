import './App.css';
import { useState, useEffect } from 'react';
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
  const [clickedCards, setClickedCards] = useState([])
  const [colors, setColors] = useState(randomize(numberOfColors))

  function handleClick(e) {
    console.log(e.target.dataset.index);
    if (clickedCards.includes(e.target.dataset.index)) {
      alert('Game over!');
    } else {
      const newSet = [...clickedCards, e.target.dataset.index];
      setClickedCards(newSet)
      console.log("🚀 ~ file: App.js:29 ~ handleClick ~ clickedCards:", newSet)
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
                colors={colors}
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
