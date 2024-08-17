import About from '@/components/About';
import Apple from '@/components/Apple';
import Comment from '@/components/Comment';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Products from '@/components/Products';
import Products1 from '@/components/Products1';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <div className='h-screen w-screen z-0 fixed'>
        <Apple />
      </div>
      <Hero />
      <About />
      <Products />
      <Products1 />
      <Comment />
    </main>
  );
}
