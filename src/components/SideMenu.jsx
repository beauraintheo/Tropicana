import ArrowUp from "../assets/arrow-up.png";
import ArrowDown from "../assets/arrow-down.png";
import Design1 from "../assets/design-1.png";
import Design2 from "../assets/design-2.png";
import Design3 from "../assets/design-3.png";
import Design4 from "../assets/design-4.png";
import React from "react";

const SideMenu = ({ waterBottle, setWaterBottle }) => {
	const [ orderList, setOrderList ] = React.useState([ Design1, Design2, Design3, Design4 ]);
	const [ selectedBottle, setSelectedBottle ] = React.useState(Design1);

	React.useEffect(() => setWaterBottle({ ...waterBottle, bottle: Design1 }), []);

	const slideUp = () => {
		const newOrderList = orderList;
		newOrderList.push(orderList.shift());
		setOrderList([ ...newOrderList ]);
	}

	const slideDown = () => {
		const newOrderList = orderList;
		newOrderList.unshift(orderList.pop());
		setOrderList([ ...newOrderList ]);
	}

	return (
		<div className="side-menu">
			<span onClick={slideUp} className="choice arrow up"><img src={ArrowUp} alt="#" /></span>

			{ 
				orderList.map((image, index) => <img 
					key={index} 
					onClick={() => setSelectedBottle(image)} 
					className={`choice ${selectedBottle === image ? "selected" : null }`} 
					src={image} 
					alt="#" 
				/>
			)}
			
			<span onClick={slideDown} className="choice arrow down"><img src={ArrowDown} alt="#" /></span>
		</div>
	)
};

export default SideMenu;