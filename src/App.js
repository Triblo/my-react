import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Tricia', age: 29 },
      { name: 'Jeff', age: 30 },
      { name: 'Max', age: 27 },
    ],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: "Jeff", age: 40},
        { name: "Stephanie", age: 27}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: "Tricia", age:"40" },
      { name: event.target.value, age:"31" },
      { name: 'Max', age:"29" }
    ]
  });
  };

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm Tricia's React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler.bind(this, "Max")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maximlian!")}
          changed={this.nameChangedHandler}>
          My hobbies: Music</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  };
}

export default App;
