import Link from 'next/link';
import { cloneElement } from 'react';
import { IIconButtonProps } from './ButtonProps';
import { getButtonStyles, getDataPWAttribute } from './ButtonUtilities';

/**
 * This component represents an icon button.
 * Props:
 *  - icon (required): the icon to display
 *  - ariaLabel (required): the aria label to set on the button
 *  - onClick (optional): a handler for on click events
 *  - size (optional: default is md): the size of the button
 *  - variant (optional: default is primary): the variant of the icon button
 *  - isSubmitButton (optional: default is false): will be used to determine the type of the button
 *  - isDisabled (optional: default is false): is the button disabled or not
 *  - title: (optional): set the title attribute of the button.
 *      If no title is provided, then the ariaLabel will be used
 *  - as (optional: default is button): changes the dom element to render. Can be either a button or anchor
 *  - dataPw (optional): Appended to the data-pw attribute the button will have
 *
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
  const dataPWValue = getDataPWAttribute(dataPW);

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
