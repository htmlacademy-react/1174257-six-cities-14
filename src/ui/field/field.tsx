import classNames from 'classnames';

type FieldProps = {
  id?: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  value?: string | number;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  inputClassName?: string;
}

export default function Field({
  id,
  name,
  type = 'text',
  value,
  label,
  placeholder,
  isRequired,
  isDisabled,
  className,
  inputClassName,
}: FieldProps): JSX.Element {
  const wrapperClass = classNames('form__input-wrapper', className);
  const inputClass = classNames('form__input', inputClassName);

  return (
    <div className={wrapperClass}>
      <label className="visually-hidden">{label}</label>
      <input
        className={inputClass}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
      />
    </div>
  );
}
