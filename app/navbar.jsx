import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/episodes">Episodes</Link>
        </li>
        <li>
          <Link href="/guests">Guests</Link>
        </li>
        <li>
          <Link href="/sauces">Hot Sauces</Link>
        </li>
        <li>
          <Link href="/seasons">Seasons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
