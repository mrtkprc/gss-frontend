import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLastStimuluses} from '../../actions/geriatrics';

class GeriatricsPage extends Component {
    componentDidMount() {
        this.props.fetchLastStimuluses('token');

    }

    render() {

        //const stimuluses =  this.props.geriatrics.last_stimulus;
        /*
        try {
            stimuluses.map(x => console.log(x.sensor_location_id))
        }
        catch(err) {
            console.log(err);
        }
        */
        return (
            <div>
                <h2>Geriatrics Page</h2>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics
    }
};
const mapDispatchToProps = {
    fetchLastStimuluses
};
export default connect(mapStateToProps,mapDispatchToProps)(GeriatricsPage);