import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


export default class Aggregator extends React.Component {
    render() {
        console.log(this.props.items)
        return (
            <Container style={{backgroundColor: '#F8F9FA'}}>
                <h3 style={{paddingBottom: '5%', paddingTop: '10%'}}>Your Walkn Schedule</h3>
                {this.props.items.map(item =>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text> ${item.rate}/hour</Card.Text>
                            </Card.Body>
                            <Button style={{ width: '100%' }} onClick={() => this.props.remove(item.key, item.rate)}>Remove</Button>
                        </Card>
                    </Container>
                )}
                <h4 style={{paddingBottom: '5%', paddingTop: '5%'}}>Total: ${this.props.total}/hour</h4>
            </Container>
        )
    }
}