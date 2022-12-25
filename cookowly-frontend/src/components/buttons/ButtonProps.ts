import { Size } from '../../models/Size';

export type ButtonVariants = 'primary' | 'ghost' | 'action';

export type ButtonTags = 'button' | 'a' | 'nextLink';

interface IBaseButtonProps {
  /**
   * The size of the button (optional)
   */
  size?: Size;
  /**
   * indicates that the button should be from type submit or a normal button (optional)
   */
  isSubmitButton?: boolean;
  /**
   * represents the disabled state of a button (optional)
   */
  isDisabled?: boolean;
  /**
   * handler for on click events (optional)
   */
  onClick?: () => void;
  /**
   * Renders the element as button, anchor or next link (optional)
   */
  as?: ButtonTags;
  /**
   * the style variant of the button (optional)
   */
  variant?: ButtonVariants;
  /**
   * the data attribute for playwright (optional)
   */
  dataPW?: string | null;
  /**
   * the href of an link. Has to be set if the component should be rendered as an anchor or a next link (optional)
   */
  href?: string;
}

export interface IIconButtonProps extends IBaseButtonProps {
  /**
   * the aria label for the icon button
   */
  ariaLabel: string;
  /**
   * the icon to render
   */
  icon: React.ReactElement;
  /**
   * the content of the title attribute (optional)
   */
  title?: string;
}

export interface IButtonProps extends IBaseButtonProps {
  /**
   * the content of the button
   */
  text: string;
  /**
   * the icon to render (optional)
   */
  icon?: React.ReactElement | null;
}
