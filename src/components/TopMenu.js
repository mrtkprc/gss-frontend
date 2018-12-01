import React from "react";
import { Link } from 'react-router-dom';
import { Menu,Image } from 'semantic-ui-react';
const TopMenu = () => {
    return (
        <Menu stackable>
            <Menu.Item>
                <img src='https://react.semantic-ui.com/logo.png' />
            </Menu.Item>
            <Menu.Item
                name='features'
                as={Link}
                to="/"
            >
                Home Page
            </Menu.Item>
            <Menu.Item name='features' as={Link} to="/geriatric">
                Geriatric
            </Menu.Item>
            <Menu.Item name='features' as={Link} to="/surveil">
                Surveillance
            </Menu.Item>
            <Menu.Item position='right' style={{color:'darkgray',backgroundColor:'#f7faff',width:'250px'}} name='features' as={Link} to="/surveil">
                <Image src={process.env.PUBLIC_URL + '/location.png'} />
                Kitchen (19:11)
                &nbsp; <Image style={{float:'right'}} src={process.env.PUBLIC_URL + '/refresh.png'} />

            </Menu.Item>
        </Menu>
    )
};
export default TopMenu;
