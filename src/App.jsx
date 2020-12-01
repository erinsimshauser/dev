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
    //the state keeps track of items in the aggregator and the total
    //passed down to Aggregator to display
    this.state = {
      aggItems: [],
      aggTotal: 0
    }
  }
  
  //function that takes in a dog's name and rate to create a new card in the Aggregator
  //updates the state accordingly: adds new item to items list, and adds the rate to total
  addItem = (name, rate) => {
    const newItem = {
      name: name,
      rate: rate,
      key: Date.now() //create a key in case the same dog is added multiple times we need a unique identifier to remove the right one
    };
    const aggItems = [...this.state.aggItems, newItem];
    this.setState({ aggItems });
    const aggTotal = this.state.aggTotal + rate;
    this.setState({ aggTotal });
  };

  //function that takes in a dog card's key and rate and removes it from the Aggregator
  //updates the state accordingly: removes from items list based on key, subtracts dog's rate from total
  removeItem = (key, rate) => {
    const aggItems = this.state.aggItems.filter(item => key != item.key);
    this.setState({ aggItems }); 
    const aggTotal = this.state.aggTotal - rate;
    this.setState({ aggTotal })
  };

  render(){
    //raw data to be rendered, including images and different tags for sorting/filtering
    const dogList = [
      {name: "Louie", breed: "Beagle", size: "small", activity: "energetic", rate: 16, img: "/images/beagle.jpg"},
      {name: "Clara", breed: "Cocker Spaniel", size: "small", activity: "regular", rate: 15, img: "/images/cockerSpaniel.jpg"},
      {name: "Everett", breed: "Dachsund", size: "small", activity: "regular", rate: 14, img: "/images/dachsund.jpg"},
      {name: "Astrid", breed:"Corgi", size: "small", activity: "energetic", rate: 18, img: "/images/corgi.jpeg"},
      {name: "Yoda", breed: "Aussie", size: "medium", activity: "high", rate: 17, img: "/images/aussie.jpg"},
      {name: "Lilli", breed: "Entlebucher", size: "medium", activity: "high", rate: 20, img: "/images/lilli.png"},
      {name: "Cash", breed:"Samoyed", size: "medium", activity: "energetic", rate: 25, img: "/images/cash.png"},
      {name: "Garry", breed: "German Shepherd", size: "large", activity: "regular", rate: 18, img: "/images/germanShepherd.jpg"},
      {name: "Baker", breed: "Golden Retriever", size: "large", activity: "high", rate: 23, img: "/images/goldenRetriever.jpeg"},
      {name: "Rocky", breed: "Rottweiler", size: "large", activity: "regular", rate: 21, img: "/images/rottweiler.png"},
      {name: "Benji", breed: "Bulldog", size: "medium", activity: "regular", rate: 19, img: "/images/bulldog.jpg"},
      {name: "Mocha", breed: "Mix", size: "medium", activity: "energetic", rate: 22, img: "/images/mocha.png"}
    ]
    //displays a header with instructional info, then the filterlist in one coloumn and the aggregator in another
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
          <Aggregator items={this.state.aggItems} total={this.state.aggTotal} remove={this.removeItem}/>
          </Col>
        </Row>
      </Container>

    )
  }

}
