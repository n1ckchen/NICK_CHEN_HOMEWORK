import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const setZero = () => {
    setCount(0);
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsDisabled(true);
  };
  const handleMouseLeave = () => {
    setIsDisabled(false);
  };

  const [showText, setShowText] = useState<boolean>(true);
  
  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={decreaseCount}>decrease</button>
        <button onClick={increaseCount}>increase</button>
        <button onClick={setZero}>zero</button>
        {/* // Create a button, when hovered, it should become disabled */}
        <button
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          disabled={isDisabled}
          >
          unclickable button
        </button>
      </div>
          {/* // Show/Hide Paragraph
          // Create a component with a button and a paragraph of text. Clicking the button should toggle the visibility of the paragraph. */}
      <div>
        {showText && <p>Click on the follow button and see what happens</p>}
        <button onClick={handleShowText}>show/hide</button>
      </div>
    </>
  );
}

export default App;
