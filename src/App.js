import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 2px solid #ccc;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`;

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

  if (this.state.showPersons) {
    persons = (
      <div >
        {this.state.persons.map((person, index) => {
          return <Person
            click={(index) => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}>
          </Person>
        })}
    </div>
    );
  }

  let classes = [];
  if (this.state.persons.length <= 2) {
    classes.push('red');
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold');
  }

  return (
      <div className="App">
        <h1>Hi, I'm Tricia's React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle People</StyledButton>
        {persons}
      </div>
    );
  };
}

export default App;
