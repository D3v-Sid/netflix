import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.BROWSE} element={<Browse />} />
				<Route path={ROUTES.SIGN_IN} element={<SignIn />} />
				<Route path={ROUTES.SIGN_UP} element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}
