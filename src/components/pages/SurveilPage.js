import React, {Component} from 'react';
import { Grid} from 'semantic-ui-react';
import FeedRight from './../FeedRight';
import RoomLastActivities from './../RoomLastActivities';
import {fetchSensorLocations} from "../../actions/surveils";
import {connect} from 'react-redux';
import _ from 'lodash';

class SurveilPage extends Component {
    state = {
    };

    componentDidMount()
    {

    }

    componentWillMount()
    {
        this.props.fetchSensorLocations(this.props.users.userAuth);
        this.setState({sensor_locations:this.props.sensor_locations});
    }

    createRooms(){
        let rooms = [];
        const EACH_ROW_ROOM_COUNT = 3;
        const ROW_COUNT = Math.ceil(Object.keys(this.state.sensor_locations).length / EACH_ROW_ROOM_COUNT);
        const CURRENT_ROOM_COUNT = Object.keys(this.state.sensor_locations).length;

        let current_room;
        let room
        for(let i = 0; i < ROW_COUNT ; i++)
        {
            let children = [];
            for (let j = 0; j < EACH_ROW_ROOM_COUNT; j++) {
                current_room = i * EACH_ROW_ROOM_COUNT + j;
                if(current_room >= CURRENT_ROOM_COUNT)
                    break;
                room = this.state.sensor_locations[current_room];

                children.push(<Grid.Column key={j}><RoomLastActivities key={room._id} iconName="bath" roomName={room.name}/></Grid.Column>)
                console.log();
            }
            rooms.push(<Grid.Row key={i}>{children}</Grid.Row>)
        }



        return rooms;

    }

    render() {
        _.forEach(this.props.sensor_locations,(val,key) => {


        });

        return (
            <Grid stackable doubling celled>
                <Grid.Column width={12}>
                    <Grid stackable columns={3} divided>
                        {
                            this.createRooms()
                        }
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                    <FeedRight/>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users,
        sensor_locations:state.surveils.sensor_locations
    }
};
const mapDispatchToProps = {
    fetchSensorLocations
};
export default connect(mapStateToProps,mapDispatchToProps)(SurveilPage);

/*
<Grid.Row>
    <Grid.Column>
        <RoomLastActivities iconName="bath" roomName="Bath"/>
    </Grid.Column>
    <Grid.Column>
        <RoomLastActivities iconName="food" roomName="Kitchen"/>
    </Grid.Column>
    <Grid.Column>
        <RoomLastActivities iconName="bed" roomName="Bedroom"/>
    </Grid.Column>
</Grid.Row>
*/