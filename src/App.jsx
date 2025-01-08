import './App.css'

const Turns = {
  X: "x",
  o: "o"
}

const board = Array(9).fill(null);
function App() {
  

  return (
 <main className='board'>
  <h1>TIC TAC TOE</h1>
  <section className='game'> {
    board.map((_, index) => {return (
      <div className='cell' key={index}>
        <span className='cell_content'>
          {index}
        </span>
      </div>)
    } )
    }

  </section>
 </main> 
    
  )
}

export default App
