import { createPortal } from "react-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import Pick from "_pages/public/pick";
import ViewPick from "_components/viewpick";
import { setLocationStateFrom } from "_store/actions";
import { PICK_PHOTO_RELATIVE_ROUTE, PICK_PHOTO_PAGE_RELATIVE_ROUTE, SELF_PAGE_ROUTE } from "_settings/routes";
import { replaceLocationState } from "_utils/replace";

const PickRoute = ({ from, stateFrom, setState }) => {
    const history = useHistory(); 

    useEffect(() => {
        if (from) setState(from);

        if (!stateFrom && from) {
            replaceLocationState(history, "from");
            setState(null);
        }
    }, [history]);

    if (from && from?.pathname === SELF_PAGE_ROUTE) {
        document.body.style.overflow = "hidden";

        return createPortal(
            <Route exact path={PICK_PHOTO_RELATIVE_ROUTE}>
                <ViewPick />
            </Route>,
            document.body
        );
    }

    return (
        <Route exact path={PICK_PHOTO_PAGE_RELATIVE_ROUTE}>
            <Pick />
        </Route>
    );
};

const mapState = ({ history }) => ({
    "stateFrom": history.from,
});

const mapDispatch = dispatch => ({
    "setState": location => dispatch(setLocationStateFrom(location)),
});

export default connect(mapState, mapDispatch)(PickRoute);
