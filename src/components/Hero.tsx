import Apple from './Apple';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className='flex flex-col h-screen w-screen'>
      <Navbar />
      <h1 className='relative z-10 text-6xl font-bold flex items-center justify-center pt-48 leading-snug text-center fadeInLeft '>
        Discover the refreshing taste <br /> of AppleWorld juice
      </h1>
      <p className='z-10 flex items-center justify-center pt-10 fadeInLeft'>
        Made from the finest Australian apples, our juice is packed with natural
        goodness and bursting with flavor.
      </p>
      <div className='z-10 flex  items-center justify-center gap-10 pt-14'>
        <button className='border-2  rounded-md p-3 bg-green-600 fadeInLeft'>
          Learn More
        </button>
        <button className='border-2  rounded-md py-3 px-6 bg-white fadeInLeft'>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Hero;
