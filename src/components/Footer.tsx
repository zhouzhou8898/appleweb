import Link from 'next/link';

const Footer = () => {
  const FOOTER_LINKS = [
    {
      title: 'About Us',
      links: ['Products', 'Services', 'Contact Us', 'FAQs', 'Terms'],
    },
    {
      title: 'Privacy',
      links: [
        'Shipping',
        'Returns',
        'Track OOrder',
        'Customer Support',
        'Blog',
      ],
    },
    {
      title: 'Careers',
      links: ['Affiliate', 'Partners', 'Investors', 'Press', 'Events'],
    },
    {
      title: 'Help',
      links: ['Support', 'FAQs', 'Contact Us', 'Shipping', 'Returns'],
    },
    {
      title: 'Track Order',
      links: [
        'Terms and Conditions',
        'Privacy Policy',
        'Cookie Policy',
        'Shipping Policy',
        'Return Policy',
      ],
    },
    {
      title: 'Follow Us',
      links: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Subscribe'],
    },
  ];

  return (
    <section className='z-10 flex flex-col relative h-screen w-screen px-28 py-40 pb-12 items-center gap-10'>
      <div className='flex flex-row justify-around w-full'>
        <div className='flex flex-col text-lg'>
          <h1 className='font-bold'>Subscribe to Newsletter</h1>
          <p>Stay up to date with our latest news and offers</p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row w-full'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-2/3 p-2 mr-4 border rounded'
            />
            <button
              type='submit'
              className=' bg-black text-white font-bold py-2 px-4 rounded'
            >
              Join Now
            </button>
          </div>
          <span className='text-base font-thin'>
            By joining, you agree to our Terms and Conditions.
          </span>
        </div>
      </div>
      <div className='bg-black w-full h-[1px] m-14' />
      <div className='flex flex-wrap gap-28 sm:justify-between md:flex-1'>
        {FOOTER_LINKS.map((columns) => (
          <FooterColumn title={columns.title}>
            <ul className='flex flex-col gap-4 text-gray-30'>
              {columns.links.map((link) => (
                <Link
                  href='/'
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        ))}
      </div>
      <div className='bg-black w-full h-[1px]' />

      <p>© 2024 Appleworld. All rights reserved.</p>
    </section>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <h4 className='font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
