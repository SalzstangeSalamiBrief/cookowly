import { cloneElement } from 'react';
import { getButtonStyles, IIconButtonProps } from './ButtonProps';

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
}: IIconButtonProps) {
  const styles = getButtonStyles(size, variant);
  const As = as;
  const clonedIcon = cloneElement(icon, { className: 'h-6 w-6' });
  const iconButton = (
    <As
      className={styles}
      type={isSubmitButton ? 'submit' : 'button'}
      disabled={isDisabled}
      onClick={() => (onClick ? onClick() : null)}
      title={title || ariaLabel}
      data-pw={`icon-button${dataPW ? `-${dataPW}` : ''}`}
    >
      {clonedIcon}
    </As>
  );
  return cloneElement(iconButton, { 'aria-label': ariaLabel });
}
