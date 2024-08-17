import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  return (
    <section className='z-10 flex flex-row relative h-screen w-screen px-28 py-48'>
      <div className=''>
        <div className='flex flex-row'>
          <h1 className='w-1/2 text-4xl font-semibold'>
            Discover the Power of Apple Juice
          </h1>
          <p className='w-1/2'>
            Our apple juice is packed with health benefits, made from fresh
            Australian apples. With its refreshing taste and natural goodness,
            it's the perfect choice for a healthy lifestyle.
          </p>
        </div>
        <div className='flex flex-row gap-8'>
          <div className='w-1/3 pt-14'>
            <div className='flex flex-col gap-6'>
              <Image
                src='https://images.pexels.com/photos/23025213/pexels-photo-23025213.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                width={600}
                height={400}
              />
              <h2 className='text-xl font-semibold'>Eco-Friendly Packaging</h2>
              <p>
                We care about the environment, which is why our apple juice
                comes in eco-friendly packaging. Enjoy your favorite drink while
                reducing your carbon footprint.
              </p>
              <Link href=''>Learn More {'>'}</Link>
            </div>
          </div>
          <div className='w-1/3 pt-14'>
            <div className='flex flex-col gap-6'>
              <Image
                src='https://images.pexels.com/photos/23152991/pexels-photo-23152991.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt=''
                width={600}
                height={400}
              />
              <h2 className='text-xl font-semibold'>Eco-Friendly Packaging</h2>
              <p>
                We care about the environment, which is why our apple juice
                comes in eco-friendly packaging. Enjoy your favorite drink while
                reducing your carbon footprint.
              </p>
              <Link href=''>Learn More {'>'}</Link>
            </div>
          </div>

          <div className='w-1/3 pt-14'>
            <div className='flex flex-col gap-6'>
              <Image
                src='https://images.pexels.com/photos/22820143/pexels-photo-22820143.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt=''
                width={600}
                height={400}
              />
              <h2 className='text-xl font-semibold'>Eco-Friendly Packaging</h2>
              <p>
                We care about the environment, which is why our apple juice
                comes in eco-friendly packaging. Enjoy your favorite drink while
                reducing your carbon footprint.
              </p>
              <Link href=''>Learn More {'>'}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
