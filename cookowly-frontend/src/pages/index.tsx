import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { Button } from '../components/buttons/Button';
import { IconButton } from '../components/buttons/IconButton';

function Home() {
  const [enabled, setEnabled] = useState<boolean>(false);
  return (
    <>
      <h1 className="bg-red-400 text-blue-500" data-pw="hello-world">
        Hello Cookwoly
      </h1>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
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
        <Button variant="action" text="sm" size="sm" />
      </div>
      <div>
        <IconButton icon={<BeakerIcon />} ariaLabel="myLabel" />
      </div>
      <p className="font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque provident qui debitis laborum tenetur
        repudiandae inventore maxime aut. Itaque corporis odio ex harum iusto ut nobis in iste odit?
      </p>
    </>
  );
}

export default Home;
