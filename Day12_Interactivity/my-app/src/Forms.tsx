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
          <option value="mario">mario</option>
          <option value="mike">mike</option>
        </select>
        <div>
          <h5>Gender</h5>
          <select>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>
            <input type="radio" value="option1" />
            option1
          </label>
          <label>
            <input type="radio" value="option2" />
            option2
          </label>
          <label>
            <input type="radio" value="option3" />
            option3
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            123
          </label>
          <label>
            <input type="checkbox" />
            456
          </label>
          <label>
            <input type="checkbox" />
            789
          </label>
        </div>
        <button type="button">Add Blog</button>
      </form>
    </div>
  );
};
