import { connect } from "react-redux";
import Posts from "_components/posts";
import Grid from "_components/grid";
import { imagesGallery } from "_settings/mocks/postsGallery";

const PresentProfile = ({ target }) => (
    <Posts>
        <Grid
            view={target}
            content={imagesGallery}
        />
    </Posts>
);

const mapState = ({ view }) => ({
    "target": view.target,
});

export default connect(mapState)(PresentProfile);
