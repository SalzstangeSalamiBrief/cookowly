import { BookOpenIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useMemo } from 'react';
import { useGetBreakpoints } from '../../hooks/useGetBreakpoints';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { INavigationLink } from './NavigationPropts';

const links: INavigationLink[] = [
  { displayName: 'Recipes', icon: <BookOpenIcon />, path: '/recipes' },
  { displayName: 'About', icon: <QuestionMarkCircleIcon />, path: '/about' },
];

export function Navigation() {
  const { isMd } = useGetBreakpoints();

  const navigationToRender = useMemo(
    () => (isMd ? <DesktopNavigation links={links} /> : <MobileNavigation links={links} />),
    [isMd],
  );

  return (
    <nav className="navigation p-4 border-r border-neutral-50/alpha-10 sticky top-0 max-h-screen">
      <header className="font-title text-xl text-center font-bold">
        <Link href="/">Cookowly</Link>
      </header>
      {navigationToRender}
    </nav>
  );
}
