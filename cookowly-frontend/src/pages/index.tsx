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
        <IconButton icon={<BeakerIcon />} ariaLabel="myLabel" />
      </div>
    </>
  );
}

export default Home;
