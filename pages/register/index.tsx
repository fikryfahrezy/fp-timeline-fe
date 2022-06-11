import type { FormEvent } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import Label from '@/components/label';
import Input from '@/components/input';
import Anchor from '@/components/anchor';
import Button from '@/components/button';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  let from = (location.state as any)?.from?.pathname || '/';

  const onSubmit = function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    console.log(data);
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
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="..." />
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" placeholder="..." />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="..." />
          <div className="flex mt-6 items-center justify-end gap-5">
            <Anchor as={Link} to="/login">
              Log In
            </Anchor>
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
