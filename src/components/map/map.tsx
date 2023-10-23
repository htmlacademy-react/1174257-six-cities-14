import classNames from 'classnames';

export type MapProps = {
  className?: string;
}

export default function Map({
  className,
}: MapProps): JSX.Element {
  const mapClass = classNames('map', className);
  return (
    <section className={mapClass}></section>
  );
}
