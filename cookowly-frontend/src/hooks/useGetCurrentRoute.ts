import { useRouter } from 'next/router';

interface IRoute {
  displayName: string;
  pathname: string;
  children?: IRoute[];
}

const appRoutes: IRoute[] = [
  { displayName: 'Cookowly', pathname: '/' },
  { displayName: 'About', pathname: '/about' },
  {
    displayName: 'Recipes',
    pathname: '/recipes',
    children: [
      //  TODO LATER ON RENDER THE NAME OF THE RECIPE
      { displayName: 'Recipe', pathname: '/[recipeId]' },
    ],
  },
];

/**
 * Gets the matching IRoute of the tail in the passed array of parts.
 * If a matching IRoute has children and some parts remain in the path,
 *  then call this method recursively.
 *
 * @param routes an array of IRoute
 * @param pathnameParts remaining parts of the current pathname
 * @returns The IRoute matching to the leaf/tail of the last item in pathnameParts
 */
const getCurrentRoute = (routes: IRoute[], pathnameParts: string[]): IRoute => {
  const [firstPartOfTheRoute, ...otherPartsOfTheRoute] = pathnameParts;
  const matchedRoute = routes.find((route) => route.pathname === firstPartOfTheRoute);

  if (!matchedRoute || (!matchedRoute.children && otherPartsOfTheRoute.length)) {
    throw new Error(`There is no matching route with the part ${firstPartOfTheRoute}`);
  }

  if (matchedRoute.children?.length && otherPartsOfTheRoute.length) {
    return getCurrentRoute(matchedRoute.children, otherPartsOfTheRoute);
  }

  return matchedRoute;
};

/**
 * Get the IRoute matching to the current pathname.
 * Each Route needs an IRoute for using this hook.
 *
 *
 * @returns the current IRoute
 */
export const useGetCurrentRoute = () => {
  const router = useRouter();
  const partsOfTheCurrentRoute = router.pathname.split(/(\/[a-z]+)/).filter((part) => part);
  return getCurrentRoute(appRoutes, partsOfTheCurrentRoute);
};
