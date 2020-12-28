import { useHistory } from "react-router-dom";
import { SELF_PAGE_ROUTE } from "_settings/routes";
import Box from "_components/box";
import Layout from "_components/layout";
import Button from "_components/form/button";

import { layout, box, button } from "./style.m.css";

const Main = () => {
    const history = useHistory();
    const handleRoute = () => history.push(SELF_PAGE_ROUTE);

    return (
        <Layout view={{ "center": true }} className={layout}>
            <Box view={{ "size": "full", "center": true }} className={box}>
                <Button
                    style={{ "position": "absolute" }}
                    onClick={handleRoute}
                    className={button}
                >
                    Self page
                </Button>
            </Box>
        </Layout>
    );
};

export default Main;
