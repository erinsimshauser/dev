import FilterList from './FilterList.jsx';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aggregator from './Aggregator.jsx';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      aggItems: [],
      aggProp: 0,
      currItem: {
        name: "", size: "", activity: "", rate: 0
      }
    }
  }
  
  addItem = (name, rate) => {
    const newItem = {
      name: name,
      rate: rate,
      key: Date.now()
    };
    const aggItems = [...this.state.aggItems, newItem];
    this.setState({ aggItems });
    const aggProp = this.state.aggProp + rate;
    this.setState({ aggProp });
  };

  removeItem = (key, rate) => {
    const aggItems = this.state.aggItems.filter(item => key != item.key);
    this.setState({ aggItems }); 
    const aggProp = this.state.aggProp - rate;
    this.setState({ aggProp })
  };
  render(){
    const dogList = [
      {name: "Louie", breed: "Beagle", size: "small", activity: "energetic", rate: 16, img: "/images/beagle.jpg"},
      {name: "Clara", breed: "Cocker Spaniel", size: "small", activity: "regular", rate: 15, img: "/images/cockerSpaniel.jpg"},
      {name: "Everett", breed: "Dachsund", size: "small", activity: "regular", rate: 14, img: "/images/dachsund.jpg"},
      {name: "Astrid", breed:"Corgi", size: "small", activity: "energetic", rate: 18, img: "/images/corgi.jpeg"},
      {name: "Aussie", size: "medium", activity: "high", rate: 17, img: "/images/aussie.jpg"},
      {name: "Lilli", breed: "Entlebucher", size: "medium", activity: "high", rate: 20, img: "/images/lilli.jpeg"},
      {name: "Cash", breed:"Samoyed", size: "medium", activity: "energetic", rate: 25, img: "/images/samoyed.jpg"},
      {name: "Garry", breed: "German Shepherd", size: "large", activity: "regular", rate: 18, img: "/images/germanShepherd.jpg"},
      {name: "Baker", breed: "Golden Retriever", size: "large", activity: "high", rate: 23, img: "/images/goldenRetriever.jpeg"},
      {name: "Rocky", breed: "Rottweiler", size: "large", activity: "regular", rate: 21, img: "/images/rottweiler.jpg"},
      {name: "Benji", breed: "Bulldog", size: "medium", activity: "regular", rate: 19, img: "/images/bulldog.jpg"},
      {name: "Mocha", breed: "Mix", size: "medium", activity: "energetic", rate: 22, img: "/images/mocha.jpeg"}
    ]
    return (
      <Container>
        <Row>
          <Container style={{padding: '5%', borderStyle: 'solid'}}>
          <h1>DogWalkr</h1>
            <p>Welcome to DogWalkr! Browse through dogs below and find ones you would like to walk! You can filter dogs by size and activity level, and sort by how much you will get paid per hour.
              <br></br>
              Happy Walkn!
            </p>
          </Container>
        </Row>
        <Row>
          <Col>
            <FilterList list={dogList} add={this.addItem}/>
          </Col>
          <Col>
          <Aggregator items={this.state.aggItems} total={this.state.aggProp} remove={this.removeItem}/>
          </Col>
        </Row>
      </Container>

    )
  }

}
