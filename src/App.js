import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import * as ROUTES from "./constants/routes";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
