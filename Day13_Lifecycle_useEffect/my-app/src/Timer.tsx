// Write a counter timer
// The UI should have a count, a start, pause and reset button
// Initially
// Count should be 0
// Start button should be enabled
// Pause button should be disabled
// After clicking start
// Count should go up by 1 every second
// Start button should be disabled
// Pause button should be enabled
// Then you can pause or reset

/* export const CounterTimer = () => {

} */
import { useEffect, useState } from "react";
export const CounterTimer = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    let timer: number | null = null;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          return prevCount + 1;
        });
      }, 1000);
    } else if (isRunning && timer) {
      clearInterval(timer);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]);

  /*   useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (isRunning && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]); */

  return (
    <div className="app">
      <div className="counter_timer">
        <h1>Counter Timer</h1>
        <h2>{count}</h2>
        <button disabled={isRunning} onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button disabled={!isRunning} onClick={() => setIsRunning(false)}>
          Pause
        </button>
        <button
          onClick={() => {
            setCount(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// import { useState, useEffect } from "react";
// export const CounterTimer = () => {
//   const [count, setCount] = useState<number>(0);
//   const [isRunning, setIsRunning] = useState<boolean>(false);

//   useEffect(() => {
//     let timer: number | null = null;

//     if (isRunning) {
//       timer = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
//     } else if (!isRunning && timer) {
//       clearInterval(timer);
//     }

//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [isRunning]);

//   return (
//     <div>
//       <h1>Counter Timer</h1>
//       <h2>{count}</h2>
//       <button onClick={() => setIsRunning(true)} disabled={isRunning}>
//         Start
//       </button>
//       <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
//         Pause
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//           setIsRunning(false);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };
