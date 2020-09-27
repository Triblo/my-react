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
    showPersons: false
  }

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

    togglerPersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm Tricia's React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglerPersonsHandler}>Toggle People</button>
        {persons}
      </div>
    );
  };
}

export default App;
