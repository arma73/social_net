import Layout from "_components/layout";
import { layout } from "./style.m.css";

// NOTE: components ➡ ProfileHead [
//    ProfileAvatar, 
//    ProfileData[
//        ProfileName, 
//        ProfilePresent[Followers], 
//        ProfileDescription
//    ]
// ]

// NOTE: components ➡ Posts [
//    PostsHead,    
//    Grid[
//      FlexRow[FlexItem] ?? GridRow[GridItem]
//    ]
// ]

const Gallery = () => (
    <Layout className={layout}>
        Gallery
    </Layout>
);

export default Gallery;
