import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import Routes from "_routes/Routes";

import "normalize.css";
import "_theme/main.css";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
);

export default hot(App);
