import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class DisplayList extends React.Component {
    render() {
        //maps each item to be visually displayed --> we are passing in the filtered list
        //displays an add button which on press will add items to the aggregator through a callback function
        //displays cards in a grid by making use of react-boostrap and some custom css
        return (
            <Container style={{backgroundColor: '#F8F9FA', width: '700px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>
                {this.props.list.map(item =>
                    <Container style={{paddingBottom: '5%'}}>
                        <Card>
                            <Card.Img variant="top" style={{ width: '100%', height: '150px', objectFit: 'cover', objectPosition: '50% 30%'}} src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle style={{ fontSize: '12', color: 'grey' }}>{item.breed}</Card.Subtitle>
                                <Card.Text>Size: {item.size} <br></br> Activity: {item.activity}</Card.Text>
                                <Card.Text> ${item.rate}/hour</Card.Text>
                            </Card.Body>
                            <Button style={{ width: '100%' }} onClick={() => this.props.add(item.name, item.rate)}>Walk {item.name}!</Button>
                        </Card>
                    </Container>
                )}
            </Container>


        )
    }
}