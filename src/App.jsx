import { useState } from "react";
import Users from "./componets/Users";

// export default function App() {
//   const [num, setNum] = useState(0)
//   const [flag, setFlag] = useState(true)
//   let count = 0

//   const plusCount = () => {
//     count = count + 1
//     if(num < 10){
//       setNum(num + 1)
//     }
//     console.log(count); 
//   }

//   const minesCout = () => {
//     setNum(num - 1)    
//   }

//   return (
//     <div>
//       <h2>Counter useState: {num}</h2>
//       <h2>Counter let: {count}</h2>
//       <button onClick={plusCount}>Plus 1</button>
//       <button onClick={minesCout}>Mines 1</button>
//       <button onClick={() => {setNum(0)}}>Reset</button>

//     {
//       flag ? (
//         <div>Show</div>
//       ) : (
//         <div>Hidden</div>
//       )
//     }
//     <button onClick={() => {setFlag(!flag)}}>ch content</button>
//     <Users />
//     </div>
//   )
// }


export default function App() {
  const [count, setCount] = useState(0);

  const updateCount = (delta) => {
    setCount((prevCount) => {
      const nextCount = prevCount + delta;
      return Math.min(15, Math.max(0, nextCount));
    });
  };

  return (

    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Счетчик: {count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => updateCount(-5)} disabled={count === 0}>
          -5
        </button>
        <button onClick={() => updateCount(-1)} disabled={count === 0}>
          -1
        </button>
        <button onClick={() => updateCount(1)} disabled={count === 15}>
          +1
        </button>
        <button onClick={() => updateCount(5)} disabled={count === 15}>
          +5
        </button>
      </div>
          <Users />
    </div>
    
  );
}

