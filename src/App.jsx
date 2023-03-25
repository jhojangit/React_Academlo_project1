import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import PrintPhrase from './components/Phrase'
import BtnNext from './components/BtnNext'
import BackgroundChange from './components/Backgound'

function App() {

  BackgroundChange()


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



  return (
    <div className="App ass">
      <div className="container">

        <h1>Galletas de la fortuna</h1>

          <PrintPhrase randomPhrase={actualPhrase}/>
          <BtnNext butto={newPhrase}/>

      </div>
    </div>
  )
}

export default App
