import React, {Component} from 'react';
import {Segment,Header,Icon,Form,Input} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {fetchGeriatricInfo} from "../actions/geriatrics";
import PropTypes from 'prop-types';

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
        console.log("cdm");
    }

    async componentWillMount() {
        console.log("cwm");

        await this.props.fetchGeriatricInfo({
            _id:this.props.users.userAuth.geriatric_id
        });
        /*
        setTimeout(()=> {
            console.log(this.props.geriatrics.geriatric_info);
        },1000);
        */
    }

    componentWillReceiveProps(nextProps) {
        //console.log("cwrp");
        console.log("cwrp: ",nextProps);
        const {name,surname,gsm,public_key,telegram_chat_id,_id} = nextProps.geriatrics.geriatric_info;
        this.setState({name,surname,gsm,public_key,telegram_chat_id,_id});

    }


    render() {
        console.log("render and state",this.state);
        return (
            <Segment>
                <Header as='h4' icon textAlign='center'>
                    <Icon name='heartbeat' inverted color="red" circular />
                    <Header.Content>Geriatric Information</Header.Content>
                </Header>
                <Form>
                    <Input size="large" icon='user circle' fluid iconPosition='left' value={this.state.name} placeholder='Name' />
                    <br/>
                    <Input size="large" icon='users' fluid iconPosition='left' value={this.state.surname} placeholder='Surname' />
                    <br/>
                    <Input size="large" icon='phone' fluid iconPosition='left' value={this.state.gsm} placeholder='Mobile Phone' />
                    <br/>
                    <Input size="large" icon='key' fluid disabled iconPosition='left' value={this.state.public_key} placeholder='Public Key' />
                    <br/>
                    <Input size="large" icon='telegram' fluid disabled iconPosition='left' value={this.state.telegram_chat_id} placeholder='Telegram Bot ID' />
                    <br/>
                    <Input size="large" icon='id card' fluid disabled iconPosition='left' value={this.state._id} placeholder='Geriatric ID' />
                    <br/>

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
