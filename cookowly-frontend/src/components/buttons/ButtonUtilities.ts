import { Size } from '../../models/Size';
import { ButtonVariants } from './ButtonProps';

export const buttonSizeStyles: { [key in Size]: string } = {
  lg: 'px-8 py-4 text-lg',
  md: 'px-4 py-2 text-base',
  sm: 'px-2 py-1 text-sm',
};

export const buttonVariantStyles: { [key in ButtonVariants]: string } = {
  primary: 'bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-primary-50 rounded',
  action: 'hover:bg-neutral-800 active:bg-neutral-700 text-primary-50 rounded',
  ghost: 'hover:bg-neutral-800 active:bg-neutral-700 text-primary-50 rounded border border-primary-50',
};

/**
 * Takes the size, variant and isDisabled arguments and uses them to calculate css classes for buttons
 * If isDisabled is set, the classes for hover and active will be removed from the result
 *
 * @param size a size
 * @param variant a variant
 * @param isDisabled if the element is disabled
 * @returns css classes based on the passed params
 */
export const getButtonStyles = (size: Size, variant: ButtonVariants, isDisabled = false) => {
  let classes = `cursor-pointer disabled:cursor-not-allowed 
    whitespace-pre ${buttonSizeStyles[size]} ${buttonVariantStyles[variant]}`;

  if (isDisabled) {
    classes = classes.replaceAll(/(hover|active):bg-([a-z]*)-(\d{2,3})/g, '');
  }

  return classes;
};
