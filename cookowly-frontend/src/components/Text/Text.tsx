import { ITextProps } from './TextProps';
import { getTextStyles } from './TextUtilities';

/**
 * Renders text based on the passed props.
 *
 * Props:
 *  - children (required): The actual text to render
 *  - type (optional): The type of the text that decides the font of the text. Default value is content
 *  - margin (optional): The margins added to the text via tailwind classes
 *  - padding (optional): The paddings added to the text via tailwind classes
 *  - color (optional): The color of the font as tailwind class
 *  - size (optional): the size of the text
 *  - font weight (optional): the font weight of the text. The default value is 400
 *  - isItalic (optional): decides if the text should be rendered italic. The default value is false
 *  - as (optional): renders the text as this prop. Could be either a paragraph or heading. Default value is paragraph
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
