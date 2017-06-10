import React from 'react';

export default class Progress extends React.Component {
  render() {
    return (
      <div className="[ c-progress ]">
        <div className="[ c-progress__passed ]">
          0:36
        </div>
        <div className="[ c-progress__wrapper ]">
          <div className="[ c-progress__background ]"/>
          <div className="[ c-progress__bar ]" style={{width:'33%'}}/>
          <div className="[ c-progress__handle ]" style={{left:55}}/>
        </div>
        <div className="[ c-progress__left ]">
          2:59
        </div>
      </div>
    );
  };
};
