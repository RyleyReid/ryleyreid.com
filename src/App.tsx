import Experience from './components/Experience';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import { AppContainer, MainContent } from './styles';

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
