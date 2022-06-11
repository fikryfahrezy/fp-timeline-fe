import type { LinkProps } from 'react-router-dom';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, className, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      {...props}
      to={to}
      className={`pb-3 color-accent text-center text-2xl flex-1 decoration-none ${
        typeof className === 'string' ? className : ''
      } ${match ? 'border-b-2 border-accent' : ''}`}
    >
      {children}
    </Link>
  );
}

function Frame() {
  return (
    <div className="flex h-screen">
      <div className="h-screen bg-primary flex-1 overflow-y-auto">
        <div>
          <Outlet />
        </div>
      </div>
      <nav className="fixed w-100% bottom-0">
        <div className="flex w-100% max-w-800px mx-auto py-3 bg-secondary">
          <CustomLink to="/">Timeline</CustomLink>
          <CustomLink to="/years">Years</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </div>
      </nav>
    </div>
  );
}

export default Frame;
