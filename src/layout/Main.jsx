import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import Rightnav from '../pages/shared/RightNav/Rightnav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
     
      <Row>
        <Col lg={3}><LeftNav></LeftNav></Col>
        <Col lg={6}><h2>Main Contain Coming soon......</h2></Col>
        <Col lg={3}><Rightnav></Rightnav></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;