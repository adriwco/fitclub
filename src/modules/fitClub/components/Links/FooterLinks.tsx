import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-primary-light">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
