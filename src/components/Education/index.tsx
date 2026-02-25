import { education } from './content';
import {
  Section,
  SectionTitle,
  EducationItem,
  SchoolName,
  SchoolLink,
  LinkIcon,
  Degree,
  DateRange,
  Description,
  Minor,
} from './styles';

const linkIconSrc = '/assets/icons/linkIcon.png';

const Education = () => {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      {education.map((edu, index) => (
        <EducationItem key={index}>
          <SchoolName>
            <SchoolLink href={edu.link} target="_blank" rel="noopener noreferrer">
              {edu.school}
              <LinkIcon src={linkIconSrc} alt="Visit school website" />
            </SchoolLink>
          </SchoolName>
          <Degree>
            {edu.degree}
          </Degree>
          <Minor>Minor: {edu.minor}</Minor>
          <DateRange>{edu.dateRange}</DateRange>
          <Description>{edu.description}</Description>
        </EducationItem>
      ))}
    </Section>
  );
};

export default Education;
