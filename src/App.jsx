import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import PrintPhrase from './components/Phrase'
import BtnNext from './components/BtnNext'

function App() {

// LÓGICA DE LA FRASE
  let idxRandom = Math.floor(Math.random() * phrases.length)
  let randomPhrase = phrases[idxRandom]
  
  const [actualPhrase, setActualPhrase] = useState(randomPhrase)
  
  const newPhrase = () =>{
      if (actualPhrase == randomPhrase) {
        randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        if (actualPhrase == randomPhrase) {
          randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        }
      }
      setActualPhrase(randomPhrase)
  } 




// LÓGICA DE BACKGROUND
    const backG = [
        "/backgrounds/fondo1.jpg",
        "/backgrounds/fondo2.jpg",
        "/backgrounds/fondo3.jpg",
        "/backgrounds/fondo4.jpg"
    ];
    
    const [currentBg, setCurrentBg] = useState(backG[0]);

    const handleBgChange = () => {
        let randomIdx = Math.floor(Math.random() * (backG.length - 0));
        if (currentBg == backG) {
          randomIdx = randomIdx[Math.floor(Math.random() * (backG.length - 0))]
          if (currentBg == backG) {
            randomIdx = randomIdx[Math.floor(Math.random() * (backG.length - 0))]
          }
        }
        setCurrentBg(backG[randomIdx]);
    }



  return (
    <div style={{ backgroundImage: `url(${currentBg})` }} className="App">
      <div className="container">
          <h1>Galletas de la fortuna</h1>
          <PrintPhrase randomPhrase={actualPhrase}/>
          <BtnNext btnchangeColor={handleBgChange} btnchangephrase={newPhrase}/>
      </div>

      <div className="social">
          <a target="_blank" href="http://www.facebook.com/sharer.php?u=https://react-week1.netlify.app//">Compartir </a>
          <img src="/faceB.png" alt="" />
      </div>
    </div>
  )  
  
}

export default App
