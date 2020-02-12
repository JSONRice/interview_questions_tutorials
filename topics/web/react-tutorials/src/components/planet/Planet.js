import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

export const Planet = ({planetURI}) => {

  const fetchPlanet = async uri => {
    return await fetch(planetURI);
  };

  let [planet, setPlanet] = useState({});

  useEffect(() => {
    fetchPlanet(planetURI)
      .then(res => res.json())
      .then(res => {
        if (res) {
          const {name, climate, terrain} = res;
          setPlanet({
            name,
            climate,
            terrain
          })
        }
      })
      .catch(console.error);
  }, []);

  return !planet ?
    <h5>Loading planet...</h5> :
    (
      <>
        <b>Planet</b>
        <br/>
        <div style={{paddingLeft: "10px"}}>
          <span>Name: {planet.name}</span>
          <br/>
          <span>Climate: {planet.climate}</span>
          <br/>
          <span>Terrain: {planet.terrain}</span>
        </div>
      </>
    )
};

Planet.propTypes = {
  planetURI: PropTypes.string.isRequired
};