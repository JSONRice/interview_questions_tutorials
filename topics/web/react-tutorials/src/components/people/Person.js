import PropTypes from "prop-types";
import React from "react";
import { Planet } from "../planet/Planet";

export const Person = ({name, eye_color, homeworldURL, index}) => {
  return (
    <React.Fragment key={`person-${index}`}>
      <li style={{textAlign: 'left'}} key={`person-name-${index}`}>
        Name: {name}
      </li>
      <li style={{textAlign: 'left'}} key={`person-eye-color-${index}`}>
        Eye Color: <span style={{color: `${eye_color}`}}>{eye_color}</span>
      </li>
      <li style={{textAlign: 'left'}} key={`person-homeworld-${index}`}>
        <Planet planetURI={homeworldURL}/>
      </li>
      <hr/>
    </React.Fragment>
  )

};

Person.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  homeworldURL: PropTypes.string.isRequired
};