import { ReactElement } from 'react';

export interface ICardProps {
  /**
   * The title content of the card
   */
  title: string | ReactElement;
  /**
   * The main content of the card
   */
  body: ReactElement;
  /**
   * The footer content to display
   */
  footer?: ReactElement;
}
