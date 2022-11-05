import { buttonSizeStyles, IButtonProps } from './ButtonProps';

interface IPrimaryButtonProps {
  icon?: JSX.Element | null;
}

export function GhostButton({
  text,
  size = 'md',
  isSubmitButton = false,
  isDisabled = false,
  icon = null,
  onClick,
}: IPrimaryButtonProps & IButtonProps) {
  const styles = `${buttonSizeStyles[size]} hover:bg-neutral-800 active:bg-neutral-700 text-primary-50 rounded border border-primary-50`;
  return (
    <button
      className={styles}
      type={isSubmitButton ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={() => (onClick ? onClick() : null)}
    >
      {icon && <span className="mr-4 h-6 w-6 inline-block align-middle">{icon}</span>}
      {text}
    </button>
  );
}
