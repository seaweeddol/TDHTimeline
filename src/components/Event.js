import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Event.css';

const Event = (props) => {

  return (
    <div className="event">
      <p>Act {props.act}</p>
      <p>{props.title}</p>
    </div>
  )
}

export default Event;