import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from './pages/Product';
import Delivery from './pages/Deliverey';
import Paid from './pages/Paid';

import "./styles/style.css";
import './App.css';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/paid" element={<Paid />} />
			</Routes>
		</div>
	)
}

export default App;
