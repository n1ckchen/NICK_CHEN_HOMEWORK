// import { useState } from "react";
// /* import "./styles.css"; */

// const api = "https://jsonplaceholder.typicode.com/posts";

// export default function Posts() {
//   const [posts, setPosts] = useState([]);

//   const fetchApi = async () => {
//     try {
//       const response = await fetch(api);
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClick = () => {
//     fetchApi();
//   };

//   return (
//     <div>
//       <h1>Posts Viewer</h1>
//       <div>
//         {/* use filter, after the post, but before the map */}
//         {/*         {posts.map((post) => {
//           const { id, title } = post;
//           return title!.length > 50 ? (
//             <div key={id}>
//               <h2>{id}</h2>
//               {/* display title that has more than 5 words, title.length > 25 */}
//         <h2>{title}</h2>
//       </div>
//       {posts
//         .filter((post) => post.title.split(" ").length > 5)
//         .map((post) => {
//           const { id, title } = post;
//           return (
//             <div key={id}>
//               <h2>{id}</h2>
//               <h2>{title}</h2>
//             </div>
//           );
//         })}
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// }
