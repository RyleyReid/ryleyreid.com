import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import TrueSyntax from './components/TrueSyntax';
import Background3D from './components/Background3D';
import styled from '@emotion/styled';
import { spacing } from './styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: transparent;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.md} ${spacing.xl};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xl};
`;

function App() {
  return (
    <AppContainer>
      <Background3D />
      <ContentContainer>
        <Header />
        <TrueSyntax />
        <Experience />
        <Education />
        <Skills />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
