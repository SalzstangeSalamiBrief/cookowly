import { Size, ButtonVariants } from './ButtonProps';

export const buttonSizeStyles: { [key in Size]: string } = {
  lg: 'px-8 py-4',
  md: 'px-4 py-2',
  sm: 'px-2 py-1',
};

export const buttonVariantStyles: { [key in ButtonVariants]: string } = {
  primary: 'bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50 rounded',
  action: 'hover:bg-neutral-800 active:bg-neutral-700 text-primary-50 rounded',
  ghost: 'hover:bg-neutral-800 active:bg-neutral-700 text-primary-50 rounded border border-primary-50',
};

export const getButtonStyles = (size: Size, variant: ButtonVariants) =>
  `${buttonSizeStyles[size]} ${buttonVariantStyles[variant]}`;

export const getDataPWAttribute = (dataPW?: string | null) => (dataPW ? `button-${dataPW}` : 'button');
