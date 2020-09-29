import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
     persons: [
      { id: 'asd', name: 'Tricia', age: 29 },
      { id: 'asdf', name: 'Jeff', age: 30 },
      { id: 'asdg', name: 'Max', age: 27 },
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

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
    ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
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
        {this.state.persons.map((person, index) => {
          return <Person
            click={() =>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}>
          </Person>
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
        onClick={this.togglePersonsHandler}>Toggle People</button>
      {persons}
    </div>
    );
  };
}

export default App;
