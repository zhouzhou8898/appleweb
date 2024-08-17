import Image from 'next/image';

const Comment = () => {
  return (
    <section className='z-10 flex flex-col relative h-screen w-screen px-28 py-40 items-center gap-10'>
      <div className='flex flex-row'>
        <Image
          unoptimized
          src='star.svg'
          alt=''
          width={20}
          height={20}
        />
        <Image
          unoptimized
          src='star.svg'
          alt=''
          width={20}
          height={20}
        />
        <Image
          unoptimized
          src='star.svg'
          alt=''
          width={20}
          height={20}
        />
        <Image
          unoptimized
          src='star.svg'
          alt=''
          width={20}
          height={20}
        />
        <Image
          unoptimized
          src='star.svg'
          alt=''
          width={20}
          height={20}
        />
      </div>
      <h2>
        The apple juice from Appleworld is simply amazing. It's so refreshing
        and delicious, I can't get enough of it!
      </h2>
      <div className='flex flex-row gap-16'>
        <div className='flex flex-row items-center gap-5'>
          <Image
            src='https://images.pexels.com/photos/3244392/pexels-photo-3244392.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            width={100}
            height={100}
            className='rounded-full'
          />

          <div className=''>
            <p>John Doe</p>
            <p>Marketing Manager, XYZ Corp</p>
          </div>
        </div>
        <div className=' vertical-line' />

        <div className='flex flex-row'>
          <Image
            unoptimized
            src='ins.svg'
            alt=''
            width={40}
            height={40}
          />
          <Image
            unoptimized
            src='rss.svg'
            alt=''
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className='w-3/4 h-1/2 px-28 relative'>
        <Image
          src='https://images.pexels.com/photos/1379630/pexels-photo-1379630.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt=''
          layout='fill'
          objectFit='cover'
        />
        <p
          className='font-bold z-10'
          style={{
            position: 'absolute',
            top: '30%',
            left: '28%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '40px',
            zIndex: 10,
          }}
        >
          Discover Our Delicious Apple
          <br />
          Juice
        </p>
        <p
          style={{
            position: 'absolute',
            top: '60%',
            left: '32%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '18px',
            zIndex: 10,
          }}
        >
          Made from the finest Australian apples, our juice is refreshing and
          full of flavor.
        </p>
        <button
          className='border-2 rounded-md p-2'
          style={{
            position: 'absolute',
            top: '83%',
            left: '7%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '18px',
            zIndex: 10,
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Comment;
