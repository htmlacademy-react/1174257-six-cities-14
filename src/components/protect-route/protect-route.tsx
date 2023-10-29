import {Navigate} from 'react-router-dom';
import { AuthStatus } from '../../data/auth';
import { Path } from '../../data/path';

type ProtectRouteProps = {
  status: AuthStatus;
  redirect: Path;
  children: JSX.Element;
}

function ProtectRoute({
  status,
  redirect,
  children
}: ProtectRouteProps): JSX.Element {
  return (
    status === AuthStatus.Auth
      ? children
      : <Navigate to={redirect} />
  );
}

export default ProtectRoute;
