import { BrandIcon } from '../components/BrandIcon';
import { Button } from '../components/buttons/Button';
import { Text } from '../components/Text/Text';

export default function Custom404page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <BrandIcon />
      <Text margin="my-4">The request page could does not exist.</Text>
      <div className="flex">
        <Button text="Try again" onClick={() => document.location.reload()} variant="action" />
        <Button text="Home" as="nextLink" href="/" variant="action" />
      </div>
    </div>
  );
}
