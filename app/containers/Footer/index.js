import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';

class Footer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <span>Footer</span>
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
