import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#f0f0f0', padding: '10px' }}>
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
