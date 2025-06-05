import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  color: #2a2a2a;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SkillTag = styled.span`
  background: #2a2a2a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: #3a3a3a;
  }
`;
