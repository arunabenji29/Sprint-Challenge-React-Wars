import React, {Component} from 'react';
import EachDogBreed from './components/EachDogBreed'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      dogsBreeds:[],
    };
  }

  componentDidMount() {
    this.getBreeds('https://dog.ceo/api/breed/hound/images');
  }

  getBreeds = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogsBreeds: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render(){
    return (
      <div className="App">
        <h1>Dogs</h1>
        <div className = 'class-list'>
          {this.state.dogsBreeds.map(dogBreed =>(
            <EachDogBreed dogProp = {dogBreed} />
          )
            )}
        </div>
      </div>
    );
  }
  }

export default App;
