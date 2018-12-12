import React, {Component} from 'react';
import { Grid} from 'semantic-ui-react';
import FeedRight from './../FeedRight';
import RoomLastActivities from './../RoomLastActivities';

class SurveilPage extends Component {

    componentDidMount()
    {

    }


    render() {
        return (
            <Grid stackable doubling celled>
                <Grid.Column width={12}>
                    <Grid stackable columns={3} divided>
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
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                    <FeedRight/>
                </Grid.Column>
            </Grid>
        );
    }
}

export default SurveilPage;
