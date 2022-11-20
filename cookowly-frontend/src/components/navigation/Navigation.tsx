import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={`${styles.navigation} p-4 border-r border-neutral-50/alpha-10 sticky top-0 max-h-screen`}>
      <header>Cookowly</header>
    </nav>
  );
}
