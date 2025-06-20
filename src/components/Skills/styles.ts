import styled from '@emotion/styled';
import { colors, spacing, borderRadius, typography } from '../../styles/theme';

export const Section = styled.section`
  margin: 0 ${spacing.xl};
  padding: ${spacing.sm};
  background-color: ${colors.background.primary};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing.xl};
`;

export const SectionTitle = styled.h2`
  color: ${colors.text.secondary};
  border-bottom: 2px solid ${colors.text.primary};
  padding-bottom: ${spacing.sm};
  margin-bottom: ${spacing.lg};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md};
`;

export const SkillTag = styled.span`
  background: ${colors.primary};
  color: ${colors.text.light};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.fontSize.xs};
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: ${colors.interactive.hover};
    cursor: pointer;
  }
`;
