import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector as createSelector } from 'reselect';
import * as R from 'ramda';

import c from '../../constants';
import * as homeSel from './selectors';
import * as modalActions from '../Modal/actions';
import SearchResult from '../../components/SearchResult';
import SearchResults from '../../components/SearchResults';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          data-search-input="changeText"
          type='text'
          onChange={this.updateSearch}
          onKeyDown={this.sendSearch}
          value={this.state.searchValue}
        />
        <SearchResults
          searchRes={this.props.searchRes}
        />
      </div>
    );
  };

  updateSearch({target:{value}}) {
    this.setState({searchValue:value});
  };

  sendSearch(evt) {
    if(evt['key'] === 'Enter') {
      evt.preventDefault();
      this.props.sendSearch(this.state['searchValue']);
    }
  };
}

export const mapStateToProps = createSelector({
  searchRes: homeSel.getSearchRes(),
  isLoadingRes: homeSel.isLoadingRes(),
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
    sendSearch: (search:string) => {
      dispatch({
        type: c.POST_SEARCH,
        value: search,
      });
    },
    sendDownload(videoId:string) {
      dispatch({
        type: c.POST_DOWNLOAD,
        value: videoId,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Home);
