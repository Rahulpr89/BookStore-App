import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <div className=" dark:bg-slate-900 dark:text-white">
    <App />
    </div>
    </BrowserRouter>
    
);
