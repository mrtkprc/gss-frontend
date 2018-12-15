import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLastStimuluses} from '../../actions/geriatrics';
import {Tab} from 'semantic-ui-react';
import GeriatricInformation from '../GeriatricInformation';
class GeriatricsPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const panes = [
            { menuItem: 'Geriatric Information', render: () => <Tab.Pane><GeriatricInformation/></Tab.Pane> },
            { menuItem: 'Relative Information', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Sensors Information', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
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