import React from 'react';
import Container from 'react-bootstrap/Container';
import DisplayList from './DisplayList.jsx';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FilterButtons from './FilterButtons.jsx';


export default class FilterList extends React.Component {
    constructor(props) {
        //state keeps track of the selected size, activity, and sort filter
        //size and activity initialized to All so all cards displayed on opening
        super(props);
        this.state = {
            size: "All",
            activity: "All",
            sort: "default"
        };
    }

    original = () => {
        this.setState({
            size: "All"
        })
        this.setState({
            activity: "All"
        })
        this.setState({
            sort: "default"
        })

    }

    //function that takes in an eventKey and updates the size state to reflect it
    onSelectFilterSize = event => {
        this.setState({
            size: event
        })
    };

    //same as above function but for activity
    //function that takes in an eventKey and updates the activity state to reflect it
    onSelectFilterActivity = event => {
        this.setState({
            activity: event
        })
    };

    //function that will be passed into the javascript filter function
    //will include item if All or the item's size matches the current state
    matchesFilterSize = item => {
        if (this.state.size === "All") {
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    };

    //same as above, but for the item's activity
    matchesFilterActivity = item => {
        if (this.state.activity === "All") {
            return true
        } else if (this.state.activity === item.activity) {
            return true
        } else {
            return false
        }
    }

    //function that updates the state based on an eventKey
    onSelectSort = event => {
        this.setState({
            sort: event
        })
    }

    //function that will be passed into the javascript sort filter
    //compares item rates depending on the current state
    matchesSortFilter = (a, b) => {
        if (this.state.sort === "descend") {
            return b.rate - a.rate
        } else if (this.state.sort === "ascend") {
            return a.rate - b.rate
        } else if (this.state.sort === "default"){
            return 0
        }
    }

    render() {
        return (
            <Container style={{paddingLeft: '0'}}>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                <Container style={{ backgroundColor: '#F8F9FA' }}>
                    <h3 style={{paddingLeft: '2%', paddingTop: '5%' }}>Dogs Available to Walk</h3>
                    <Navbar variant="light" bg="light">
                        <Navbar.Brand>Size:</Navbar.Brand>
                        <Nav activeKey={this.state.size} className="mr-auto">
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
                        <Nav activeKey={this.state.activity} className="mr-auto">
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
                        <Nav activeKey={this.state.sort} className="mr-auto">
                            <Nav.Item><Nav.Link eventKey="descend" onSelect={this.onSelectSort}>Highest to Lowest</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="ascend" onSelect={this.onSelectSort}>Lowest to Highest</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
                <Container style={{paddingLeft: '5%', paddingBottom: '2%'}}>
                    <Button variant="dark" onClick={() => this.original()}>Clear all filters/sorting</Button>
                </Container>
            </Container>
                <div>
                    <DisplayList list={this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterActivity).sort(this.matchesSortFilter)} add={this.props.add} />
                </div>
            </Container>
        );
    }
}