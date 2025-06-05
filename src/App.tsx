import styled from '@emotion/styled';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Experience />
        <Education />
        <Skills />
      </MainContent>
    </AppContainer>
  );
}

export default App;
