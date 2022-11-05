import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { GhostButton } from '../components/buttons/GhostButton';
import { ActionButton } from '../components/buttons/ActionButton';

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
        <PrimaryButton text="lg" size="lg" icon={<BeakerIcon />} />
        <PrimaryButton text="lg" size="lg" />
        <PrimaryButton text="default" icon={<BeakerIcon />} />
        <PrimaryButton text="default" />
        <PrimaryButton text="md" size="md" icon={<BeakerIcon />} />
        <PrimaryButton text="md" size="md" />
        <PrimaryButton text="sm" size="sm" icon={<BeakerIcon />} />
        <PrimaryButton text="sm" size="sm" />
      </div>
      <div>
        <GhostButton text="lg" size="lg" icon={<BeakerIcon />} />
        <GhostButton text="lg" size="lg" />
        <GhostButton text="default" icon={<BeakerIcon />} />
        <GhostButton text="default" />
        <GhostButton text="md" size="md" icon={<BeakerIcon />} />
        <GhostButton text="md" size="md" />
        <GhostButton text="sm" size="sm" icon={<BeakerIcon />} />
        <GhostButton text="sm" size="sm" />
      </div>
      <div>
        <ActionButton text="lg" size="lg" icon={<BeakerIcon />} />
        <ActionButton text="lg" size="lg" />
        <ActionButton text="default" icon={<BeakerIcon />} />
        <ActionButton text="default" />
        <ActionButton text="md" size="md" icon={<BeakerIcon />} />
        <ActionButton text="md" size="md" />
        <ActionButton text="sm" size="sm" icon={<BeakerIcon />} />
        <ActionButton text="sm" size="sm" />
      </div>
    </>
  );
}

export default Home;
