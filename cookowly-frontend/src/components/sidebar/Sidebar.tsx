import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={`${styles.sidebar} p-4 border-l border-neutral-50/alpha-10 sticky top-0 max-h-screen`}>
      <p>Hello world</p>
    </aside>
  );
}
