import Head from 'next/head';
import Hero from './component/Hero';
import HowItWorks from './component/HowItWorks';
import WhyChooseUs from './component/WhyChooseUs';
import Testimonials from './component/Testimonials';
import ContactForm from './component/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell – Resell Software Licenses</title>
        <meta name="description" content="Turn unused licenses into cash with SoftSell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}