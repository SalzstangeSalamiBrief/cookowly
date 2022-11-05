import { buttonSizeStyles, IButtonProps } from './ButtonProps';

interface IPrimaryButtonProps {
  icon?: JSX.Element | null;
}
// TODO HOVER EFFECTS

export function PrimaryButton({
  text,
  size = 'md',
  isSubmitButton = false,
  isDisabled = false,
  icon = null,
  onClick,
}: IPrimaryButtonProps & IButtonProps) {
  const styles = `${buttonSizeStyles[size]} bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50 rounded`;
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
