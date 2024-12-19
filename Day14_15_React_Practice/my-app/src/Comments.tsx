import { useState, useEffect } from "react";

const jsonUrl = "https://jsonplaceholder.typicode.com/comments";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const CommentViewer = () => {
  const [commentId, setCommentId] = useState<number>(1);
  const [comment, setComment] = useState<Comments | null>(null);

  useEffect(() => {
    const fetchComment = async (id: number) => {
      try {
        const res = await fetch(`${jsonUrl}/${id}`);
        const data: Comments = await res.json();
        console.log(data);
        setComment(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComment(1);
  }, [comment?.id]);

  return (
    <div className="app">
      <div className="comments">
        <h1>Comments</h1>
        {comment ? (
          <div key={comment.id}>
            <h2>{comment.body}</h2>
          </div>
        ) : (
          <p>Comments Not Found!</p>
        )}
        <button>?</button>
      </div>
    </div>
  );
};
