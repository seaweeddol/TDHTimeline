import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

const Event = (props) => {

  return (
    <div className="event">
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Event;