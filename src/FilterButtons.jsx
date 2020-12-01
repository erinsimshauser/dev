import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

export default class FilterButtons extends React.Component{
    render(){
        return(
            <Container style={{ backgroundColor: '#F8F9FA' }}>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <h3 style={{paddingLeft: '2%', paddingTop: '5%' }}>Dogs Available to Walk</h3>
                    <Nav variant="pills" defaultActiveKey={this.props.activeSize} bg="light">
                        <Navbar.Brand>Size:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.selectSize}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="small" onSelect={this.props.selectSize}>Small</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="medium" onSelect={this.props.selectSize}>Medium</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="large" onSelect={this.props.selectSize}>Large</Nav.Link></Nav.Item>
                        </Nav>
                    </Nav>
                </Container>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <Nav bg="light" variant="light">
                        <Navbar.Brand>Activity Level:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="All" onSelect={this.props.selectActivity}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="regular" onSelect={this.props.selectActivity}>Regular</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="energetic" onSelect={this.props.selectActivity}>Energetic</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="high" onSelect={this.props.selectActivity}>High</Nav.Link></Nav.Item>
                        </Nav>
                    </Nav>
                </Container>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <Nav bg="light" variant="light">
                        <Navbar.Brand>Sort by Rate:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="descend" onSelect={this.props.selectSort}>Highest to Lowest</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="ascend" onSelect={this.props.selectSort}>Lowest to Highest</Nav.Link></Nav.Item>
                        </Nav>
                    </Nav>
                </Container>
                <Container>
                    <Button onClick={() => this.props.original()}>Clear all filters/sorting</Button>
                </Container>
            </Container>

        );
    }
}