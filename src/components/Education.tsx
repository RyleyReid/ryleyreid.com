import styled from '@emotion/styled';

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #2a2a2a;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SchoolInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const SchoolName = styled.h3`
  margin: 0;
  color: #2a2a2a;
`;

const Location = styled.span`
  color: #666;
`;

const Degree = styled.p`
  margin: 0.5rem 0;
  color: #444;
`;

const Coursework = styled.p`
  margin: 0.5rem 0;
  color: #666;
  font-style: italic;
`;

const Education = () => {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <EducationItem>
        <SchoolInfo>
          <SchoolName>Western University</SchoolName>
          <Location>London, Ontario</Location>
        </SchoolInfo>
        <Degree>Honors Bachelor of Science in Computer Science, minor in Software Engineering</Degree>
        <Location>Graduated April 2021</Location>
        <Coursework>
          Coursework: Video Game Development, Data Science, Artificial Intelligence, Data Structures, and Algorithms
        </Coursework>
      </EducationItem>
    </Section>
  );
};

export default Education; 