import { connect } from "react-redux";
import Glance from "_components/glance";
import { imagesGallery } from "_settings/mocks/postsGallery";

const PresentProfile = ({ target }) => (
    <Glance
        view={target}
        content={imagesGallery}
    />
);

const mapState = ({ view }) => ({
    "target": view.target,
});

export default connect(mapState)(PresentProfile);
