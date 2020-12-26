import { Component } from "react";
import getDisplayName from "_utils/getDisplayName";

const onHover = WrappedComponent =>
    class extends Component {
        static displayName = getDisplayName(WrappedComponent);

        state = {
            "isHover": false,
        }

        handleMouseEnter = () => {
            this.setState(() => ({ "isHover": true }));
        }
        
        handleMouseLeave = () => {
            this.setState(() => ({ "isHover": false }));
        }

        render() {
            return (
                <WrappedComponent 
                    isHover={this.state.isHover}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    {...this.props}
                />
            );
        }
    };

export default onHover;
