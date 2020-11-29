import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class DisplayList extends React.Component {
    render() {
        return (
            <CardColumns>
                {this.props.list.map(item =>
                    <Container>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '100%'}} src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.size}, {item.activity}</Card.Text>
                                <Card.Text> ${item.rate}/hour</Card.Text>
                            </Card.Body>
                            <Button style={{ width: '100%'}}onClick={() => this.props.add(item.name, item.rate)}>Walk {item.name}!</Button>
                        </Card>
                    </Container>)}
            </CardColumns>


        )
    }
}