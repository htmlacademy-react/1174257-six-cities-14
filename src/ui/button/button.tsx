import classNames from 'classnames';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  href?: string;
  className: string;
};

export default function Button({
  type = 'button',
  text,
  href,
  className,
}: ButtonProps): JSX.Element {
  const buttonClass = classNames('button', className);

  return href ? (
    <a
      href={href}
      className={buttonClass}
    >
      {text}
    </a>
  ) : (
    <button
      type={type}
      className={buttonClass}
    >
      {text}
    </button>
  );
}
