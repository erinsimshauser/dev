import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export default class Aggregator extends React.Component {
    render() {
        //displays the items as Cards in a single column --> based on the list passed in, must access using props
        //displays the total rate --> based on the total passed in
        //includes a remove button which on press triggers the callback function to remove item
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