import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "@pages/App";
import Projects from "@pages/Projects";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/portofolio">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
