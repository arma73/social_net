import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "_components/layout";
import Img from "_components/img";
import Box from "_components/box";
import getFromId from "_utils/getFromId";
import { imagesGallery } from "_settings/mocks/postsGallery";

import { pickLayout, box } from "./style.m.css";

const Pick = () => {
    const { id } = useParams();

    useEffect(() => {
        document.documentElement.style.scroll = "auto";
    }, []);

    const pick = getFromId(id, imagesGallery);

    return (
        <Layout className={pickLayout}>
            <Box className={box}>
                <Img src={`/public/assets/images/gallery/${pick.fileName}`} />
            </Box>
        </Layout>
    );
};

export default Pick;
