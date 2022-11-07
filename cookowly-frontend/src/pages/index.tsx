import { Switch } from '@headlessui/react';
import { useState } from 'react';

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
    </>
  );
}

export default Home;
