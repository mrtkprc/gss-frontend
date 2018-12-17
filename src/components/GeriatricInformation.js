import React, {Component} from 'react';
import {Segment,Header,Icon,Form,Input,Button,Label} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {fetchGeriatricInfo} from "../actions/geriatrics";

class GeriatricInformation extends Component {
    state = {
        name:'',
        surname:'',
        gsm:'',
        public_key:'',
        telegram_chat_id:'',
        _id:''
    };

    componentDidMount() {
    }

    async componentWillMount() {
        await this.props.fetchGeriatricInfo({
            _id:this.props.users.userAuth.geriatric_id
        });
    }

    componentWillReceiveProps(nextProps) {
        const {name,surname,gsm,public_key,telegram_chat_id,_id} = nextProps.geriatrics.geriatric_info;
        this.setState({name,surname,gsm,public_key,telegram_chat_id,_id});
    }

    saveChanges = () => {
        console.log("Save changes clicked");
    }
    handledChanged = (e,data) => {

        this.setState({
            [data.input]:data.value
        });
    }


    render() {
        return (
            <Segment>
                <Header as='h4' icon textAlign='center'>
                    <Icon name='heartbeat' inverted color="red" circular />
                    <Header.Content>Geriatric Information</Header.Content>
                </Header>
                <Form>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Name</Label>
                        <Input size="large" input={"name"} icon='user circle' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.name} placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Surname</Label>
                        <Input size="large" input={"surname"} icon='users' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.surname} placeholder='Surname' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Mobile Phone</Label>
                        <Input size="large" maxLength="10" input={"gsm"} icon='phone' onChange={this.handledChanged} fluid iconPosition='left' value={this.state.gsm} placeholder='Mobile Phone' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Public Key</Label>
                        <Input size="large" icon='key' fluid disabled iconPosition='left' value={this.state.public_key} placeholder='Public Key' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Telegram Chat ID</Label>
                        <Input size="large" icon='telegram' fluid disabled iconPosition='left' value={this.state.telegram_chat_id} placeholder='Telegram Bot ID' />
                    </Form.Field>
                    <Form.Field>
                        <Label basic color="blue" pointing="below">Geriatric ID</Label>
                        <Input size="large" icon='id card' fluid disabled iconPosition='left' value={this.state._id} placeholder='Geriatric ID' />
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
    fetchGeriatricInfo
};

export default connect(mapStateToProps,mapDispatchToProps)(GeriatricInformation);
