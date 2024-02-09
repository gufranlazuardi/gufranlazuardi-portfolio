import ReactDOM from "react-dom/client";
import App from "./routes/index";
import "./styles/globals.css";
import { ThemeProvider } from "./context/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
