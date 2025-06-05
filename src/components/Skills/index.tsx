import { skills } from './content';
import {
  Section,
  SectionTitle,
  SkillsContainer,
  SkillTag
} from './styles';

const Skills = () => {
  return (
    <Section>
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills; 