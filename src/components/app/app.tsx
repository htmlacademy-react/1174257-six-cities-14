import {MainProps, Main} from '../../pages/main/main';

type AppProps = {
  main: MainProps;
}

export function App(props: AppProps): JSX.Element {
  return (
    props.main && <Main {...props.main} />
  );
}
