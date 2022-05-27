import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./app";
import { GlobalStyles } from "./global-style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	</>
);
