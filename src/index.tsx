// libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// components
import Doll from "./components/doll";
import Effects from "./components/effects";
import Selector from "./components/selector";

// state
import { store } from "./state/store";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="layout">
                <Doll />
                <Effects />
            </div>

            <Selector />
        </Provider>
    </React.StrictMode>
);
