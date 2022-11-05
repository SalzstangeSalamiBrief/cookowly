type Size = 'lg' | 'md' | 'sm';

interface IPrimaryButtonProps {
  size?: Size;
  text: string;
  isSubmitButton?: boolean;
  isDisabled?: boolean;
  icon?: JSX.Element | null;
  onClick?: () => void;
}

const sizeStyles: { [Key in Size]: string } = {
  lg: 'px-8 py-4',
  md: 'px-4 py-2',
  sm: 'px-2 py-1',
};

export function PrimaryButton({
  text,
  size = 'md',
  isSubmitButton = false,
  isDisabled = false,
  icon = null,
  onClick,
}: IPrimaryButtonProps) {
  const styles = `${sizeStyles[size]} bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50 rounded`;
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
