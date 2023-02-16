import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { StateProvider } from "./Context/StateProvider.js";
import { initialState } from "./Context/initialState.js";
import reducer from "./Context/reducer.js";



ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App />
            </StateProvider>
        </BrowserRouter>
    )