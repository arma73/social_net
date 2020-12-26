import { connect } from "react-redux";
import { setActiveTargetView } from "_store/actions";
import withMediaQueryListener from "_containers/hoc/withMediaQueryListener";
import Portal from "_containers/Portal";
import PresentProfile from "_containers/PresentProfile";
import Layout from "_components/layout";
import Box from "_components/box";
import ProfileBox from "_components/profile/box";
import ProfileDescription from "_components/profile/description";
import TargetView from "_components/targetview";

import photoPersonAvatar from "_assets/images/gallery/person_avatar.jpg";
import { layout, box, profileBox } from "./style.m.css";

// NOTE: components ➡ Posts [
//    PostsHead,
//    Grid[
//      FlexRow[FlexItem] ?? GridRow[GridItem]
//    ]
// ]


const SelfProfile = ({ breakpoint, setActiveTarget, target }) => (
    <Layout className={layout}>
        <Box
            className={`${box} ${profileBox}`}
        >
            <ProfileBox
                photoSrc={photoPersonAvatar}
                name="arma7398"
                postsCount={0}
                followersCount={0}
                id="profile--box__data"
            />
            <Portal
                id="profile--box__data"
                compare="great"
                display="mobileSm"
                size={breakpoint.size}
            >
                <ProfileDescription>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using &apos;Content here, content here&apos;.
                </ProfileDescription>
            </Portal>
        </Box>
        <Box className={box} style={{ "height": "35px" }}>
            <TargetView currentActive={target} onClick={setActiveTarget} />
        </Box>
        <Box className={box}>
            <PresentProfile />
        </Box>
    </Layout>
);

const mapDispatch = dispatch => ({
    "setActiveTarget": target => dispatch(setActiveTargetView(target)),
});

const mapState = ({ view }) => ({
    "target": view.target,
});

export default withMediaQueryListener(connect(mapState, mapDispatch)(SelfProfile));
