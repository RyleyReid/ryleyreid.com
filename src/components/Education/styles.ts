import styled from '@emotion/styled';
import { colors, spacing, borderRadius, typography } from '../../styles/theme';

export const Section = styled.section`
  padding: 0 2rem 2rem 2rem;
  background-color: rgba(15, 23, 42, 0.85);
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text.light};
  margin-bottom: ${spacing.lg};
  font-size: ${typography.fontSize.xl};
  border-bottom: 2px solid ${colors.accent};
  padding-bottom: ${spacing.sm};
`;

export const EducationItem = styled.div`
  margin-bottom: ${spacing.xl};
  padding: ${spacing.md};
  background-color: rgba(15, 23, 42, 0.95);
  border-radius: ${borderRadius.sm};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SchoolName = styled.h3`
  color: ${colors.text.light};
  margin-bottom: ${spacing.sm};
  font-size: ${typography.fontSize.lg};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const SchoolLink = styled.a`
  color: ${colors.text.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${colors.interactive.link};
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
  color: ${colors.text.light};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spacing.xs};
`;

export const Minor = styled.p`
  color: ${colors.text.light};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spacing.xs};
`;

export const DateRange = styled.p`
  color: ${colors.text.muted};
  font-size: ${typography.fontSize.xs};
  margin-bottom: ${spacing.sm};
`;

export const Description = styled.p`
  color: ${colors.text.light};
  font-size: ${typography.fontSize.sm};
  line-height: 1.5;
`;
