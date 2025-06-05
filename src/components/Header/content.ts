export interface ContactLink {
  href: string;
  text?: string;
  icon?: string;
  alt?: string;
  isExternal?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    href: 'mailto:ryleycreid@gmail.com',
    text: 'ryleycreid@gmail.com',
  },
  {
    href: 'tel:289-355-8106',
    text: '289-355-8106',
  },
  {
    href: 'https://www.linkedin.com/in/ryley-reid-277049138/',
    icon: 'linkedInLogo',
    alt: 'LinkedIn',
    isExternal: true,
  },
  {
    href: 'https://github.com/RyleyReid',
    icon: 'GithubLogo',
    alt: 'GitHub',
    isExternal: true,
  },
  {
    href: 'https://www.instagram.com/ryley_c_reid/',
    icon: 'InstagramLogo',
    alt: 'Instagram',
    isExternal: true,
  },
];

export const location = 'Etobicoke, Toronto, ON';
export const name = 'Ryley Reid';
export const cvDownload = {
  href: '/RyleyReidCV.pdf',
  downloadName: 'RyleyReid_CV.pdf',
  icon: 'download',
  alt: 'Download CV',
};
