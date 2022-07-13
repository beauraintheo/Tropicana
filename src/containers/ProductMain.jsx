import React from "react";

import SideMenu from "../components/SideMenu";
import Specs from "../components/Specs";

import Waterbottle from "../assets/gourde1.png";

const Main = () => {
	const [ waterBottle, setWaterBottle ] = React.useState({ price: 10 });
	
	React.useEffect(() => console.log('waterBottle: ', waterBottle), [ waterBottle ]);

	return (
		<div className="product-main">
			<Specs waterBottle={waterBottle} setWaterBottle={setWaterBottle} />
			<img className="waterbottle-product" src={Waterbottle} alt="#" />
			<SideMenu waterBottle={waterBottle} setWaterBottle={setWaterBottle} />
		</div>
)};

export default Main;