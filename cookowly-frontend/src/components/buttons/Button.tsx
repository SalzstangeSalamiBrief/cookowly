import Link from 'next/link';
import { IButtonProps } from './ButtonProps';
import { getButtonStyles } from './ButtonUtilities';

/**
 * This component represents an icon button.
 * Props:
 *  - text (required): the text in the button
 *  - icon (optional): an icon that can be displayed icon to display
 *  - onClick (optional): a handler for on click events
 *  - size (optional: default is md): the size of the button
 *  - variant (optional: default is primary): the variant of the icon button
 *  - isSubmitButton (optional: default is false): will be used to determine the type of the button
 *  - isDisabled (optional: default is false): is the button disabled or not
 *  - as (optional: default is button): changes the dom element to render. Can be either a button or anchor
 *  - dataPw (optional): Appended to the data-pw attribute the button will have
 *
 * @param IIconButtonProps props for the icon button
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
