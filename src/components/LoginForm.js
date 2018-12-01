import React,{Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    state = {
        email:'',
        password:'',
        errors:{}
    };
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


    };
    render()
    {
        const errors = this.state.errors;
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
            <Header as='h2' color='teal' textAlign='center'>
                GSS Sistemine Giriş Yap
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
                        placeholder='Email Adresiniz'/>
                    <Form.Input
                        error={!!errors.password}
                        fluid icon='lock'
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChanged}
                        iconPosition='left'
                        placeholder='Şifreniz'
                        type='password'
                    />
                    <Button color='teal' fluid size='large'>
                        Giriş Yap
                    </Button>
                </Segment>
            </Form>
            <Message>
                Aramıza katılmak için <a href='#'>Tıklayınız</a>
            </Message>
        </Grid.Column>
    </Grid>
    </div>
    );
    }
}

export default LoginForm