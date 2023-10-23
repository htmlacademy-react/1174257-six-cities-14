import classNames from 'classnames';

export type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({
  src,
  alt = '',
  width,
  height,
  className,
}: ImageProps): JSX.Element {
  const imageClass = classNames(className);

  return (
    <img
      className={imageClass}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
