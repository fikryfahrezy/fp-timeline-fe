import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { LinkProps } from 'react-router-dom';
import { useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useResolvedPath,
  useNavigate,
} from 'react-router-dom';
import {
  RiBarChartHorizontalLine,
  RiCalendarTodoLine,
  RiInboxLine,
  RiUser6Fill,
  RiGroupLine,
  RiLogoutCircleRLine,
} from 'react-icons/ri';
import { useAuth } from '@/context/auth';

function NavList({
  children,
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
  return (
    <ul
      className={`flex flex-row p-0 m-0 list-none gap-4 items-center justify-center xl:flex-col ${
        typeof className === 'string' ? className : ''
      }`}
    >
      {children}
    </ul>
  );
}

function NavButton({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={`flex w-15 h-15 color-white bg-tertiary border-transparent border-rd-5 text-4xl items-center justify-center cursor-pointer transition-property-all transition-timing-linear transition-duration-100 hover-brightness-70 ${
        typeof className === 'string' ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

function PopButton({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={`flex w-100% py-1 color-white bg-transparent border-transparent text-2xl text-start items-center cursor-pointer gap-1 ${
        typeof className === 'string' ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props}>
      <NavButton className={`${match ? 'important-bg-accent' : ''}`}>{children}</NavButton>
    </Link>
  );
}

function Frame() {
  const location = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside className="fixed flex p-2 bottom-0 left-0 right-0 bg-secondary box-border justify-center xl:relative">
        <NavList className="justify-between">
          <li>
            <NavList>
              <li>
                <CustomLink to="/" state={{ pageTitle: 'Timeline' }}>
                  <RiBarChartHorizontalLine />
                </CustomLink>
              </li>
              {auth.user?.isAdmin() ? (
                <li>
                  <CustomLink to="/years" state={{ pageTitle: 'Years' }}>
                    <RiCalendarTodoLine />
                  </CustomLink>
                </li>
              ) : (
                <></>
              )}
            </NavList>
          </li>
          <li>
            <NavList>
              {auth.user?.isAdmin() ? (
                <></>
              ) : (
                <li>
                  <CustomLink to="/mail" state={{ pageTitle: 'Mail' }}>
                    <RiInboxLine />
                  </CustomLink>
                </li>
              )}
              <li>
                <NavButton
                  onClick={() => {
                    setProfilePopUpOpen((prevState) => {
                      return !prevState;
                    });
                  }}
                >
                  <RiUser6Fill />
                </NavButton>
              </li>
            </NavList>
          </li>
        </NavList>
        <div
          className={`absolute w-29 mb-2 mr-2 right-0 bottom-100% bg-secondary border-rd-2 shadow shadow-blueGray xl:bottom-0 xl:left-100% xl:ml-2 ${
            isProfilePopUpOpen ? '' : 'display-none'
          }`}
        >
          <ul className="p-0 m-0 list-none">
            <li>
              <Link to="/team" className="decoration-none">
                <PopButton>
                  <RiGroupLine />
                  <span>Teams</span>
                </PopButton>
              </Link>
            </li>
            <li>
              <PopButton
                className="important-color-red"
                onClick={() => {
                  auth.signout(() => navigate('/'));
                }}
              >
                <RiLogoutCircleRLine />
                <span>Logout</span>
              </PopButton>
            </li>
          </ul>
        </div>
      </aside>
      <div className="h-screen bg-primary flex-1 overflow-y-auto">
        <nav className="sticky flex px-4 top-0 color-white bg-secondary">
          <h1>{(location.state as any)?.pageTitle}</h1>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Frame;
