import React from 'react';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutPreview from '../components/home/AboutPreview';
import Process from '../components/home/Process';
import GalleryPreview from '../components/home/GalleryPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedServices />
      <AboutPreview />
      <Process />
      <GalleryPreview />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}
