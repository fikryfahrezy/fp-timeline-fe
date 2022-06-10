import type { FormEvent } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  let from = (location.state as any)?.from?.pathname || '/';

  const onSubmit = function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    auth.signin('username', () => {
      // Ref: Auth Example
      // https://reactrouter.com/docs/en/v6/examples/auth
      //
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    if (auth.user !== null) {
      auth.signin(auth.user.username, () => {
        navigate(from, { replace: true });
      });
    }
  }, [auth.user]);

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-3">
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
