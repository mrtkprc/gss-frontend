import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchSensorLocations} from "../actions/surveils";
import LoadingIndicator from "./LoadingIndicator";

class SensorsInformation extends Component {
    state = {
        sensor_locations: undefined
    };

    componentDidMount() {
        console.log("cdm");
        console.log("State:",this.state);

    }


    componentWillMount() {
        console.log("cwm");
        this.props.fetchSensorLocations(this.props.users.userAuth);
        this.setState({sensor_locations:this.props.surveils.sensor_locations});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({sensor_locations:nextProps.surveils.sensor_locations});

        console.log("cwrp",nextProps.surveils.sensor_locations);
        console.log("state in cwrp",this.state);
    }

    createSensorLocations(){
        if(this.state.sensor_locations !== undefined)
            return (<div>Mert</div>);
        else
            return(<LoadingIndicator/>);

    }


    render() {
        return (
            <div>{
                this.createSensorLocations()
            }</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users:state.users,
        geriatrics:state.geriatrics,
        surveils:state.surveils
    }
};
const mapDispatchToProps = {
    fetchSensorLocations
};

export default connect(mapStateToProps,mapDispatchToProps)(SensorsInformation);
