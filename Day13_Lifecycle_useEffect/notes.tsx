// React component’s lifecycle:
// Initialization - mounting - updation - unmounting

// The Mounting Phase begins when a component is first created and inserted into the DOM. 
// The Updating Phase occurs when a component's state or props change.
//  And the Unmounting Phase occurs when a component is removed from the DOM.

// Constructor - componentwillmount - render <-> componentdidmount(check for updates, then re-render)
// Lifecycle methods 
// Initialization

// The constructor() method is called when the component is first created.
// getDerivedStateFromProps() is called after the constructor and before render(), static methods.  This is the natural place to set the state object based on the initial props.
// static getDerivedStateFromProps(props, state)
// The render() method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.

// Mounting
// Componentdidmount -  which is called by React after the component has been mounted (that is, inserted into the DOM)
// After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.

	
// updation

// Componentdidupdate - any state change - The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered. 
//  log a message to the console whenever the count state has been updated. It compares the previous state (prevState.count) with the current state (this.state.count) to check if there was a change.
// shouldComponentUpdate()
// componentWillUpdate()
// getSnapshotBeforeUpdate()


//  unmounting
// Componentwillunmount - anything unrender - This method is called just before the component is removed from the DOM. 


// React.strictmode will check if useEffect(lifecycle) runs correctly
// useEffect

// Example 1 of 3: Passing a dependency array 
// If you specify the dependencies, your Effect runs after the initial render and after re-renders with changed dependencies.
// useEffect(() => {
//  // ...
// }, [a, b]); // Runs again if a or b are different


// Example 2 of 3: Passing an empty dependency array 
// If your Effect truly doesn’t use any reactive values, it will only run after the initial render.
// useEffect(() => {
//  // ...
// }, []); // Does not run again (except once in development)


// Example 3 of 3: Passing no dependency array at all 
// If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.
// useEffect(() => {
//  // ...
// }); // Always runs again
