import styled from '@emotion/styled';
import { colors, spacing, borderRadius, shadows, typography, breakpoints } from '../../styles/theme';

export const HeaderContainer = styled.header`
  text-align: center;
  padding: 1rem 0;
  background: none;
  color: white;
  position: relative;
`;

export const Name = styled.h1`
  font-size: ${typography.fontSize.xxl};
  margin: 0;
  color: ${colors.text.light};
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.lg};
  margin-top: ${spacing.md};
  flex-wrap: wrap;
  align-items: center;
`;

export const ContactItem = styled.a`
  color: ${colors.text.primary};
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
  right: ${spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.background.primary};
  color: ${colors.text.primary};
  width: 40px;
  height: 40px;
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
    transform: translateY(-50%) translateY(-2px);
    box-shadow: ${shadows.md};
    background: ${colors.background.secondary};
  }

  @media (max-width: ${breakpoints.md}) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: ${spacing.md};
    display: inline-flex;
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
