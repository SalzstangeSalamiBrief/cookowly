import { Button } from '../buttons/Button';
import { INavigationProps } from './NavigationPropts';

export function DesktopNavigation({ links }: INavigationProps) {
  return (
    <ul className="my-4 mx-auto w-fit">
      {links.map(({ displayName, icon, path }) => (
        <li key={path} className="mb-6">
          <Button text={displayName} as="nextLink" icon={icon} variant="action" href={path} />
        </li>
      ))}
    </ul>
  );
}
