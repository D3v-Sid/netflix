import { Jumbotron } from "./components";
import jumboData from "./fixtures/jumbo.json";

export function App() {
	return (
		<div className="App">
			<Jumbotron.Container>
				{jumboData.map(item => (
					<Jumbotron key={item.id} direction={item.direction}>
						<h2>{item.title} </h2>
						<h3>{item.subTitle}</h3>
						<img src={item.image} alt={item.alt} width="300px" height="300px" />
					</Jumbotron>
				))}
			</Jumbotron.Container>
		</div>
	);
}
