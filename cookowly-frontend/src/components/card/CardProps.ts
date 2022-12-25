import { ReactElement } from 'react';

export interface ICardProps {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The main content of the card
   */
  body: ReactElement;
  /**
   * The footer content to display
   */
  footer?: ReactElement;
}
