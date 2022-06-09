import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const onSubmit = function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    console.log(data);
  };

  return (
    <div className="bg-0 min-h-screen flex items-center justify-center px-3">
      <main>
        <h1 className="mb-5 color-white text-5xl text-center">Final Project Timeline</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="..."
            className="form-input"
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="..."
            className="form-input"
          />
          <div className="flex mt-6 items-center justify-end gap-5">
            <Link to="/register" className="text-link">
              Sign Up
            </Link>
            <button type="submit" className="btn-primary">
              Log In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
