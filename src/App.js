import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Tricia', age: 29 },
      { name: 'Jeff', age: 30 },
      { name: 'Max', age: 27 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
      { name: 'Trisha', age:"29" },
      { name: 'Jeff', age:"30" },
      { name: 'Max', age:"29" }
    ]
  });
  };

    return (
      <div className="App">
        <h1>Hi, I'm Tricia's React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
};

export default app;
