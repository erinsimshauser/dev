import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


export default class Aggregator extends React.Component {
    render(){
        console.log(this.props.items)
        return(
            <Container>
                {this.props.items.map(item =>
                    <Container>
                        <li>{item.name} </li>
                        <Button onClick={() => this.props.remove(item.key, item.rate)}>Remove!</Button>                        
                    </Container>
                )}
                <Row>
                    <h3>Total: ${this.props.total}/hour</h3>
                </Row>
            </Container>
        )
    }
}