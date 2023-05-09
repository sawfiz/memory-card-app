import './App.css';
import { useState, useEffect, useRef } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';

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
  // const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  // ^ Option 1, does not work, colors get regenerate after each click
  // const colors = randomize(numberOfColors);
  // ^ Option 2, works, but setColors is never used
  // const [colors, setColors] = useState(randomize(numberOfColors));
  // ^ Option 3, does not work, ESLint suggested using useRef
  // let colors; 
  // useEffect(() => {
  //   colors = randomize(numberOfColors);
  //   console.log("🚀 ~ file: App.js:26 ~ useEffect ~ colors:", colors)
  // }, [])
  // ^ Option 4, works. Value is in colors.current.
  // const colors = useRef(randomize(numberOfColors))
  
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
    <div className='all'>
      <div className='container'>
        <div className='sidebar'>
          <h1>Memory Game</h1>
          <h3>Remember the cards you click on!</h3>
          <div className="scores-container">
            <div>{'Score: '} {clickedCards.length}</div>
            <div>{'High score: '}</div>
          </div>
        </div>
        <main>
          <div className="game-board">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  order={card}
                  // colors={colors.current}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </main>
      </div>
        <Footer />
    </div>
  );
}

export default App;
