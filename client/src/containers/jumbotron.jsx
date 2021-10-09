// import Jumbotron from '../components/jumbotrons';
import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo';

function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {
                jumboData.map((item, index) => (
                    <Jumbotron key={index} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))
            }
        </Jumbotron.Container>
    );
}

export default JumbotronContainer;
