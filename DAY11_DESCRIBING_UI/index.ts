// React is a JavaScript library for rendering user interfaces (UI).
// -UI is built from small units like buttons, text, and images. 
// -React lets you combine them into reusable, nestable components. 
// From web sites to phone apps, everything on the screen can be broken down into components.

// JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place.

// Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.


// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. 

// props is an object that holds all the properties passed to the component.

// export function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }


// Interface Person {
// 	imageId: string;
// }

// Export function getImageUrl(person : Person) : string {
// 	Return (
// 	‘https//i.imagur.com/’ + person.imageId + ‘s.jpg’
	
// ) ;
// }


// export default function App() {
//  return (
//    <div className="App">
//      <User name="Jack" id={1} city="new york" />
//      <User name="Ziss" id={2} city="long island" />
//      <User name="Nick" id={3} city="new jercy" />
//    </div>
//  );
// }
// interface UserProps {
//  name: string;
//  id: number;
//  city: string;
// }
// //
// const User = ({ name, id, city }: UserProps) => {
//  return (
//    <div>
//      <h1>{name}</h1>
//      <h1>{id}</h1>
//      <h1>{city}</h1>
//    </div>
//  );
// };


// interface JobProps {
//  salary: number;
//  position: string;
//  company: string;
// }

// const Job = ({salary, position, company} : JobProps) => {
//  return (
//  <div>
//    <h1>{salary}</h1>
//    <h1>{position}</h1>
//    <h1>{company}</h1>
//  </div>
//  )
// }

// export default function App() {
//  return (
//    <div className="App">
//      <Job salary={1000} position="worker" company="xyz" />
//      <Job salary={2000} position="worker2" company="xyz3" />
//      <Job salary={10001} position="worker3" company="xyz1" />
    
//    </div>
//  );
// }



// interface JobProps {
//  salary: number;
//  position: string;
//  company: string;
//  isRed: boolean;
//  emails: string[];
// }
// // interface Theme {
// //   isRed: boolean;
// // }
// const emails = [
//  ["jack@techinc.com", "jane@xyz.com"],
//  ["bob@xyz3.com", "alice@xyz.com"],
//  ["admin@xyz1.com", "user@xyz1.com"],
// ];

// const Job = ({ salary, position, company, isRed, emails }: JobProps) => {
//  return (
//    <div>
//      <h1 style={{ color: isRed ? "red" : "black" }}>{salary}</h1>
//      <h1>{position}</h1>
//      <h1>{company}</h1>
//      {isRed && <button>show button if red </button>}
//      {emails.map((email, index) => {
//        return <h2 key={index}>{email}</h2>;
//      })}
//    </div>
//  );
// };

// export default function App() {
//  return (
//    <div className="App">
//      <Job
//        salary={1000}
//        position="worker"
//        company="xyz"
//        isRed={true}
//        emails={emails[0]}
//      />
//      <Job
//        salary={2000}
//        position="worker2"
//        company="xyz3"
//        isRed={false}
//        emails={emails[1]}
//      />
//      <Job
//        salary={10001}
//        position="worker3"
//        company="xyz1"
//        isRed={true}
//        emails={emails[2]}
//      />
//    </div>
//  );
// }
