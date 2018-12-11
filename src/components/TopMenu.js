import { Link } from 'react-router-dom';
import { Menu,Image } from 'semantic-ui-react';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLastStimuluses} from '../actions/geriatrics';

class TopMenu extends Component {
    state = {
        lastLocation:'NoneLocat',
        lastSeenTime:'xx:yy'
    }
    componentDidMount() {
        console.log(this.props);
        /*
        setInterval(
            () => {
                this.props.fetchLastStimuluses();
            }
            ,50000
        );
        */


    }

    render() {
        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>
                <Menu.Item
                    name='home'
                    as={Link}
                    to="/"
                >
                    Home Page
                </Menu.Item>
                <Menu.Item name='geriatric' as={Link} to="/geriatric">
                    Geriatric
                </Menu.Item>
                <Menu.Item name='surveil' as={Link} to="/surveil">
                    Surveillance
                </Menu.Item>
                {
                    this.props.users.isAuthenticated
                        ?
                        <Menu.Item position='right' style={{color: 'darkgray', backgroundColor: '#f7faff', width: '200px'}}
                                   name='last_stimulus' as={Link} to="/surveil">
                            <Image src={process.env.PUBLIC_URL + '/location.png'}/>
                            Kitchen (19:11)
                            &nbsp; <Image style={{paddingLeft: '5px'}} src={process.env.PUBLIC_URL + '/refresh.png'}/>
                        </Menu.Item>
                        :
                        <Menu.Item position='right' name='login' style={{color:'red',width:'100px'}} as={Link} to="/login">
                            Login
                        </Menu.Item>
                }
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users:state.users,
        geriatrics:state.geriatrics
    }
}
const mapDispatchToProps = {
    fetchLastStimuluses
};

export default connect(mapStateToProps,mapDispatchToProps)(TopMenu);
