import clsx from 'clsx';
import css from './Button.module.css';

// ================================================================

interface ButtonProps {
  variant?: 'normal' | 'reset';
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// ================================================================

function Button({
  variant = 'normal',
  text,
  type = 'button',
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(css.button, css[variant], className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
