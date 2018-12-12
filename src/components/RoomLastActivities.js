import React, {Component} from 'react';
import { Card, Icon,Image,List } from 'semantic-ui-react'
import ActionInRoomItem from "./ActionInRoomItem";
class RoomLastActivities extends Component {

    state = {};

    render() {
        const description = [
            'Amy is a violinist with 2 years experience in the wedding industry.',
            'She enjoys the outdoors and currently resides in upstate New York.',
        ].join(' ')
        return (
            <Card>
                <Card.Content>
                    <Icon name={this.props.iconName} size='big' /> {this.props.roomName}
                </Card.Content>
                <Card.Content>
                    <List divided verticalAlign='middle'>
                        <ActionInRoomItem/>
                        <ActionInRoomItem/>
                        <ActionInRoomItem/>
                        <ActionInRoomItem/>
                        <ActionInRoomItem/>
                    </List>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='history' /> 3 actions today.
                </Card.Content>
            </Card>
        );
    }
}

export default RoomLastActivities;
