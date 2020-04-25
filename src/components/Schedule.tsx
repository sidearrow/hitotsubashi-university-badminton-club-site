import React from 'react';
import scheduleData from '../data/schedule.json';

const Schedule: React.FC = () => (
  <div className="timeline">
    {scheduleData.map(v => (
      <>
        <div className="timeline-item is-primary">
          <div className="timeline-marker is-primary"></div>
          <div className="timeline-content">
            <h5>{v.title}</h5>
            <p className="is-size-7">{v.date}</p>
            <p>{v.description}</p>
          </div>
        </div>
      </>
    ))}
  </div>
);

export default Schedule;
