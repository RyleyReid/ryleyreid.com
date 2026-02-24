export interface Job {
  company: string;
  location: string;
  title: string;
  dateRange: string;
  link?: string;
  description: string[];
}

export const jobs: Job[] = [
  {
    company: 'Applied Systems - Applied Pay Premium Finance',
    location: 'Toronto, Ontario',
    title: 'Full Stack Software Developer',
    dateRange: 'Feb 2025 – Present',
    description: [
      'Core contributor to a newly launched premium finance payments product, scaling transaction volume from <$1M/month to $100M+/month within one year across the US, UK, and Canada',
      'Built and maintained financial workflows supporting high-value, time-sensitive transactions for insurance agencies',
      'Took on-call ownership of production systems, resolving payment failures and system issues with customer impact',
      'Implemented monitoring and observability for Kubernetes-hosted services to ensure reliability as the product scaled',
    ],
  },
  {
    company: 'Ollon',
    location: 'Toronto, Ontario',
    title: 'Full Stack Software Developer',
    dateRange: 'August 2022 – Present',
    link: 'https://www.ollon.ca/',
    description: [
      'Owned end-to-end development of customer-facing product features, from requirements gathering to production release',
      'Built and maintained applications using TypeScript, React, and Node.js, shipping features used by real customers',
      'Collaborated closely with product managers and clients to turn ambiguous requirements into polished solutions',
      'Conducted code reviews, wrote unit tests, and mentored junior developers to uphold high-quality standards',
    ],
  },
  {
    company: 'TechShare Group',
    location: 'London, Ontario',
    title: 'Full Stack Software Developer',
    dateRange: 'May 2021 – August 2022',
    link: 'https://www.techshare.ca/',
    description: [
      'Updated and maintained the user portal and Salesforce application pages using Angular, CSS, and JavaScript',
      'Managed and updated a Salesforce database and APIs using APEX and SOQL',
      'Collaborated and created scalable code with my team using a Scrum framework, unit testing, and code reviews',
      'Earned over 12,000 Salesforce Trailhead points',
    ],
  },
  {
    company: 'True Syntax',
    location: 'Toronto, Ontario',
    title: 'CEO & Founder',
    dateRange: 'November 2023 – Present',
    description: [
      'Founded and lead a software consulting studio, delivering modern web products for early-stage companies and small teams',
      'Took full ownership of projects end-to-end: product planning, UX decisions, development, deployment, and iteration based on client feedback',
      'Built responsive, user-focused applications with React/TypeScript front ends and Node.js back ends, emphasizing clarity and usability',
      'Worked directly with customers to understand workflows, ship quickly, and refine features based on real-world usage',
    ],
  },
  {
    company: 'StudentWorks Painting',
    location: 'Ajax-Pickering, Ontario',
    title: 'Self-Employed Franchisee',
    dateRange: 'November 2019-August 2020',
    link: 'https://studentworks.com/',
    description: [
      'Independently managed labor crews completing contracts for residential and commercial painting',
      'Created and adapted the typical marketing campaign for a franchise to succeed during the COVID-19 lockdowns',
      'Marketed and sold over $65,000 of painting contracts remotely and in-person during the COVID pandemic',
    ],
  },
];
