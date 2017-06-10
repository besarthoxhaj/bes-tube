import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Home from '../Home';
import Library from '../Library';
import NotFound from '../NotFound';

export class RouterComp extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/library' component={Library} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  };
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
  };
};

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterComp);
