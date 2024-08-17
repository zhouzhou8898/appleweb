import Image from 'next/image';

const About = () => {
  return (
    <section className='z-10 flex flex-row relative h-screen w-screen px-28 py-48 gap-10'>
      <div className='flex w-1/2 flex-col gap-10'>
        <h1 className='text-4xl leading-snug font-semibold'>
          Experience the Refreshing Taste of Appleworld's Organic Apple Juice
        </h1>
        <p>
          Indulge in the pure goodness of our 100% organic apple juice, freshly
          pressed and free from added sugars. Savor the natural sweetness and
          crisp flavor that only Appleworld can deliver.
        </p>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-bold'>100% Organic</h2>
            <p>
              Our apple juice is made from the finest organic apples, ensuring
              premium quality and taste.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-bold'>Freshly Pressed</h2>
            <p>
              We carefully press our apples to extract the purest juice,
              preserving its natural freshness.
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-1/2 items-start'>
        <Image
          src='https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='apple juice'
          width={630}
          height={500}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default About;
