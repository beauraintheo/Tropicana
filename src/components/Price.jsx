import { Link } from "react-router-dom";

const Price = ({ price, buttonText }) => (
	<div className="price-container">
		<span className="price">{ `${price.toFixed(2)}€` }</span>
		<Link to="/delivery"><button className="pay-button" disabled={ price === 0 ? "disabled" : null}>Payer</button></Link>
		<button className="price-button">{buttonText}</button>
	</div>
);

export default Price;