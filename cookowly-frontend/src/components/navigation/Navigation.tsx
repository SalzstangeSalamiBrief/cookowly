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
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';
import { INavigationLink } from './NavigationPropts';

const links: INavigationLink[] = [
  { displayName: 'All Recipes', icon: <BookOpenIcon />, path: '/recipes' },
  { displayName: 'My Recipes', icon: <StarIcon />, path: '/' },
  { displayName: 'Trending recipes', icon: <ArrowTrendingUpIcon />, path: '/' },
  { displayName: 'About', icon: <QuestionMarkCircleIcon />, path: '/about' },
];

export function Navigation() {
  const ariaLabelId = useId();
  const { isMd } = useGetBreakpoints();

  const navigationToRender = useMemo(() => {
    if (isMd) {
      return (
        <>
          {links.map(({ displayName, icon, path }) => (
            <li key={path} className="mb-6">
              <Button text={displayName} as="nextLink" icon={icon} variant="action" href={path} />
            </li>
          ))}
          {/* TODO: DUMMY PROFILE BUTTON => FIX LATER AFTER USER GETS IMPLEMENTED */}
          <li className="mt-auto">
            <Button text="Dean Dixon" as="nextLink" href="/" variant="action" icon={<UserIcon />} />
          </li>
        </>
      );
    }
    return (
      <>
        {links.map(({ displayName, icon, path }) => (
          <li key={path} className="mb-6">
            <IconButton ariaLabel={displayName} as="nextLink" icon={icon} variant="action" href={path} />
          </li>
        ))}
        {/* TODO: DUMMY PROFILE BUTTON => FIX LATER AFTER USER GETS IMPLEMENTED */}
        <li className="mt-auto">
          <IconButton ariaLabel="Your profile Dean Dixon" as="nextLink" href="/" variant="action" icon={<UserIcon />} />
        </li>
      </>
    );
  }, [isMd]);

  return (
    <nav
      className="navigation p-4 border-r border-neutral-50/alpha-10
        sticky top-0 max-h-screen flex flex-col items-center "
      aria-labelledby={ariaLabelId}
      data-pw="navigation"
    >
      <header id={ariaLabelId} className="font-title text-xl text-center font-bold mb-4">
        <Link href="/">Cookowly</Link>
      </header>
      <ul className="flex-grow flex flex-col [&>li>a]:w-full">{navigationToRender}</ul>
    </nav>
  );
}
