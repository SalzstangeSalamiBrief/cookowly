import { useId } from 'react';

export function Sidebar() {
  const ariaLabelId = useId();

  return (
    <aside
      className="p-4 border-l border-neutral-50/alpha-10 sticky top-0 max-h-screen"
      aria-labelledby={ariaLabelId}
      data-pw="sidebar"
    >
      <header id={ariaLabelId} className="text-center font-medium text-xl font-title whitespace-pre">
        Search for recipes
      </header>
    </aside>
  );
}
