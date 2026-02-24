export interface Education {
  school: string;
  degree: string;
  minor: string;
  dateRange: string;
  description: string;
  link: string;
}

export const education: Education[] = [
  {
    school: 'Western University',
    degree: 'Honors Bachelor of Science in Computer Science',
    minor: 'Software Engineering',
    dateRange: 'Graduated April 2021',
    description:
      'Coursework: Video Game Development, Data Science, Artificial Intelligence, Data Structures, and Algorithms.',
    link: 'https://www.uwo.ca/',
  },
];
