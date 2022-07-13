import { Link } from "react-router-dom";

import Juice from "../assets/juice-2.png";
import Check from "../assets/check.png";
import WaterBottle from "../assets/gourde.png";

const PaidMain = () => (
	<div className="paid-main">
		<div className="paid-rectangle"></div>
		<div className="triangle"></div>
		<img className="juice-other" src={Juice} alt="#" />
		<img className="waterbottle-other" src={WaterBottle} alt="#" />

		<div className="paid-infos">
			<span className="paid-links">Personnalise ta bouteille &#62; Paiement &#62; Achat validé</span>
			<span className="validate-buy">Votre achat a bien été validé <img className="check" src={Check} alt="#" /></span>
			<span className="validate-mail">Vous allez recevoir un mail à l'adresse mail suivante <i>machintruc@gmail.com</i></span>
			<span className="others">Vous n'avez pas reçu de mail ? <span className="others-link">Renvoyer un mail</span> ou <span className="others-link">Changer d'adresse mail</span></span>
			<Link to="/" className="home-btn"><button>Retour à l'écran d'accueil &rarr;</button></Link>
		</div>
	</div>
);

export default PaidMain;