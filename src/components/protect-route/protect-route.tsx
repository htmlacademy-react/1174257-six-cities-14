import {Navigate} from 'react-router-dom';
import { AuthStatus } from '../../data/auth';
import { Path } from '../../data/path';

type ProtectRouteProps = {
  status: AuthStatus;
  redirect: Path;
  revers?: boolean;
  children: JSX.Element;
}

function ProtectRoute({
  status,
  redirect,
  revers = false,
  children
}: ProtectRouteProps): JSX.Element {
  let output: JSX.Element;

  if (revers) {
    output = status === AuthStatus.Auth ? <Navigate to={redirect} /> : children;
  } else {
    output = status === AuthStatus.Auth ? children : <Navigate to={redirect} />;
  }

  return output;
}

export default ProtectRoute;
