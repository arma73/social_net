// Core
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";

// Routes
import Routes from "_routes/Routes";

// Styles
import "normalize.css";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
);

export default hot(App);
