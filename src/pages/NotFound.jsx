import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

export default function NotFound() {
  return (
    <div className="bg-[#FAF8F3] min-h-[70vh] flex items-center justify-center py-20">
      <Container size="small" className="text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mx-auto">
          <Icon name="Compass" className="w-10 h-10 animate-spin-slow" />
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-extrabold uppercase tracking-widest text-[#D7A72E]">404 Error</span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#16131B]">Page Not Found</h1>
          <p className="text-sm sm:text-base text-[#68636F] max-w-md mx-auto">
            The page you are looking for might have been moved or doesn't exist. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button to="/" variant="primary" size="lg" icon="Home">
            Return to Homepage
          </Button>
          <Button to="/services" variant="secondary" size="lg" icon="Wrench">
            Explore All Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
