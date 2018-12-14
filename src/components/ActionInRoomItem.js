import React, {Component} from 'react';
import {Icon, List} from "semantic-ui-react";
//import Moment from 'react-moment';
//import 'moment-timezone';
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZXJpYXRyaWNfaWQiOiI1YmE4ZjNlYzFiNGY0YTI0Y2NiMzcyYzIifQ.sXSYE0wqUVJwxLXNsNojcqetG17tKY0CP7HILDPze1Q

class ActionInRoomItem extends Component {
    render() {

        return (
            <List.Item>
                <Icon name="eye" color={this.props.iconColor} size="large"/>
                <List.Content>
                    <List.Header>
                        {
                            this.props.textValue !== undefined
                                ?
                                (
                                    this.props.textValue.toString().split(" ")[1])
                                :
                                (<div>No Action</div>)
                        }
                    </List.Header>
                </List.Content>
            </List.Item>
        );
    }
}

export default ActionInRoomItem;
