import React from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

export default class DisplayList extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: '#F8F9FA', width: '700px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
                {this.props.list.map(item =>
                    <Container>
                        <Card>
                            <Card.Img variant="top" style={{ width: '100%', height: '100%' }} src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.size}, {item.activity}</Card.Text>
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