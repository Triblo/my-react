import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
     persons: [
      { id: 'asd', name: 'Tricia', age: 29 },
      { id: 'asdf', name: 'Jeff', age: 30 },
      { id: 'asdg', name: 'Max', age: 27 },
    ],
    showPersons: false
  }

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
  let persons = null;
  let btnClass = "";

  if (this.state.showPersons) {
    persons = (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div>
    );
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (this.state.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm Tricia's React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        className={btnClass} 
        onClick={this.togglePersonsHandler}>Toggle People</button>
      {persons}
    </div>
    );
  };
}

export default App;
