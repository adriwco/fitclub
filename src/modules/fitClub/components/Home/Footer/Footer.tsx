import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import FooterLinks from '../../Links/FooterLinks';
import SocialLinks from '../../Links/SocialLinks';

const Footer: React.FC = () => {
  const companyLinks = [
    { label: 'Business', href: '#' },
    { label: 'Franchise', href: '#' },
    { label: 'Partnership', href: '#' },
    { label: 'Network', href: '#' },
  ];

  const aboutUsLinks = [
    { label: 'Blogs', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  const contactLinks = [
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'BMI Calculator', href: '#' },
  ];

  const socialLinks = [
    { href: '#', icon: <Facebook className="text-white" /> },
    { href: '#', icon: <Instagram className="text-white" /> },
    { href: '#', icon: <Twitter className="text-white" /> },
  ];

  return (
    <footer className="text-tertiary-light py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-primary-light text-3xl mr-2">💪</span> FITCLUB
          </h2>
          <p className="text-sm mb-6">
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer
            together!
          </p>
          <SocialLinks links={socialLinks} />
        </div>

        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="About Us" links={aboutUsLinks} />
        <FooterLinks title="Contact" links={contactLinks} />
      </div>
    </footer>
  );
};

export default Footer;
