import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const NAV_LINK = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'about', label: 'About Us' },
    { href: '/', key: 'products', label: 'Products' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];
  return (
    <div className='flex flex-row z-30 py-3 px-28 bg-transparent justify-between fixed w-full'>
      <Image
        unoptimized
        src='apple1.svg'
        alt='logo'
        width={64}
        height={24}
      />
      <ul className='hidden md:flex gap-20 items-center'>
        {NAV_LINK.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='text-lg'
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Image
        unoptimized
        src='menu.svg'
        alt='menu'
        width={24}
        height={24}
      />
    </div>
  );
};

export default Navbar;
