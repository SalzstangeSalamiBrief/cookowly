import Link from 'next/link';
import { IButtonProps } from './ButtonProps';
import { getButtonStyles } from './ButtonUtilities';

/**
 * This component represents a button.
 *
 * Default values of props:
 *  - size: 'md',
 *  - isSubmitButton: false,
 *  - isDisabled: false,
 *  - icon: null,
 *  - as: 'button',
 *  - variant: 'primary',
 *  - dataPW: null, *
 *
 * @param IButtonProps props for the icon button
 * @returns an icon button
 */
export function Button({
  text,
  onClick,
  size = 'md',
  isSubmitButton = false,
  isDisabled = false,
  icon = null,
  as = 'button',
  variant = 'primary',
  dataPW = null,
  href = '',
}: IButtonProps) {
  const styles = getButtonStyles(size, variant, isDisabled);
  const dataPWValue = dataPW ? `button-${dataPW}` : 'button';

  if (as === 'nextLink') {
    return (
      <Link
        className={styles}
        type={isSubmitButton ? 'submit' : 'button'}
        onClick={() => (onClick ? onClick() : null)}
        data-pw={dataPWValue}
        href={href}
      >
        {icon && <span className="mr-4 h-6 w-6 inline-block align-middle">{icon}</span>}
        {text}
      </Link>
    );
  }

  const As = as;
  return (
    <As
      className={styles}
      type={isSubmitButton ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={() => (onClick ? onClick() : null)}
      data-pw={dataPWValue}
    >
      {icon && <span className="mr-4 h-6 w-6 inline-block align-middle">{icon}</span>}
      {text}
    </As>
  );
}
