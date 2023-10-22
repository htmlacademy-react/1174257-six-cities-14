import classNames from 'classnames';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  href?: string;
  className?: string;
  children?: JSX.Element[];
  isDisabled?: boolean;
};

export default function Button({
  type = 'button',
  text,
  href,
  className,
  children,
  isDisabled,
}: ButtonProps): JSX.Element {
  const buttonClass = classNames('button', className);

  return href ? (
    <a
      href={href}
      className={buttonClass}
      tabIndex={isDisabled ? 0 : void 0}
    >
      {text}
      {children}
    </a>
  ) : (
    <button
      type={type}
      className={buttonClass}
      disabled={isDisabled}
    >
      {text}
      {children}
    </button>
  );
}
