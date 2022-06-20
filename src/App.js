import './App.scss';
import { Card } from './Components/Card/Card';
import { Container } from './Components/Container/Container';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Section/Main';
import  data  from './Data/data.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Container>
          {data.cards.map((card) => (
            <Card key={card.id}
                  subtitle={card.subtitle}
                  subtitleHover={card.subtitleHover}
                  title={card.title}
                  taste={card.taste}
                  list={card.list}
                  circleNum={card.circleNum}
                  buttomText={card.buttomText}
                  cardDisabled={card.disabled}
            />
          ))}
        </Container>
      </Main>
    </div>
  );
}

export default App;
