import { TextField } from "@mui/material";

import Check from "../assets/check.png";
import Truck from "../assets/truck.png";
import Location from "../assets/location.png";
import Gourde from "../assets/gourde-2.png";
import { Link } from "react-router-dom";
import React from "react";

const DelirevyMain = () => {
	const [ selected, setSelected ] = React.useState("truck");

	return (
		<div className="delivery-main">
			<div className="paid-rectangle"></div>
			<div className="triangle"></div>

			<div className="paid-infos">
				<span className="paid-links">Personnalise ta bouteille &#62; <b className="bold-text">Paiement</b></span>
			</div>

			<div className="paid-total">
				<div className="delivery-options">
					<span className="delivery-title">Options de livraison <img className="check" src={Check} alt="#" /></span>
					
					<div className="delivery-buttons">
						<button 
							onClick={() => setSelected("truck")}
							className={`ship-mode truck ${selected === "truck" ? "selected" : null }`}
						><img className="img-button-ship" src={Truck} alt="#" />Expédition
						</button>
						<button 
							onClick={() => setSelected("location")}
							className={`ship-mode location ${selected === "location" ? "selected" : null }`}
						><img className="img-button-ship" src={Location} alt="#" />Expédition
						</button>
					</div>

					<div className="delivery-form">
						<div className="delivery-name">
							<TextField id="outlined-basic" label="Prénom" variant="filled" />
							<TextField id="outlined-basic" label="Nom" variant="filled" />
						</div>

						<div className="delivery-adress">
							<TextField id="outlined-basic" label="Adresse (numéro et nom de la rue)" variant="filled" />
						</div>

						<div className="delivery-city">
							<TextField id="outlined-basic" label="Code postal" variant="filled" />
							<TextField id="outlined-basic" label="Ville" variant="filled" />
							<TextField id="outlined-basic" label="Pays" variant="filled" />
						</div>
						
						<div className="deliveryt-mail">
							<TextField id="outlined-basic" label="Email" variant="filled" />
							<TextField id="outlined-basic" label="Numéro de téléphone" variant="filled" />
						</div>
					</div>

					<div className="paid-button">
						<Link to="/product"><button className="cancel">Annuler</button></Link>
						<Link to="/paid"><button>Passer la commande</button></Link>
					</div>
				</div>

				<div className="delivery-cart">
					<span className="delivery-price-title margin">Dans votre panier</span>

					<div className="delivery-sub-price margin">
						<span>Sous-total</span>
						<span>19.99€</span>
					</div>

					<div className="delivery-sub-price margin">
						<span>Frais d'expédition</span>
						<span>0.00€</span>
					</div>

					<div className="delivery-price margin">
						<span>Total</span>
						<span>19.99€</span>
					</div>

					<div className="bottle-square">
						<img classname="bottle-cart" src={Gourde} alt="#" />
						<Link to="/product"><button className="button-update">Modifier</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
};

export default DelirevyMain;