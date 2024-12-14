// import { useEffect } from "react";


// useEffect(() => {
//     const fetchUsers = async () => {
//         try {
//             const res = await fetch('https://jsonplaceholder.typicode.com/users');
//             if (!res.ok) {
//                 throw new Error(`HTTP error! Status: ${res.status}`);
//             }
//             const data = await res.json();
//             console.log(data);
//             setUsers(data); // Set fetched users to state
//         } catch (error) {
//             console.error('Error fetching users:', error);
//             setError(error.message); // Set error message to state
//         }
//     };

//     fetchUsers(); // Call the function to fetch users
// }, []);






/* 
export const fetchUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)

    }
} */


// const UsersList = () => {
//     useEffect(() => {
//       // Call the fetchUsers function when the component mounts
//       fetchUsers();
//     }, []); // Empty dependency array means it runs once when the component mounts
  
//     return <div>Check the console for user data!</div>;
//   };
  
//   export default UsersList;


