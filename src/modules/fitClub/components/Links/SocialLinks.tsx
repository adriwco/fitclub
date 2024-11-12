import React from 'react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-light hover:bg-orange-600 transition"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
