export type Size = 'lg' | 'md' | 'sm';

export interface IButtonProps {
  size?: Size;
  text: string;
  isSubmitButton?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const buttonSizeStyles: { [Key in Size]: string } = {
  lg: 'px-8 py-4',
  md: 'px-4 py-2',
  sm: 'px-2 py-1',
};
