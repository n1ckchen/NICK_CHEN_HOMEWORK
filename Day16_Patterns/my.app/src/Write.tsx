// useRef
// Create a simple login form
// AutoFocusInput
import { useRef, useEffect } from "react";

export const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    console.log(`Username: ${username}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Enter your username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Custom Hooks
// useDebounce
// useFetch
// const {data, isLoading, isError} = useFetch(api_url);
