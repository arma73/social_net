import { createPortal } from "react-dom";
import { Component } from "react";
import { breakpointIsLessThan, breakpointIsGreaterThan } from "_utils/responsiveHelpers";

class Portal extends Component {
    state = {
        "domNode": null,
    }

    componentDidMount() {
        const domNode = document.getElementById(this.props.id);
        this.setState(() => ({ domNode }));
    }

    render() {
        const { children, compare, size, display } = this.props;
        if (!this.state.domNode) return children;

        const isMounted = compare === "less" 
            ? breakpointIsLessThan(display, size)
            : breakpointIsGreaterThan(display, size);
            
        return isMounted ? createPortal(children, this.state.domNode) : children;
    }
}

export default Portal;
