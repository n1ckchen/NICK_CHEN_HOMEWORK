import { useEffect, useRef, useState } from "react";

export const Play = () => {
  const [name, setName] = useState<string>("");
  // goes infinite
  /* const [x, setX] = useState<number>(0); */
  const renderCount = useRef(0);
  /* console.log(renderCount); */

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    /* setX((prevX) => prevX + 1); */
    renderCount.current = renderCount.current + 1;
  });

  const reposition = useRef<HTMLInputElement>(null);
  //now reposition has .current method
  console.log(reposition);
  return (
    <div className="app">
      <h1>Something</h1>
      <input ref={reposition} onChange={(e) => e.target.value} />
      <input type="text" value={name} onChange={handleInputValue} />
      <div>My name is: {name}</div>
      <div>
        I rendered {/* {x} */} {renderCount.current} times
      </div>
      <button>Reposition</button>
    </div>
  );
};
