import { useState, useEffect } from "react";

export const CounterTimer = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Counter Timer</h1>
      <h2>{count}</h2>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
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
  );
};
