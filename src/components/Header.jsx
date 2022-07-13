import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import LangFR from "../assets/lang-fr.png";
import LangEN from "../assets/lang-en.png";
import ShoppingCart from "../assets/shopping-cart.png";

const Header = () => {
	const [ lang, setLang ] = React.useState({ icon: LangFR, label: "FR" });
	const changeLang = () => lang.icon === LangFR
		? setLang({ icon: LangEN, label: "EN" })
		: setLang({ icon: LangFR, label: "FR" })

	return (
		<div className="header">
			<Link className="logo" to="/"><img src={Logo} alt="#" /></Link>
			
			<ul className="nav-list">
				<li>Nos jus</li>
				<li>La Marque</li>
				<li>Notre qualité</li>
				<li>Nos engagements</li>
				<li className="special-link"><Link to="/product">Gourde personnalisée</Link></li>
			</ul>

			<div className="button-lang" onClick={changeLang}>
				<img className="icon-lang" src={lang.icon} alt="#" />
				<span>{lang.label}</span>
			</div>

			<img className="icon-shop" src={ShoppingCart} alt="#" />
		</div>
	);
};

export default Header;