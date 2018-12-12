import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchLastStimuluses} from './../actions/geriatrics';

class LocationNotifierTop extends Component {

    state = {
        reload:false
    };

    componentDidUpdate() {
    }

    componentWillMount() {
        setTimeout(() => {
            this.props.fetchLastStimuluses(this.props.users.userAuth);
            this.setState(this.state);
        },1000);
    }

    componentDidMount() {
    }

    render() {
        if(this.props.geriatrics.last_stimulus != null && Object.keys(this.props.geriatrics.last_stimulus).length > 0)
        {
            const last_stimulus = this.props.geriatrics.last_stimulus[0];
            let time_val = JSON.stringify(last_stimulus.last_stimulation).split(" ")[1].slice(0,5);
            time_val  = `(${time_val})`;
            let location_val = JSON.stringify(last_stimulus.sensor_location_name);
            location_val = location_val.replace("\"","");
            location_val = location_val.replace("\"","")+" ";

            return (
                <div>{location_val}{time_val}</div>
            );
        }
        else if(this.props.geriatrics.last_stimulus != null && Object.keys(this.props.geriatrics.last_stimulus).length === 0)
        {
            return (
                <div>No Stimulus</div>
            );
        }
        return (
            <div>Loading</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users
    }
}
const mapDispatchToProps = {
    fetchLastStimuluses
};
export default connect(mapStateToProps,mapDispatchToProps)(LocationNotifierTop);

//&nbsp; <Image style={{paddingLeft: '5px'}} src={process.env.PUBLIC_URL + '/refresh.png'}/>
//JSON.stringify(this.props.geriatrics.last_stimulus[0].last_stimulation).split(" ")[1].trim(-1)
