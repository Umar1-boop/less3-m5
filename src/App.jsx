import { useState } from "react";
import Users from "./componets/Users";

export default function App() {
  const [num, setNum] = useState(0)
  const [flag, setFlag] = useState(true)
  let count = 0

  const plusCount = () => {
    count = count + 1
    if(num < 10){
      setNum(num + 1)
    }
    console.log(count); 
  }

  const minesCout = () => {
    setNum(num - 1)    
  }

  return (
    <div>
      <h2>Counter useState: {num}</h2>
      <h2>Counter let: {count}</h2>
      <button onClick={plusCount}>Plus 1</button>
      <button onClick={minesCout}>Mines 1</button>
      <button onClick={() => {setNum(0)}}>Reset</button>

    {
      flag ? (
        <div>Show</div>
      ) : (
        <div>Hidden</div>
      )
    }
    <button onClick={() => {setFlag(!flag)}}>ch content</button>
    <Users />
    </div>
  )
}
