import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Background3D from './components/Background3D';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  min-height: 100vh;
  background: transparent;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <AppContainer>
      <Background3D />
      <ContentContainer>
        <Header />
        <Experience />
        <Education />
        <Skills />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
