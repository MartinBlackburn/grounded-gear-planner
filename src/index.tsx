// libraries
import React from "react";
import ReactDOM from "react-dom/client";

// components
import Doll from "./components/doll";
import Effects from "./components/effects";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Doll />
        <Effects />
    </React.StrictMode>
);
