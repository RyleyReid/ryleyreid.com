import styled from '@emotion/styled';
import { colors, spacing, borderRadius, shadows, typography, breakpoints } from '../../styles/theme';

export const TrueSyntaxSection = styled.section`
  max-width: 1200px;
  margin: 0 auto ${spacing.xl};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  background: rgba(15, 23, 42, 0.85);
  box-shadow: ${shadows.md};
  color: ${colors.text.light};
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.3fr);
  gap: ${spacing.xl};
  align-items: center;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${spacing.md};
  }
`;

export const TrueSyntaxMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const TrueSyntaxBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.18);
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.light};
`;

export const TrueSyntaxTitle = styled.h2`
  font-size: ${typography.fontSize.xl};
  margin: 0;
`;

export const TrueSyntaxSubTitle = styled.p`
  margin: 0;
  color: ${colors.text.muted};
  font-size: ${typography.fontSize.sm};
`;

export const TrueSyntaxHighlights = styled.ul`
  margin: ${spacing.md} 0 0;
  padding-left: ${spacing.lg};
  color: ${colors.text.light};
  font-size: ${typography.fontSize.sm};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const TrueSyntaxHighlight = styled.li``;

export const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    text-align: center;
  }
`;

export const AvatarWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 32px;
  overflow: hidden;
  border: 2px solid rgba(248, 249, 250, 0.8);
  box-shadow: ${shadows.md};

  @media (max-width: ${breakpoints.md}) {
    width: 128px;
    height: 128px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroText = styled.div`
  text-align: center;
`;

export const HeroTitle = styled.h3`
  margin: 0 0 ${spacing.xs};
  font-size: ${typography.fontSize.lg};
`;

export const HeroTagline = styled.p`
  margin: 0;
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.muted};
`;

