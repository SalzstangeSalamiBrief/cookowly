import {
  ArrowTrendingUpIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useId, useMemo } from 'react';
import { useGetBreakpoints } from '../../hooks/useGetBreakpoints';
import { BrandIcon } from '../BrandIcon';
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';
import { INavigationLink } from './NavigationPropts';

const navigationLinks: INavigationLink[] = [
  { displayName: 'All Recipes', icon: <BookOpenIcon />, path: '/recipes' },
  { displayName: 'My Recipes', icon: <StarIcon />, path: '/' },
  { displayName: 'Trending recipes', icon: <ArrowTrendingUpIcon />, path: '/' },
  { displayName: 'About', icon: <QuestionMarkCircleIcon />, path: '/about' },
];

/**
 * Contains the navigation of the app
 *
 * @returns a navigation component
 */
export function Navigation() {
  const ariaLabelId = useId();
  const { isMd } = useGetBreakpoints();

  const navigationToRender = useMemo(
    () => (
      <>
        {navigationLinks.map(({ displayName, icon, path }) => (
          <li key={`${path}-${displayName}`} className="flex justify-center md:justify-start md:[&>a]:w-full">
            {isMd ? (
              <Button text={displayName} asTag="nextLink" icon={icon} variant="action" href={path} />
            ) : (
              <IconButton ariaLabel={displayName} asTag="nextLink" icon={icon} variant="action" href={path} />
            )}
          </li>
        ))}
        <li className="mt-auto md:[&>a]:w-full">
          {isMd ? (
            <Button text="Dean Dixon" asTag="nextLink" href="/" variant="action" icon={<UserIcon />} />
          ) : (
            <IconButton ariaLabel="Your profile" icon={<UserIcon />} variant="action" />
          )}
        </li>
      </>
    ),
    [isMd],
  );

  return (
    <nav
      className="p-2 md:p-4 border-r border-neutral-50/alpha-10 sticky top-0 max-h-screen flex flex-col items-center "
      aria-labelledby={ariaLabelId}
      data-pw="navigation"
    >
      <header id={ariaLabelId} className="font-title text-xl text-center font-bold mb-4">
        <Link href="/" aria-label="cookowly">
          <BrandIcon />
        </Link>
      </header>
      <ul className="flex-grow flex flex-col gap-4">{navigationToRender}</ul>
    </nav>
  );
}
