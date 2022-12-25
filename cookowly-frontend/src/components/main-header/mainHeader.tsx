import { useGetCurrentRoute } from '../../hooks/useGetCurrentRoute';
import { Text } from '../Text/Text';

export function MainHeader() {
  const currentRoute = useGetCurrentRoute();

  return (
    <div
      className="p-4 border-b border-neutral-50/alpha-10 bg-neutral-900/alpha-97 font-title text-2xl sticky top-0"
      data-pw="main-header"
    >
      <Text type="heading" as="h1" size="2xl">
        {currentRoute.displayName}
      </Text>
    </div>
  );
}
