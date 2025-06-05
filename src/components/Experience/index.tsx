import linkIcon from '../../assets/linkIcon.png';
import { jobs } from './content';
import {
  Section,
  SectionTitle,
  JobItem,
  JobHeader,
  CompanyInfo,
  CompanyName,
  CompanyLink,
  LinkIcon,
  JobTitle,
  Location,
  DateRange,
  Description,
  DescriptionItem,
} from './styles';

const Experience = () => {
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
