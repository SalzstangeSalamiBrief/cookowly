import { getButtonStyles, getDataPWAttribute, IButtonProps } from './ButtonProps';
// TODO HOVER EFFECTS

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
}: IButtonProps) {
  const styles = getButtonStyles(size, variant);
  const As = as;
  const dataPWValue = getDataPWAttribute(dataPW);
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
