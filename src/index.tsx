import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);
