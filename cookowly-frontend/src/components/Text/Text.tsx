import { ITextProps } from './TextProps';
import { getTextStyles } from './TextUtilities';

/**
 * Renders text based on the passed props.
 *
 * Default values of props:
 *  - type: content
 *  - font weight: 400
 *  - isItalic: false
 *  - as: paragraph
 *
 * @param ITextProps props for rendering and formatting the text
 * @returns an element that contains text
 */
export function Text(props: ITextProps) {
  const { children, asTag = 'p' } = props;
  const classes = getTextStyles(props);
  const AsTag = asTag;

  return <AsTag className={classes}>{children}</AsTag>;
}
