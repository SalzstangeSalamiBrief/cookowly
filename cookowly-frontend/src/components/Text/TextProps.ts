import { ReactNode } from 'react';
import { TextSize } from '../../models/Size';

type TextType = 'heading' | 'content';

type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type ColorPalette = 'primary' | 'secondary' | 'neutral' | 'danger' | 'warning' | 'successColors';

type Margins =
  | `m-${number}`
  | `my-${number}`
  | `mx-${number}`
  | [xAxis: `mx-${number}`, yAxis: `my-${number}`]
  | [
      top: `mt-${number}` | undefined,
      right: `mr-${number}` | undefined,
      bottom: `mb-${number}` | undefined,
      left: `ml-${number}` | undefined,
    ];

type Paddings =
  | `p-${number}`
  | `py-${number}`
  | `px-${number}`
  | [xAxis: `px-${number}`, yAxis: `py-${number}`]
  | [
      top: `pt-${number}` | undefined,
      right: `pr-${number}` | undefined,
      bottom: `pb-${number}` | undefined,
      left: `pl-${number}` | undefined,
    ];

export interface ITextProps {
  /**
   * (required) The actual text to render
   */
  children: ReactNode;
  /**
   * (optional): The type of the text that decides the font of the text. Default value is content
   */
  type?: TextType;
  /**
   * (optional): The margins added to the text via tailwind classes
   */
  margin?: Margins;
  /**
   * (optional): The paddings added to the text via tailwind classes
   */
  padding?: Paddings;
  /**
   * (optional): The color of the font as tailwind class
   */
  color?: `text-${ColorPalette}-${ColorRange}`;
  /**
   * (optional): the size of the text
   */
  size?: TextSize;
  /**
   * (optional): the font weight of the text. The default value is 400
   */
  fontWeight?: 400 | 600 | 700;
  /**
   * (optional): decides if the text should be rendered italic.
   */
  isItalic?: boolean;
  /**
   * (optional): renders the text as this prop. Could be either a paragraph or heading.
   */
  asTag?: 'p' | `h${1 | 2 | 3 | 4 | 5 | 6}`;
}
