import React, {useEffect, useState} from "react";
import {Person} from "./Person";

export const People = () => {

  let [personIndex, setPersonIndex] = useState(1);
  let [persons, setPersons] = useState([]);

  const getPerson = (updateIndex = true) => {
    getPersonFetch()
      .then(res => res.json())
      .then(json => {
        if (json) {
          setPersons(persons.concat([{
            name: json.name,
            eye_color: json.eye_color,
            homeworld: json.homeworld
          }]));

          updateIndex && setPersonIndex(personIndex + 1);
        }
      })
      .catch(console.error);
  };

  const getPersonFetch = async () => await fetch(`https://swapi.co/api/people/${personIndex}`);

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <h4>Individuals of Star Wars</h4>
      <button onClick={() => getPerson()}>Get next individual</button>
      <ul>
        {
          persons ?
            persons.map((person, index) => {
              return (
                <Person
                  key={`person-at-${index}`}
                  eye_color={person.eye_color}
                  index={index}
                  name={person.name}
                  homeworldURL={person.homeworld}
                />
              )
            }) :
            <h5>Loading...</h5>
        }
      </ul>
    </div>
  )
};