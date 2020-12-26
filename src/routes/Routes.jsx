import { Route, Switch } from "react-router-dom";
import { mapRoutes } from "./mapRoutes";

const Routes = () => {
    const maps = [
        ...mapRoutes.map(({ 
            exact, 
            path, 
            component, 
            data
        }) => (
            <Route 
                exact={exact} 
                path={path} 
                component={component} 
                key={path} 
                data-name={data?.title} 
            />
        ))
    ];

    return (
        <Switch> 
            {maps}
        </Switch>
    );
};

export default Routes;
