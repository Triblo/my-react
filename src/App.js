import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tricia', age:"29" },
      { name: 'Jeff', age:"30" },
      { name: 'Max', age:"27" },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Trisha', age:"29" },
      { name: 'Jeff', age:"30" },
      { name: 'Max', age:"29" }
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Tricia's React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    /*  */return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "does this work now?"));
  }
}

export default App;
