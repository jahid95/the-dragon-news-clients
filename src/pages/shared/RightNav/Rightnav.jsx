import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const Rightnav = () => {
    return (
        <div className='text-center'>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle className='m-2'></FaGoogle>Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub className='m-2'></FaGithub>Login with Github</Button>
            <div className='my-4'>
                <h4>Find with us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;