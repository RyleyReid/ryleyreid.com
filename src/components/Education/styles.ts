import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0 2rem 2rem 2rem;
  background-color: rgba(249, 249, 249, 0.7);
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

export const EducationItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SchoolName = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SchoolLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #3498db;
  }
`;

export const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Degree = styled.p`
  color: #34495e;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const Minor = styled.p`
  color: #34495e;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const DateRange = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.5;
`;
