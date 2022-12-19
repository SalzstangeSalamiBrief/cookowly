import { Size } from '../../models/Size';

export type ButtonVariants = 'primary' | 'ghost' | 'action';

export type ButtonTags = 'button' | 'a' | 'nextLink';

interface IBaseButtonProps {
  size?: Size;
  isSubmitButton?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  as?: ButtonTags;
  variant?: ButtonVariants;
  dataPW?: string | null;
  href?: string;
}

export interface IIconButtonProps extends IBaseButtonProps {
  ariaLabel: string;
  icon: React.ReactElement;
  title?: string;
}

export interface IButtonProps extends IBaseButtonProps {
  text: string;
  size?: Size;
  icon?: React.ReactElement | null;
}
