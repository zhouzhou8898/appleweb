const Products1 = () => {
  return (
    <section className='z-10 flex flex-row relative h-screen w-screen px-28 py-48 '>
      <div className='flex flex-row'>
        <div className='w-1/2 text-4xl font-semibold'>
          <h1>Experience the Refreshing Taste of Our Premium Apple Juice</h1>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
          <div className=''>
            <p>
              At Appleworld, we take pride in our long-standing tradition of
              producing high-quality apple juice. With over 20 years of
              experience, we have sold millions of bottles of our delicious
              juice, satisfying customers all around the world.
            </p>
          </div>
          <div className='flex flex-row gap-10 mt-10'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl font-semibold'>50% Satisfaction Rate</h2>
              <p>
                Our customers love the taste and quality of our apple juice.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl font-semibold'>
                50% Customer Retention Rate
              </h2>
              <p>
                Once you try our apple juice, you'll keep coming back for more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products1;
