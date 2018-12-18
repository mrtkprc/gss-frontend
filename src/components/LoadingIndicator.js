import {Dimmer, Loader} from "semantic-ui-react";
import React from "react";

export default () => {
    return(<Dimmer active><Loader inverted size='medium'>Loading</Loader></Dimmer>);
}


