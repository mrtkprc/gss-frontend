import React, {Component} from 'react';
import {Button, Form, Header, Icon, Input, Label, Segment} from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";

class RelativeInformation extends Component {

    state = {
        name:'',
        surname:'',
        gsm:'',
        email:'',
    };

    componentWillMount()
    {
        this.setState(this.props.users.userAuth);
    }

    componentDidMount()
    {


    }

    componentWillReceiveProps(nextProps) {

    }

    saveChanges()
    {

    }

    handledChanged(e,data)
    {
        this.setState({
            [data.input]:data.value
        });
    }

    render() {
        return (
            <Segment>
                <Header as='h4' icon textAlign='center'>
                    <Icon name='user outline' inverted color="blue" circular />
                    <Header.Content>Relative Information</Header.Content>
                </Header>
                <Form>
                    <Form.Field>
                        <Label basic color="green" pointing="below">Name</Label>
                        <Input size="large" input={"name"} icon='user circle' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.name} placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="green" pointing="below">Surname</Label>
                        <Input size="large" input={"surname"} icon='users' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.surname} placeholder='Surname' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="green" pointing="below">Mobile Phone</Label>
                        <Input size="large" maxLength="10" input={"gsm"} icon='phone' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.gsm} placeholder='Mobile Phone' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="green" pointing="below">Email</Label>
                        <Input size="large" icon='mail' fluid disabled iconPosition='left' value={this.state.email} placeholder='Public Key' />
                    </Form.Field>
                    <Button.Group fluid>
                        <Button onClick={this.saveChanges} size="large" positive>Save</Button>
                        <Button.Or />
                        <Button basic color="red">Cancel</Button>
                    </Button.Group>

                </Form>
            </Segment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users:state.users,
        geriatrics:state.geriatrics
    }
};
const mapDispatchToProps = {

};

export default connect(mapStateToProps,mapDispatchToProps)(RelativeInformation);
