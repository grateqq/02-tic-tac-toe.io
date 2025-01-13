import { Children } from 'react';
import './App.css'

const Turns = {
  X: "x",
  o: "o"
}

const board = Array(9).fill(null);
const Square = ({children, upadteBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  


  return (
 <main className='board'>
  <h1>TIC TAC TOE</h1>
  <section className='game'> {
    board.map((_, index) => {return (
      <Square key={index} index={index}>
        {index+9} 
      </Square>
    )
    } )
    }
  </section>
 </main> 
    
  )
}

export default App
