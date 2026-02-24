import styled from '@emotion/styled';
import { colors, spacing, borderRadius, shadows, typography, breakpoints } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
  color: ${colors.text.light};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  background: rgba(15, 23, 42, 0.85);
  box-shadow: ${shadows.md};
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.md};
  }
`;

export const Name = styled.h1`
  font-size: ${typography.fontSize.xxl};
  margin: 0;
  color: ${colors.text.light};
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing.lg};
  margin-top: ${spacing.sm};
  flex-wrap: wrap;
  align-items: center;
`;

export const ContactItem = styled.a`
  color: ${colors.text.light};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: all 0.2s;

  &:hover {
    color: ${colors.text.light};
    transform: translateY(-2px);
  }
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const TextContact = styled.span`
  color: ${colors.text.light};
  font-size: ${typography.fontSize.xs};
`;

export const DownloadButton = styled.a`
  position: absolute;
  top: ${spacing.lg};
  right: ${spacing.lg};
  width: 42px;
  height: 42px;
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  border-radius: ${borderRadius.full};
  text-decoration: none;
  font-weight: ${typography.fontWeight.semibold};
  transition: all 0.2s;
  box-shadow: ${shadows.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    box-shadow: ${shadows.md};
    background: ${colors.background.secondary};
    transform: translateY(-1px);
  }
`;

export const DownloadIcon = styled(SocialIcon)`
  width: 24px;
  height: 24px;
  margin: 0;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;
