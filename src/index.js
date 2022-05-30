import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { GlobalStyles } from "./global-style";
import { firebase } from "./lib/firebase.prod";
import { createContext } from "react";
export const FirebaseContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>
);
