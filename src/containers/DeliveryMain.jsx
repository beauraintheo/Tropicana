import { TextField } from "@mui/material";

import Check from "../assets/check.png";
import Truck from "../assets/truck.png";
import Location from "../assets/location.png";

const DelirevyMain = () => (
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
					<button className="ship-mode truck"><img className="img-button-ship" src={Truck} alt="#" />Expédition</button>
					<button className="ship-mode location"><img className="img-button-ship" src={Location} alt="#" />Expédition</button>
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
			</div>

			<div className="delivery-cart">
				
			</div>
		</div>
	</div>
)

export default DelirevyMain;