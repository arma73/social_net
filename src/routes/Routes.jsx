import { Route, Switch, useLocation } from "react-router-dom";
import Main from "_pages/public/main";
import SelfProfile from "_pages/public/selfprofile";
import PickRoute from "./PickRoute";
import ScrollToTop from "_containers/ScrollToTop";
import { MAIN_PAGE_ROUTE, SELF_PAGE_ROUTE } from "_settings/routes";

const Routes = () => {
    const location = useLocation();
    const from = location.state?.from;

    return (
        <>
            <Switch location={from || location}> 
                <Route exact path={MAIN_PAGE_ROUTE} component={Main} />
                <Route exact path={SELF_PAGE_ROUTE} component={SelfProfile} />
            </Switch>
            <ScrollToTop>
                <PickRoute from={from} />
            </ScrollToTop>
        </>
    );
};

export default Routes;
