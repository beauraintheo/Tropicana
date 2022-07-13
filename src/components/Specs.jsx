import { TextField } from "@mui/material";
import React from "react";

import Price from "./Price";

const Specs = ({ waterBottle, setWaterBottle }) => {
	const [ name, setName ] = React.useState("");
	const [ sizeButton, setSizeButton ] = React.useState("small");
	const [ color, setColor ] = React.useState("Orange");
	const [ motif, setMotif ] = React.useState(1);

	React.useEffect(() => setWaterBottle({ ...waterBottle, name, size: sizeButton, color, motif }), [])

	return (
		<div className="specs-container">
			<div className="specs-white"></div>

			<div className="specs-background">
				<div className="specs">
					<div className="specs-title">
						<h3>Tropicana</h3>
						<h2>Gourde personnalisée</h2>
					</div>

					<div className="specs-name">
						<h3>Ton prénom</h3>
						<TextField onChange={(e) => { setName(e.target.value); setWaterBottle({ ...waterBottle, name }) } } className="specs-input" label="Entrez votre nom" variant="standard"	/>
					</div>

					<div className="specs-size">
						<h3>Taille</h3>
						
						<div className="specs-buttons">
							<button 
								onClick={() => { setSizeButton("small"); setWaterBottle({ ...waterBottle, size: sizeButton })}} 
								className={`specs-button ${sizeButton === "small" ? "selected" : null }`}>
							Petit</button>
							<button 
								onClick={() => { setSizeButton("medium"); setWaterBottle({ ...waterBottle, size: sizeButton }) }} 
								className={`specs-button ${sizeButton === "medium" ? "selected" : null }`}
							>Moyen</button>
							<button 
								onClick={() => { setSizeButton("large"); setWaterBottle({ ...waterBottle, size: sizeButton })}} 
								className={`specs-button ${sizeButton === "large" ? "selected" : null }`}
							>Grand</button>
						</div>
					</div>

					<div className="specs-color">
						<h3>Couleur <span className="specs-color-select">{color}</span></h3>
						
						<div className="specs-colors">
							<label 
								onClick={() => { setColor("Orange"); setWaterBottle({ ...waterBottle, color }) }} 
								className={`specs-color-button orange ${color === "Orange" ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setColor("Vert"); setWaterBottle({ ...waterBottle, color }) }} 
								className={`specs-color-button green ${color === "Vert" ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setColor("Jaune"); setWaterBottle({ ...waterBottle, color }) }} 
								className={`specs-color-button yellow ${color === "Jaune" ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setColor("Rouge"); setWaterBottle({ ...waterBottle, color }) }} 
								className={`specs-color-button red ${color === "Rouge" ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setColor("Bleu"); setWaterBottle({ ...waterBottle, color }) }} 
								className={`specs-color-button blue ${color === "Bleu" ? "selected" : null}`}
							></label>
						</div>
					</div>

					<div className="specs-motif">
						<h3>Motifs</h3>

						<div className="specs-motifs">
							<label 
								onClick={() => { setMotif(1); setWaterBottle({ ...waterBottle, motif }) }} 
								className={`specs-motif-button ${motif === 1 ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setMotif(2); setWaterBottle({ ...waterBottle, motif }) }} 
								className={`specs-motif-button ${motif === 2 ? "selected" : null}`}
							></label>
							<label 
								onClick={() => { setMotif(3); setWaterBottle({ ...waterBottle, motif }) }} 
								className={`specs-motif-button ${motif === 3 ? "selected" : null}`}
							></label>
						</div>
					</div>
				</div>
				
				<Price price={waterBottle.price} buttonText="Ajouter au panier" />
			</div>
		</div>
	)
};

export default Specs;