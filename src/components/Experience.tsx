import styled from '@emotion/styled';
import linkIcon from '../assets/linkIcon.png';

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  color: #2a2a2a;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const JobItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const CompanyName = styled.h3`
  margin: 0;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CompanyLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;

  &:hover {
    color: #666;

    img {
      opacity: 1;
    }
  }
`;

const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const JobTitle = styled.h4`
  margin: 0.5rem 0;
  color: #444;
`;

const Location = styled.span`
  color: #666;
`;

const DateRange = styled.span`
  color: #666;
  font-style: italic;
`;

const Description = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  color: #444;
`;

const DescriptionItem = styled.li`
  margin: 0.5rem 0;
  line-height: 1.5;
`;

const Experience = () => {
  const jobs = [
    {
      company: "Applied Systems - Applied Pay Premium Finance",
      location: "Toronto, Ontario",
      title: "Full Stack Software Developer",
      dateRange: "Feb 2025 – Present",
      link: "https://www1.appliedsystems.com/en-ca/",
      description: [
        "Built out the Premium financing system, servicing insurance agencies across the USA, UK, and Canada",
        "Collaborate with internal teams to build out internal npm packages and UI tooling",
        "Developed and expanded email and client notification systems",
        "On-call support for system issues and dropped payments"
      ]
    },
    {
      company: "Ollon",
      location: "Toronto, Ontario",
      title: "Full Stack Software Developer",
      dateRange: "August 2022 – Present",
      link: "https://www.ollon.ca/",
      description: [
        "Led and managed full-stack development projects using TypeScript, React, Node.js, and MySQL, ensuring timely delivery within Agile/Scrum frameworks",
        "Collaborate with clients in meetings to gather requirements, provide technical insights, and deliver tailored solutions",
        "Develop and integrate REST APIs, and implement DevOps practices using Git and Docker",
        "Conducted code reviews, wrote unit tests, and mentored junior developers to uphold high-quality standards"
      ]
    },
    {
      company: "TechShare Group",
      location: "London, Ontario",
      title: "Full Stack Software Developer",
      dateRange: "May 2021 – August 2022",
      link: "https://www.techshare.ca/",
      description: [
        "Update and maintain the user portal and Salesforce application pages using Angular, CSS, and JavaScript",
        "Manage and update a Salesforce database and APIs using APEX and SOQL",
        "Collaborated and created scalable code with my team using a scrum framework, unit testing, and Code reviews",
        "Over 12,000 Trailhead points"
      ]
    },
    {
      company: "StudentWorks Painting",
      location: "Ajax-Pickering, Ontario",
      title: "Self-Employed Franchisee",
      dateRange: "November 2019-August 2020",
      link: "https://studentworks.com/",
      description: [
        "Independently managed labor crews completing contracts for residential and commercial painting",
        "Created and adapted the typical marketing campaign for a franchise to succeed during the COVID-19 lockdowns",
        "Marketed and sold over $65,000 of painting contracts remotely and in-person during the COVID pandemic"
      ]
    }
  ];

  return (
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      {jobs.map((job, index) => (
        <JobItem key={index}>
          <JobHeader>
            <CompanyInfo>
              <CompanyName>
                <CompanyLink href={job.link} target="_blank" rel="noopener noreferrer">
                  {job.company}
                  <LinkIcon src={linkIcon} alt="Visit company website" />
                </CompanyLink>
              </CompanyName>
              <Location>{job.location}</Location>
            </CompanyInfo>
          </JobHeader>
          <JobTitle>{job.title}</JobTitle>
          <DateRange>{job.dateRange}</DateRange>
          <Description>
            {job.description.map((item, i) => (
              <DescriptionItem key={i}>{item}</DescriptionItem>
            ))}
          </Description>
        </JobItem>
      ))}
    </Section>
  );
};

export default Experience; 