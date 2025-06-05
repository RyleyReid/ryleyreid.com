export interface Job {
  company: string;
  location: string;
  title: string;
  dateRange: string;
  link: string;
  description: string[];
}

export const jobs: Job[] = [
  {
    company: 'Applied Systems - Applied Pay Premium Finance',
    location: 'Toronto, Ontario',
    title: 'Full Stack Software Developer',
    dateRange: 'Feb 2025 – Present',
    link: 'https://www1.appliedsystems.com/en-ca/',
    description: [
      'Built out the Premium financing system, servicing insurance agencies across the USA, UK, and Canada',
      'Collaborate with internal teams to build out internal npm packages and UI tooling',
      'Developed and expanded email and client notification systems',
      'On-call support for system issues and dropped payments',
    ],
  },
  {
    company: 'Ollon',
    location: 'Toronto, Ontario',
    title: 'Full Stack Software Developer',
    dateRange: 'August 2022 – Present',
    link: 'https://www.ollon.ca/',
    description: [
      'Led and managed full-stack development projects using TypeScript, React, Node.js, and MySQL, ensuring timely delivery within Agile/Scrum frameworks',
      'Collaborate with clients in meetings to gather requirements, provide technical insights, and deliver tailored solutions',
      'Develop and integrate REST APIs, and implement DevOps practices using Git and Docker',
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
      'Update and maintain the user portal and Salesforce application pages using Angular, CSS, and JavaScript',
      'Manage and update a Salesforce database and APIs using APEX and SOQL',
      'Collaborated and created scalable code with my team using a scrum framework, unit testing, and Code reviews',
      'Over 12,000 Trailhead points',
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
