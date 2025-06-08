import styled from '@emotion/styled';
import { colors, spacing, borderRadius, shadows } from '../../styles/theme';

export const Section = styled.section`
  padding: ${spacing.xl} ${spacing.xl} 0 ${spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  border-radius: ${borderRadius.md} ${borderRadius.md} 0px 0px;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text.light};
  border-bottom: 2px solid ${colors.text.light};
  padding-bottom: ${spacing.sm};
  margin-bottom: ${spacing.lg};
`;

export const JobItem = styled.div`
  margin-bottom: ${spacing.xl};
  padding: ${spacing.md};
  background: ${colors.background.primary};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.sm};
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${spacing.sm};
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const CompanyName = styled.h3`
  margin: 0;
  color: ${colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const CompanyLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;

  &:hover {
    color: ${colors.text.muted};

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
  margin: ${spacing.sm} 0;
  color: ${colors.text.secondary};
`;

export const Location = styled.span`
  color: ${colors.text.muted};
`;

export const DateRange = styled.span`
  color: ${colors.text.muted};
  font-style: italic;
`;

export const Description = styled.ul`
  margin: ${spacing.sm} 0;
  padding-left: ${spacing.lg};
  color: ${colors.text.secondary};
`;

export const DescriptionItem = styled.li`
  margin: ${spacing.sm} 0;
  line-height: 1.5;
`;