import Link from 'next/link';
import { cloneElement } from 'react';
import { IIconButtonProps } from './ButtonProps';
import { getButtonStyles } from './ButtonUtilities';

/**
 * This component represents an icon button.
 *
 *  Default values of props:
 *  - size: 'md',
 *  - isSubmitButton: false,
 *  - isDisabled: false,
 *  - as: 'button',
 *  - variant: 'primary',
 *  - dataPW: null,
 *  - href: empty string
 * @param IIconButtonProps props for the icon button
 * @returns an icon button
 */
export function IconButton({
  ariaLabel,
  icon,
  onClick,
  size = 'md',
  isSubmitButton = false,
  isDisabled = false,
  as = 'button',
  variant = 'primary',
  title = '',
  dataPW = null,
  href = '',
}: IIconButtonProps) {
  const styles = getButtonStyles(size, variant, isDisabled);
  const clonedIcon = cloneElement(icon, { className: 'h-6 w-6' });
  const dataPWValue = dataPW ? `icon-button-${dataPW}` : 'icon-button';

  if (as === 'nextLink') {
    return (
      <Link
        className={styles}
        type={isSubmitButton ? 'submit' : 'button'}
        onClick={() => (onClick ? onClick() : null)}
        title={title || ariaLabel}
        data-pw={dataPWValue}
        href={href}
      >
        {clonedIcon}
      </Link>
    );
  }

  const As = as;
  const iconButton = (
    <As
      className={styles}
      type={isSubmitButton ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={() => (onClick ? onClick() : null)}
      title={title || ariaLabel}
      data-pw={dataPWValue}
    >
      {clonedIcon}
    </As>
  );
  return as === 'a'
    ? cloneElement(iconButton, { 'aria-label': ariaLabel, href })
    : cloneElement(iconButton, { 'aria-label': ariaLabel });
}
