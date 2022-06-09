import type { DetailedHTMLProps, HTMLAttributes, Key } from 'react';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Timeline } from '@/static/icons/timeline.svg';
import { ReactComponent as Mailbox } from '@/static/icons/markunread_mailbox.svg';
import { ReactComponent as Person } from '@/static/icons/person_outline.svg';
import { ReactComponent as History } from '@/static/icons/change_history.svg';

function NavList({
  children,
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
  return (
    <ul
      className={`flex flex-row p-0 m-0 list-none gap-2 items-center justify-center xl:flex-col ${
        typeof className === 'string' ? className : ''
      }`}
    >
      {children}
    </ul>
  );
}

function NavButton({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return <button className="bg-2 w-15 border-transparent border-rd-6">{children}</button>;
}

function Frame() {
  const navs = useMemo(() => {
    const navs = [
      { key: 1, icon: <Timeline />, href: '' },
      { key: 2, icon: <History />, href: '' },
      { key: 3, icon: <Mailbox />, href: '' },
    ];
    return navs;
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="fixed flex p-2 bottom-0 left-0 right-0 bg-1 box-border xl:static">
        <NavList className="justify-between">
          <li>
            <NavList>
              {navs.map(({ key, icon, href }) => {
                return (
                  <li key={key}>
                    <NavButton>{icon}</NavButton>
                  </li>
                );
              })}
            </NavList>
          </li>
          <li>
            <li>
              <NavButton>
                <Person />
              </NavButton>
            </li>
          </li>
        </NavList>
      </aside>
      <div className="h-screen bg-0 flex-1 overflow-y-auto">
        <nav>
          <h1>Timeline</h1>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Frame;
