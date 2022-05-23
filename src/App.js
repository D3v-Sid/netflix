import { Jumbotron, Footer } from "./components";
import jumboData from "./fixtures/jumbo.json";

export function App() {
	return (
		<div className="App">
			<Jumbotron.Container>
				{jumboData.map(item => (
					<Jumbotron key={item.id} direction={item.direction}>
						<Jumbotron.Pane>
							<Jumbotron.Title>{item.title} </Jumbotron.Title>
							<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Pane>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron>
				))}
			</Jumbotron.Container>
			<Footer>
				<Footer.Row>
					<Footer.Column>
						<Footer.Link href="#">FAQ</Footer.Link>
						<Footer.Link href="#">Relations Investisseurs</Footer.Link>
						<Footer.Link href="#">Modes de lecture</Footer.Link>
						<Footer.Link href="#">Mentions légales</Footer.Link>
						<Footer.Link href="#">Seulement sur Netflix</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href="#">Centre d'aide</Footer.Link>
						<Footer.Link href="#">Recrutement</Footer.Link>
						<Footer.Link href="#">Conditions d'utilisation</Footer.Link>
						<Footer.Link href="#">Nous contacter</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href="#">Compte</Footer.Link>
						<Footer.Link href="#">Utiliser des cartes cadeaux</Footer.Link>
						<Footer.Link href="#">Confidentialité</Footer.Link>
						<Footer.Link href="#">Test de vitesse</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Link href="#">Presse</Footer.Link>
						<Footer.Link href="#">Acheter des cartes cadeaux</Footer.Link>
						<Footer.Link href="#">Préférences de cookies</Footer.Link>
						<Footer.Link href="#">Informations légales</Footer.Link>
					</Footer.Column>
				</Footer.Row>
			</Footer>
		</div>
	);
}
