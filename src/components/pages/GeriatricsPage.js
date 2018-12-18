import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLastStimuluses} from '../../actions/geriatrics';
import {Tab} from 'semantic-ui-react';
import GeriatricInformation from '../GeriatricInformation';
import RelativeInformation from '../RelativeInformation';
//import SensorsInformation from '../SensorsInformation'; //ileride belki kullanbilirim aşağıda da yorum satırı yaptım
class GeriatricsPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const panes = [
            { menuItem: 'Geriatric Information', render: () => <Tab.Pane><GeriatricInformation/></Tab.Pane> },
            { menuItem: 'Relative Information', render: () => <Tab.Pane><RelativeInformation/> </Tab.Pane> },
            { /*menuItem: 'Sensors Information', render: () => <Tab.Pane><SensorsInformation/></Tab.Pane> */},
        ]
        return (
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users
    }
};
const mapDispatchToProps = {
    fetchLastStimuluses
};
export default connect(mapStateToProps,mapDispatchToProps)(GeriatricsPage);