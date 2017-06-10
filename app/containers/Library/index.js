import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector as createSelector } from 'reselect';
import * as R from 'ramda';

import c from '../../constants';
import * as librarySel from './selectors';
import * as modalActions from '../Modal/actions';
import LibraryResults from '../../components/LibraryResults';

class Library extends React.Component {
  render() {
    return (
      <div>
        <LibraryResults
          libraryRes={this.props.library}
        />
      </div>
    );
  };
};

export const mapStateToProps = createSelector({
  library: librarySel.getLibrary(),
  isLoading: librarySel.isLoading(),
});

export const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {

  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Library);
