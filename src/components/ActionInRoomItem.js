import React, {Component} from 'react';
import {Icon, List} from "semantic-ui-react";

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
