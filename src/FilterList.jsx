import React from 'react';
import Container from 'react-bootstrap/Container';
import DisplayList from './DisplayList.jsx';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';


export default class FilterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "All",
            activity: "All",
        };
    }

    onSelectFilterSize = event => {
        this.setState({
            size: event
        })
    };

    onSelectFilterActivity = event => {
        this.setState({
            activity: event
        })
    };

    matchesFilterSize = item => {
        if (this.state.size === "All") {
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    };

    matchesFilterActivity = item => {
        if (this.state.activity === "All") {
            return true
        } else if (this.state.activity === item.activity) {
            return true
        } else {
            return false
        }
    }

    onSelectSort = event => {
        this.setState({
            sort: event
        })
    }

    matchesSortFilter = (a, b) => {
        if (this.state.sort === "descend") {
            return b.rate - a.rate
        } else if (this.state.sort === "ascend") {
            return a.rate - b.rate
        }
    }

    render() {
        return (
            <Container>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <h3 style={{paddingLeft: '2%', paddingTop: '5%' }}>Dogs Available to Walk</h3>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand>Size:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="small" onSelect={this.onSelectFilterSize}>Small</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="medium" onSelect={this.onSelectFilterSize}>Medium</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="large" onSelect={this.onSelectFilterSize}>Large</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand>Activity Level:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterActivity}>All</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="regular" onSelect={this.onSelectFilterActivity}>Regular</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="energetic" onSelect={this.onSelectFilterActivity}>Energetic</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="high" onSelect={this.onSelectFilterActivity}>High</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand>Sort by Rate:</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="descend" onSelect={this.onSelectSort}>Highest to Lowest</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="ascend" onSelect={this.onSelectSort}>Lowest to Highest</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                <div>
                    <DisplayList list={this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterActivity).sort(this.matchesSortFilter)} add={this.props.add} />
                </div>
            </Container>
        );
    }
}