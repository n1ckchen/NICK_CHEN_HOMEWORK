import { useState, useEffect } from "react";

export const AutoFetchPosts = () => {
  const [post, setPost] = useState<any>(null);
  const [postId, setPostId] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setPost(data);
        setPostId((prev) => prev + 1); // Increment ID
      } catch (err : any) {
        setError(err.message);
        clearInterval(interval); // Stop fetching if error occurs
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [postId]);

  return (
    <div>
      <h1>Post Viewer</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
