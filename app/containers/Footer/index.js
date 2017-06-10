import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';

import { Controls, Progress } from '../../components/Utils';

export class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
  };

  render() {
    return (
      <div className="[ c-footer ]">
        <div className="[ c-footer__inner ]">
          <div className="[ c-footer__controls ]">
            <Controls/>
          </div>
          <div className="[ c-footer__progress ]">
            <Progress/>
          </div>
        </div>
      </div>
    );
  };

  getStyle() {
    return {
      backgroundColor:'blue',
      position:'absolute',
      height:100,
      bottom:0,
      left:0,
      right:0,
    };
  };
}

const mapStateToProps = createSelector({});

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {};
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Footer);
