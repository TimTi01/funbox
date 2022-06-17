import './App.scss';
import { Card } from './Components/Card/Card';
import { Container } from './Components/Container/Container';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Section/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Container>
          <Card/>
          <Card/>
          <Card/>
        </Container>
      </Main>
    </div>
  );
}

export default App;
