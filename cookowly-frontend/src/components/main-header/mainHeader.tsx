import { useGetCurrentRoute } from '../../hooks/useGetCurrentRoute';

export function MainHeader() {
  const currentRoute = useGetCurrentRoute();

  return (
    <div
      className="p-4 border-b border-neutral-50/alpha-10 bg-neutral-900/alpha-97 font-title text-2xl sticky top-0"
      data-pw="main-header"
    >
      {/* TODO REPLACE WITH TEXT COMPONENT AFTER THE CORRESPONDING PR IS MERGED INTO MAIN */}
      <h1>{currentRoute.displayName}</h1>
    </div>
  );
}
