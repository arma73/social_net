import { Component } from "react";
import { connect } from "react-redux";
import { setActiveBreakpoint } from "_store/actions";
import { breakpoints } from "_settings/breakpoints";
import getDisplayName from "_utils/getDisplayName";

const mapState = ({ breakpoint }) => ({
    breakpoint,
});

const withMediaQueryListener = WrappedComponent => connect(mapState)(
    /**
     * This component will house the event handler for your changing breakpoints, 
     * and will also communicate with your store to report the active breakpoints on 
     * initial mount as well as updating the store with the new breakpoint value as 
     * the window is resized.
     */
    class extends Component {
        static displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
        // initialize an empty array for collecting the current
        // state of our media queries. This will be pushed into the store.
        mediaQueryState = [];

        // create the event handler inside componentDidMount
        componentDidMount() {
            /**
             * Create the function that will run each time the breakpoint is changed.
             */
            const breakpointChange = () => this.dispatchActiveQuery();

            // loop over our breakpoints object to create a media query
            // instance for each of our breakpoints
            Object.keys(breakpoints).forEach(key => {
                // create a new media query object using the window.matchMedia api.
                const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`);

                // add the breakpoint value to the media query object
                query.breakpoint = breakpoints[key];
                // add the name
                query.name = key;

                // Attach the even listener to the query
                try {
                    // Chrome & Firefox
                    query.addEventListener("change", breakpointChange.bind(this));
                } catch (error) {
                    try {
                        // Safari
                        query.addListener(breakpointChange.bind(this));
                    } catch (error) {
                        console.error(error);
                    }
                }

                // push this query to our mediaQueryState array, after the loops has run its 
                // course, we will have an array that houses a mediaQuery object for each
                // breakpoint in our breakpoints object.
                this.mediaQueryState.push(query);
            });

            // run the function once on componentDidMount to
            // record the initial breakpoint state of our viewport
            this.dispatchActiveQuery();
        }

        /**
         * Create the function that will prepare our breakpoint object for dispatch.
         */
        dispatchActiveQuery() {
            const { dispatch } = this.props;

            // Assuming a desktop first responsive system, the active
            // breakpoint will always be the smallest one that satisfies
            // the media query. We use reduce to travel down the matched media queries
            // and return the smallest item that matches. In the event no breakpoints
            // match (such as when the viewport is larger than our largest breakpoint),
            // we return null
            const activeQuery = this.mediaQueryState.reduce((prev, curr) =>
                curr.matches ? curr : prev && prev.matches ? prev : null
            );

            // In the event null was returned by activeQuery, we substitute 'default',
            // which will be the active breakpoint when no other breakpoint is matched
            const breakpointName = activeQuery ? activeQuery.name : "default";

            // We will also record the numerical value for the matched breakpoint as breakpointSize
            const breakpointSize = activeQuery && activeQuery.breakpoint;

            // Now dispatch both values using the setActiveBreakpoint action
            dispatch(setActiveBreakpoint(breakpointName, breakpointSize));
        }

        render() {
            return <WrappedComponent breakpoint={this.props.breakpoint} />;
        }
    }
);

export default withMediaQueryListener;
