import { ReactElement } from 'react';

export interface INavigationLink {
  /**
   * the name of the link that should be rendered
   */
  displayName: string;
  /**
   * the route of the link
   */
  path: string;
  /**
   * a icon to render
   */
  icon: ReactElement;
}

export interface INavigationProps {
  /**
   * all links
   */
  links: INavigationLink[];
}
