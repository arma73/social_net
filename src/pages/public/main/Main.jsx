import { useHistory } from "react-router-dom";
import Box from "_components/box";
import Layout from "_components/layout";
import Img from "_components/img";
import Button from "_components/form/button";

import photoBgImage from "_assets/images/bg/axel_bg.jpg";
import { layout, box, button, bgImage } from "./style.m.css";

const Main = () => {
    const history = useHistory();
    const handleRoute = () => history.push("/self");

    return (
        <Layout view={{ "center": true }} className={layout}>
            <Box view={{ "size": "full", "center": true }} className={box}>
                <Img
                    src={photoBgImage}
                    component="div"
                    className={bgImage}
                />
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
