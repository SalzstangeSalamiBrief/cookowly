import { useRouter } from 'next/router';

interface IRoute {
  displayName: string;
  pathname: string;
  children?: IRoute[];
}

const appRoutes: IRoute[] = [
  { displayName: 'Cookowly', pathname: '/' },
  { displayName: 'About', pathname: '/about' },
  { displayName: 'Recipes', pathname: '/recipes', children: [{ displayName: 'Recipe by ID', pathname: '[recipeId]' }] },
];

// TODO LATER ON CREATE A MAPPING OF ROUTES TO DISPLAY_NAMES AND USE THAT HERE
export function MainHeader() {
  const router = useRouter();

  const getPartsOfCurrentRoute = () => router.pathname.split(/(\/[a-z]+)/).filter((part) => part);

  const getCurrentRoute = (routes: IRoute[], routeParts: string[]): IRoute => {
    const [firstPartOfTheRoute, ...otherPartsOfTheRoute] = routeParts;
    const matchedRoute = routes.find((route) => route.pathname.localeCompare(firstPartOfTheRoute));

    if (!matchedRoute) {
      throw new Error(`There is no matching route with the part ${firstPartOfTheRoute}`);
    }

    if (matchedRoute.children && otherPartsOfTheRoute?.length) {
      return getCurrentRoute(matchedRoute.children, otherPartsOfTheRoute);
    }

    if (!matchedRoute.children && otherPartsOfTheRoute?.length) {
      throw new Error(`There is no matching route with the part ${firstPartOfTheRoute}`);
    }

    return matchedRoute;
  };

  console.log(getPartsOfCurrentRoute());
  console.log(getCurrentRoute(appRoutes, getPartsOfCurrentRoute()));

  return (
    <div
      className="p-4 border-b border-neutral-50/alpha-10 bg-neutral-900/alpha-97 font-title text-2xl sticky top-0"
      data-pw="main-header"
    >
      <h1>Hello world</h1>
    </div>
  );
}
