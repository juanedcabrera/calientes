import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{top: 0, width: '100%', padding: '10px', marginBottom: '2rem'}}>
      <Link href="/">Home</Link>
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
