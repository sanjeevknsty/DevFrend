import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/CreateTheme.jsx";

const container = document.getElementById("root");
let root = container._reactRoot || createRoot(container);
container._reactRoot = root; // Store the root instance

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
