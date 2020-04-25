import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';
import Event from './Event';
import EVENTS from '../data/acts-events.json';

const Timeline = () => {

  const events = EVENTS.events.map(event => {
    return (
      <Event act={event.act} year={event.year} title={event.title} description={event.description}/>
    )
  })

  return (
    <div>
      {events}
    </div>
  )
}

export default Timeline;