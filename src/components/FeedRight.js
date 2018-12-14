import React, {Component} from 'react';
import { Card, Feed,Icon } from 'semantic-ui-react';
import {connect} from 'react-redux'
import _ from 'lodash';
class FeedRight extends Component {
    state = {};
    createEventList()
    {
        let tables = [];

        _.forEach(this.props.last_stimulus,(val,key)=> {
            let {last_stimulation,sensor_location_name,sensor_location_icon_name,_id,sensor_location_id} = val;
            tables.push(
            <Feed.Event key={_id.toString()+sensor_location_id.toString()}>
                <Icon color={"blue"} circular inverted size={"large"} name={sensor_location_icon_name}/>
                <Feed.Content>
                    <Feed.Date content= {last_stimulation} />
                    <Feed.Summary>
                        {sensor_location_name}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>);
        });
        return tables;

    }
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        {
                            this.createEventList()
                        }
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        last_stimulus:state.geriatrics.last_stimulus,
    }
};
const mapDispatchToProps = {
};
export default connect(mapStateToProps,mapDispatchToProps)(FeedRight);

/*
<Feed.Event>
    <Feed.Label image='https://semantic-ui.com/images/avatar/small/elliot.jpg' />
    <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
            You added <a>Molly Malone</a> as a friend.
        </Feed.Summary>
    </Feed.Content>
</Feed.Event>
*/