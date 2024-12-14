// fetch posts from jsonplaceholder by id
// Initially fetch from https://jsonplaceholder.typicode.com/posts/1, and display the post data
// Have a next button, every time you click, you increment the id by 1, fetch the next post, and replace the post data
// Do error handling if post not found

// Fetch posts variation
// Initially fetch from “posts/1”
// Every 10 seconds, fetch from the next post id and display the data
// If post not found, stop the interval
import { useEffect, useState } from "react";

interface Posts {
  userID: number;
  id: number;
  title: string;
  body: string;
}

export const PostViewer = () => {
  const [postId, setPostId] = useState<number>(1);
  const [post, setPost] = useState<Posts | null>(null);

  useEffect(() => {
    const fetchPost = async (id: number) => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data: Posts = await res.json();
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
        setPost(null);
        clearInterval(intervalId);
      }
    };
    fetchPost(postId);
    const intervalId = setInterval(() => {
      setPostId((prevId) => {
        const nextId = prevId + 1;
        fetchPost(nextId);
        return nextId;
      });
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [postId]);

  const handleNextPost = () => setPostId((preId) => preId + 1);

  return (
    <div className="app">
      <div className="posts">
        <h1>Posts</h1>
        {post === null && <p>Error fetching post. Try again later.</p>}
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
        <button onClick={handleNextPost}>Next</button>
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from 'react';

// // Define the structure of a Post using an interface
// interface Posts {
//     id: number;
//     title: string;
//     body: string;
//     userId: number;
// }

// export const PostViewer = () => {
//     const [post, setPost] = useState<Posts | null>(null); // State for the current post
//     const [postId, setPostId] = useState<number>(1); // State for the current post ID

//     // Function to fetch a post by ID
//     const fetchPost = async (id: number) => {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             const data: Posts = await response.json();
//             console.log(data);
//             setPost(data);
//         } catch (err) {
//             console.error(err); // Log the error in the console
//             setPost(null); // Clear the post state if fetch fails
//         }
//     };

//     // Fetch the post whenever `postId` changes
//     useEffect(() => {
//         fetchPost(postId);
//     }, [postId]);

//     // Function to handle the "Next" button
//     const handleNextPost = () => setPostId((prevId) => prevId + 1);

//     return (
//         <div>
//             <h1>Post Viewer</h1>
//             {post ? (
//                 <div>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </div>
//             ) : (
//                 <p>Post not found.</p>
//             )}
//             <button onClick={handleNextPost}>Next Post</button>
//         </div>
//     );
// };
