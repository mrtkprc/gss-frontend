import React, {Component} from 'react';
import {Icon, List} from "semantic-ui-react";
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZXJpYXRyaWNfaWQiOiI1YmE4ZjNlYzFiNGY0YTI0Y2NiMzcyYzIifQ.sXSYE0wqUVJwxLXNsNojcqetG17tKY0CP7HILDPze1Q

class ActionInRoomItem extends Component {
    render() {
        return (
            <List.Item>
                <Icon name="eye" color="teal" size="large"/>
                <List.Content>
                    <List.Header>Daniel Louise</List.Header>
                </List.Content>
            </List.Item>
        );
    }
}

export default ActionInRoomItem;
