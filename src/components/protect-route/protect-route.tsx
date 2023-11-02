import { Navigate, Outlet } from 'react-router-dom';

import { AuthStatus } from '../../data/auth';
import { Path } from '../../data/path';

type ProtectRouteProps = {
  status: AuthStatus;
  redirect: Path;
  revers?: boolean;
}

function ProtectRoute({
  status,
  redirect,
  revers = false,
}: ProtectRouteProps): JSX.Element {
  let output: JSX.Element;

  if (revers) {
    output = status === AuthStatus.Auth ? <Navigate to={redirect} /> : <Outlet/>;
  } else {
    output = status === AuthStatus.Auth ? <Outlet/> : <Navigate to={redirect} />;
  }

  return output;
}

export default ProtectRoute;
