import "./App.css";
import { CounterTimer } from "./Timer";
/* import { PostViewer } from './Posts'; */

// fetch posts from jsonplaceholder by id
// Initially fetch from https://jsonplaceholder.typicode.com/posts/1, and display the post data
// Have a next button, every time you click, you increment the id by 1, fetch the next post, and replace the post data
// Do error handling if post not found

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

// Fetch posts variation
// Initially fetch from “posts/1”
// Every 10 seconds, fetch from the next post id and display the data
// If post not found, stop the interval

function App() {
  return (
    <>
      <div>
        <CounterTimer />
        <ShoppingCart />
        {/*  <PostViewer /> */}
      </div>
    </>
  );
}

export default App;
