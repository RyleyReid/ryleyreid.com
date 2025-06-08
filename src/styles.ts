import styled from '@emotion/styled';
import { colors, typography, spacing } from './styles/theme';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.background.primary};
  font-family: ${typography.fontFamily};
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.md};
`;
