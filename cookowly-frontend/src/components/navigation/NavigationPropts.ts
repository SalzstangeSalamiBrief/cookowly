import { ReactElement } from 'react';

export interface INavigationLink {
  displayName: string;
  path: string;
  icon: ReactElement;
}

export interface INavigationProps {
  links: INavigationLink[];
}
