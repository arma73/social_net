import { hot } from "react-hot-loader/root";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "_routes/Routes";
import store from "_store";

import "normalize.css";
import "_theme/main.css";

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

export default hot(App);
