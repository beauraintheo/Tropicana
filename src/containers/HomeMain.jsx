import { Link } from "react-router-dom";

import Juice from "../assets/juice.png";
import Waterbottle from "../assets/gourde.png";
import Waterbottle2 from "../assets/gourde-2.png";

const HomeMain = () => (
	<div className="home-main">
		<div className="rectangle"></div>
		<div className="triangle"></div>
		<img className="juice" src={Juice} alt="#" />
		<img className="waterbottle" src={Waterbottle} alt="#" />
		<img className="waterbottle2" src={Waterbottle2} alt="#" />
		<span className="test2"></span>
		<span className="test3"></span>

		<div className="home-title">
			<span className="home-span">Emmenez votre gourde Tropicana et <span className="home-span-bold">osez l'expérience</span></span>
			<Link to="product"><button className="home-button">Obtenir ma gourde personnalisée &rarr;</button></Link>
		</div>
	</div>
);

export default HomeMain;