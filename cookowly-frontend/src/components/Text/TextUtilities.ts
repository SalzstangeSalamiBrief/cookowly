import { ITextProps } from './TextProps';

const baseClass = 'max-w-text';

/**
 * Creates a string of classes based on the passed params
 *
 * @param ITextProps
 * @returns a string of classes
 */
export const getTextStyles = ({ margin, padding, size, color, fontWeight, isItalic, type, asTag }: ITextProps) => {
  const isTitle = (type && type === 'heading') || (asTag && asTag.includes('h'));
  const fontClass = isTitle ? 'font-title' : 'font-content';
  const sizeClass = size && size !== 'md' ? `text-${size}` : 'text-base';
  const colorClass = color || ' text-neutral-50';
  const italicClass = isItalic ? 'italic' : '';
  let fontWeightClass = '';

  switch (fontWeight) {
    case 600:
      fontWeightClass = 'font-semibold';
      break;
    case 700:
      fontWeightClass = 'font-bold';
      break;
    default:
      fontWeightClass = 'font-normal';
      break;
  }

  let result = `${baseClass} ${fontClass} ${sizeClass} ${colorClass} ${fontWeightClass} ${italicClass} max-w-text`;

  if (margin) {
    result += typeof margin === 'string' ? margin : `${margin?.join(' ')}`;
  }

  if (padding) {
    result += typeof padding === 'string' ? padding : `${padding?.join(' ')}`;
  }

  return result;
};
