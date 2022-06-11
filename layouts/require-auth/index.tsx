/**
 * Ref: Auth Example
 * https://reactrouter.com/docs/en/v6/examples/auth
 */

import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/auth';

type RequireAuthProps = { isAdmin: boolean; to: string; children: JSX.Element };
function RequireAuth({ isAdmin, to, children }: RequireAuthProps) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  if (isAdmin === true && !auth.user.isAdmin()) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
