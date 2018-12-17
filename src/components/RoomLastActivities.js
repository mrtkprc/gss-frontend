import React, {Component} from 'react';
import { Card, Icon,List } from 'semantic-ui-react'
import ActionInRoomItem from "./ActionInRoomItem";
import {fetchSensorLocationStimuluses} from "../actions/surveils";
import {connect} from 'react-redux';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

class RoomLastActivities extends Component {

    state = {
        action_count:0,

    };

    getTodayActionCount()
    {
        let stimulation_count=0;
        _.forEach(this.props.sensor_location_stimuluses,(val,key) =>
        {
            if(val[0].sensor_location_id===this.props.roomID)
            {
                stimulation_count = Object.keys(val[0].sensor_stimulations).length;
            }
        })
        return stimulation_count.toString();
    }
    createActionInRoomItems()
    {
        let actions = [];
        let date;
        let id;
        let stimulation_count = 0;
        _.forEach(this.props.sensor_location_stimuluses,(val,key) => {
            if(val[0].sensor_location_id===this.props.roomID)
            {
                stimulation_count = Object.keys(val[0].sensor_stimulations).length;
                actions = [];
                for(let i = 0;i<5 && stimulation_count - 1 - i >= 0;i++)
                {
                    id= val[0]._id;

                    date= val[0].sensor_stimulations[stimulation_count - 1 - i];
                    actions.push(<ActionInRoomItem key={id.toString()+"-"+i.toString()} iconColor={"teal"} textValue={date}/>);
                }
            }
            else
            {
                if(actions.length===0)
                {
                    actions.push(<ActionInRoomItem key={uuidv4()} iconColor={"red"}/>);
                }
            }
        })
        return actions;
    }

    async componentDidMount()
    {

        await this.createActionInRoomItems();

    }
    async componentWillMount()
    {
        await this.props.fetchSensorLocationStimuluses({sensor_location_id:this.props.roomID});
        this.setState({roomID:this.props.roomID});
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({sensor_location_stimuluses:nextProps.sensor_location_stimuluses});
        this.forceUpdate();

    }


    render() {

        return (
            <Card>
                <Card.Content>
                    <Icon name={this.props.iconName} size='big' /> {this.props.roomName}
                </Card.Content>
                <Card.Content>
                    <List divided verticalAlign='middle'>
                        {
                            this.createActionInRoomItems()
                        }
                    </List>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='history' /> {this.getTodayActionCount()} actions today.
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users,
        sensor_locations:state.surveils.sensor_locations,
        sensor_location_stimuluses:state.surveils.sensor_location_stimuluses
    }
};
const mapDispatchToProps = {
    fetchSensorLocationStimuluses

};

export default  connect(mapStateToProps,mapDispatchToProps)(RoomLastActivities);
