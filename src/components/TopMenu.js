import { Link } from 'react-router-dom';
import { Menu,Image } from 'semantic-ui-react';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLastStimuluses} from '../actions/geriatrics';
import LocationNotifierTop from './LocationNotifierTop'

class TopMenu extends Component {
    state = {
        lastLocation:'NoneLocat',
        lastSeenTime:'xx:yy',
        token:''
    }
    componentDidMount() {
        setInterval(()=> {
            if(this.props.users.isAuthenticated)
                this.props.fetchLastStimuluses(this.props.users.userAuth)
        },100000);
    }

    render() {
        return (
            <Menu stackable>
                <Menu.Item>
                    <img alt="Logo" src='https://react.semantic-ui.com/logo.png' />
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
                        <Image alt="Location Info" src={process.env.PUBLIC_URL + '/location.png'}/>
                            <LocationNotifierTop/>
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
