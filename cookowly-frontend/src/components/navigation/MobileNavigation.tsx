import { IconButton } from '../buttons/IconButton';
import { INavigationProps } from './NavigationPropts';

export function MobileNavigation({ links }: INavigationProps) {
  return (
    <ul className="my-4 mx-auto w-fit">
      {links.map(({ displayName, icon, path }) => (
        <li key={path} className="mb-6">
          <IconButton ariaLabel={displayName} as="nextLink" icon={icon} variant="action" href={path} />
        </li>
      ))}
    </ul>
  );
}
