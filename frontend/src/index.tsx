import React from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "contexts/UserContext";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <>
    <UserProvider>
        <App />
    </UserProvider>
    </>
);
