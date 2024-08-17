import Image from 'next/image';

const News = () => {
  return (
    <section className='z-10 flex flex-col relative h-screen w-screen px-28 py-28 pb-12 items-center gap-10'>
      <div className='w-full h-full px-28 relative'>
        <Image
          src='https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='apple'
          layout='fill'
          objectFit='cover'
        />

        <div className='flex flex-col'>
          <h1
            style={{
              position: 'absolute',
              top: '25%',
              left: '38%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            Stay Updated with Appleworld Newsletter
          </h1>
          <p
            style={{
              position: 'absolute',
              top: '40%',
              left: '36%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '25px',
              zIndex: 10,
            }}
          >
            Subscribe to our newsletter for the latest updates, promotions, and
            news.
          </p>
          <div
            className='flex flex-col w-1/2'
            style={{
              position: 'absolute',
              top: '55%',
              left: '32%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '25px',
              zIndex: 10,
            }}
          >
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
      </div>
    </section>
  );
};

export default News;
