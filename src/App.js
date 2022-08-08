import { useState } from "react"
import './App.css';

function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, result.length-1))
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    } catch(err) {
      setResult("Invalid Syntax")
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keys">
        <button className="clear" onClick={clear} id="clear">CLEAR</button>
        <button className="btn light-gray" onClick={backspace} id="backspace">C</button>
        <button className="btn light-gray" name="/" onClick={handleClick}>&divide;</button>
        <button className="btn" name="7" onClick={handleClick}>7</button>
        <button className="btn" name="8" onClick={handleClick}>8</button>
        <button className="btn" name="9" onClick={handleClick}>9</button>
        <button className="btn orange" name="*" onClick={handleClick}>&times;</button>
        <button className="btn" name="4" onClick={handleClick}>4</button>
        <button className="btn" name="5" onClick={handleClick}>5</button>
        <button className="btn" name="6" onClick={handleClick}>6</button>
        <button className="btn orange" name="-" onClick={handleClick}>&ndash;</button>
        <button className="btn" name="1" onClick={handleClick}>1</button>
        <button className="btn" name="2" onClick={handleClick}>2</button>
        <button className="btn" name="3" onClick={handleClick}>3</button>
        <button className="btn orange" name="+" onClick={handleClick}>+</button>
        <button className="btn zero" name="0" onClick={handleClick}>0</button>
        <button className="btn" name="." onClick={handleClick}>.</button>
        <button className="clear" onClick={calculate} id="result">=</button>
      </div>
      </div>

    </div>
  )
}

export default App;
