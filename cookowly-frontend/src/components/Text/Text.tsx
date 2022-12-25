import { ITextProps } from './TextProps';
import { getTextStyles } from './TextUtilities';

/**
 * Renders text based on the passed props.
 *
 * Default values:
 *  - type: content
 *  - font weight: 400
 *  - isItalic: false
 *  - as: paragraph
 *
 * @param ITextProps props for rendering and formatting the text
 * @returns an element that contains text
 */
export function Text(props: ITextProps) {
  const { children, as = 'p' } = props;
  const classes = getTextStyles(props);
  const As = as;

  return <As className={classes}>{children}</As>;
}
