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
  children: ReactNode;
  type?: TextType;
  margin?: Margins;
  padding?: Paddings;
  color?: `text-${ColorPalette}-${ColorRange}`;
  size?: TextSize;
  fontWeight?: 400 | 600 | 700;
  isItalic?: boolean;
  as?: 'p' | `h${1 | 2 | 3 | 4 | 5 | 6}`;
}
