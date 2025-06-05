export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  description: string;
  link: string;
}

export const education: Education[] = [
  {
    school: 'Western University',
    degree: 'Bachelor of Engineering Science, Software Engineering',
    dateRange: '2019 - 2023',
    description:
      'Graduated with distinction. Relevant coursework: Data Structures, Algorithms, Software Design, Database Systems, Web Development, Mobile App Development, Computer Networks, Operating Systems.',
    link: 'https://www.uwo.ca/',
  },
];
