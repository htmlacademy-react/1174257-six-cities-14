import Main, {MainProps} from '../../pages/main/main';

type AppProps = {
  main: MainProps;
}

export default function App(props: AppProps): JSX.Element {
  return (
    props.main && <Main {...props.main} />
  );
}
