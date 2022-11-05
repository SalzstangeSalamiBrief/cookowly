type Size = 'lg' | 'md' | 'sm';

interface IPrimaryButtonProps {
  size?: Size;
  text: string;
  isSubmitButton?: boolean;
}

const sizeStyles: { [Key in Size]: string } = {
  lg: 'px-8 py-4',
  md: 'px-4 py-2',
  sm: 'px-2 py-1',
};

export function PrimaryButton({ text, size = 'md', isSubmitButton = false }: IPrimaryButtonProps) {
  const styles = `${sizeStyles[size]} bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50`;
  return (
    <button className={styles} type={isSubmitButton ? 'submit' : 'button'}>
      {text}
    </button>
  );
}
