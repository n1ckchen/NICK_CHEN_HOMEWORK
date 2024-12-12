// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
// The three phases are: Mounting, Updating, and Unmounting.
// Mounting means putting elements into the DOM.
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()
// The render() method is required and will always be called, the others are optional and will be called if you define them.

// The next phase in the lifecycle is when a component is updated.
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()
// The render() method is required and will always be called, the others are optional and will be called if you define them.
// A component is updated whenever there is a change in the component's state or props.


// The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
// componentWillUnmount()


// The useState Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.

// Triggering a render (delivering the diner’s order to the kitchen)
// Rendering the component (preparing the order in the kitchen)
// Committing to the DOM (placing the order on the table)

// interface BlogPost {
//     title: string;
//     content: string;
//     author: string;
//     tags: string[];
//   }

// const BlogForm = () => {
//     const [formData, setFormData] = useState<BlogPost>({
//       title: '',
//       content: '',
//       author: '',
//       tags: [],
//     });
// const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       author: event.target.value,
//     });
//   };
//  };
