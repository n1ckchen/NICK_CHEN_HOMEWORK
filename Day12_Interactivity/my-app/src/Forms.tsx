import { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState<string>("");
  return (
    <div className="create">
      <h1>Add a New Blog</h1>
      <h2>{title}</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario"></option>
          <option value="mike"></option>
        </select>
        <button type="button">Add Blog</button>
      </form>
    </div>
  );
};
