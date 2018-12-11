import React,{Component} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {Redirect} from  'react-router-dom';
import {fetchLastStimuluses} from "../actions/geriatrics";
import {checkLoginOperation}  from './../actions/users'


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email:'',
        password:'',
        errors:{}
    };

    componentWillMount() {

    }


    handleChanged = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });

    };
    validate = () => {
        const errors = {};
        if(!this.state.email) errors.email = "Can't be blank at email adress area";
        if(!this.state.password) errors.password = "Can't be blank at password adress area";

        return errors;
    };
    onSubmit = (e) => {
        const errors = this.validate();
        this.setState({
           errors
        });

        if((Object.keys(errors).length) === 0)
            this.props.checkLoginOperation(this.state.email,this.state.password);
    };

    render()
    {
    const errors = this.state.errors;
    if(this.props.users.isAuthenticated)
        return (<Redirect to="/"/>);
    return (
    <div className='login-form'>
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

    <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            {
                (
                errors.email
                &&
                <Header as='h4' color='red' textAlign='center'>
                    You should enter email adress
                </Header>
                )
                ||
                (
                    errors.password
                    &&
                    <Header as='h4' color='red' textAlign='center'>
                        You should enter password
                    </Header>
                )
            }
            <Header as='h4' color='teal' textAlign='center'>
                Login to (G)eriatric (S)urveillance (S)ystem
            </Header>
            <Form onSubmit={this.onSubmit} size='large'>
                <Segment stacked>
                    <Form.Input
                        error={!!errors.email}
                        fluid icon='user'
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChanged}
                        iconPosition='left'
                        placeholder='Your Email Adress'/>
                    <Form.Input
                        error={!!errors.password}
                        fluid icon='lock'
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanged}
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Button  color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                To know that your loved one is safe, <a href='/register'>Click me!</a>
            </Message>
        </Grid.Column>
    </Grid>
    </div>
    );
    }
}
const mapStateToProps = (state) => {
    return {
        users:state.users
    }
}
const mapDispatchToProps = {
    checkLoginOperation
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);