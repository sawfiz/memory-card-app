import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  let numberOfCards = 16;
  // let numberOfColors = 256 * 256 * 256;

  function randomize(num) {
    const set = new Set();
    while (set.size < numberOfCards) {
      set.add(Math.floor(Math.random() * num));
    }
    return Array.from(set);
  }

  const [cards, setCards] = useState(randomize(numberOfCards));
  const [hiScore, setHiScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOver, setGameOver] = useState({ status: false, message: '' });

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
      setGameOver({ status: true, message: 'You lose!' });
    } else {
      const tempArray = [...clickedCards, index];
      setClickedCards(tempArray);
      if (tempArray.length > hiScore) {
        setHiScore(tempArray.length);
      }
      if (tempArray.length === numberOfCards) {
        setGameOver({ status: true, message: 'You win!' });
      }
      setCards(randomize(numberOfCards));
    }
  }

  function restartGame() {
    setClickedCards([]);
    setGameOver({ status: false, message: '' });
  }

  return (
    <div className="all">
      <div className="container">
        <div className="sidebar">
          <h1>Memory Game</h1>
          <h3>
            Remember the cards you click on, and do not click on any card twice!
          </h3>
          <div className="scores-container">
            <div>
              {'Score: '} {clickedCards.length}
            </div>
            <div>
              {'High score: '} {hiScore}
            </div>
          </div>
          <div className="credit">Images from 123rf.com</div>
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
      <Modal gameOver={gameOver} restartGame={restartGame} />
    </div>
  );
}

export default App;
