import { BeakerIcon } from '@heroicons/react/24/solid';
import { Button } from '../components/buttons/Button';
import { IconButton } from '../components/buttons/IconButton';

function Home() {
  return (
    <>
      <div>
        <Button text="lg" size="lg" icon={<BeakerIcon />} dataPW="my-button" />
        <Button text="lg" size="lg" />
        <Button text="default" icon={<BeakerIcon />} />
        <Button text="default" />
        <Button text="md" size="md" icon={<BeakerIcon />} />
        <Button text="md" size="md" />
        <Button text="sm" size="sm" icon={<BeakerIcon />} />
        <Button text="sm" size="sm" />
      </div>
      <div>
        <Button variant="primary" text="lg" size="lg" icon={<BeakerIcon />} as="button" />
        <Button variant="primary" text="lg" size="lg" as="button" />
        <Button variant="primary" text="default" icon={<BeakerIcon />} as="button" />
        <Button variant="primary" text="default" as="button" />
        <Button variant="primary" text="md" size="md" icon={<BeakerIcon />} as="button" />
        <Button variant="primary" text="md" size="md" as="button" />
        <Button variant="primary" text="sm" size="sm" icon={<BeakerIcon />} as="button" />
        <Button variant="primary" text="sm" size="sm" as="button" />
      </div>
      <div>
        <Button variant="primary" text="lg" size="lg" icon={<BeakerIcon />} as="a" />
        <Button variant="primary" text="lg" size="lg" as="a" />
        <Button variant="primary" text="default" icon={<BeakerIcon />} as="a" />
        <Button variant="primary" text="default" as="a" />
        <Button variant="primary" text="md" size="md" icon={<BeakerIcon />} as="a" />
        <Button variant="primary" text="md" size="md" as="a" />
        <Button variant="primary" text="sm" size="sm" icon={<BeakerIcon />} as="a" />
        <Button variant="primary" text="sm" size="sm" as="a" />
      </div>
      <div>
        <Button variant="ghost" text="lg" size="lg" icon={<BeakerIcon />} />
        <Button variant="ghost" text="lg" size="lg" />
        <Button variant="ghost" text="default" icon={<BeakerIcon />} />
        <Button variant="ghost" text="default" />
        <Button variant="ghost" text="md" size="md" icon={<BeakerIcon />} />
        <Button variant="ghost" text="md" size="md" />
        <Button variant="ghost" text="sm" size="sm" icon={<BeakerIcon />} />
        <Button variant="ghost" text="sm" size="sm" />
      </div>
      <div>
        <Button variant="action" text="lg" size="lg" icon={<BeakerIcon />} />
        <Button variant="action" text="lg" size="lg" />
        <Button variant="action" text="default" icon={<BeakerIcon />} />
        <Button variant="action" text="default" />
        <Button variant="action" text="md" size="md" icon={<BeakerIcon />} />
        <Button variant="action" text="md" size="md" />
        <Button variant="action" text="sm" size="sm" icon={<BeakerIcon />} />
        <Button variant="action" text="sm disabled" size="sm" isDisabled />
      </div>
      <div>
        <IconButton icon={<BeakerIcon />} ariaLabel="myLabel" />
      </div>
    </>
  );
}

export default Home;
