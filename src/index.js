import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import 'tw-elements';
import 'flowbite';

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )