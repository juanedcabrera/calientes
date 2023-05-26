import Link from 'next/link';
import styles from './page.module.css';

const Navbar = () => {
  return (
    <nav
      className={styles.main}
      style={{ top: 0, width: '100%', padding: '10px', marginBottom: '2rem' }}
    >
      <Link href="/">Home</Link>
      {' | '}
      <Link href="/episodes">Episodes</Link>
      {' | '}
      <Link href="/guests">Guests</Link>
      {' | '}
      <Link href="/sauces">Hot Sauces</Link>
      {' | '}
      <Link href="/seasons">Seasons</Link>
    </nav>
  );
};

export default Navbar;
