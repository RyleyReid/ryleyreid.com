import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

export const SectionTitle = styled.h2`
  color: #2a2a2a;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const JobItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const CompanyName = styled.h3`
  margin: 0;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CompanyLink = styled.a`
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

export const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const JobTitle = styled.h4`
  margin: 0.5rem 0;
  color: #444;
`;

export const Location = styled.span`
  color: #666;
`;

export const DateRange = styled.span`
  color: #666;
  font-style: italic;
`;

export const Description = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  color: #444;
`;

export const DescriptionItem = styled.li`
  margin: 0.5rem 0;
  line-height: 1.5;
`; 