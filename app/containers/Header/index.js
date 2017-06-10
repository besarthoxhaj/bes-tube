import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector as createSelector } from 'reselect';
import { push } from 'react-router-redux';

export class HeaderComp extends React.Component {

  static defaultProps = {
    navigateTo: (href) => console.log('NAVIGATE TO:',href)
  };

  render() {
    return (
      <div className="[ c-header ]">
        <div className="[ c-header__inner ]">
          <nav className="[ c-header__nav ]">
            <ul className="[ c-header__list ]">
              <li className="[ c-header__list-item ]">
                <a
                  className="[ c-header__link ]"
                  onClick={() => this.props.navigateTo('/')}
                >
                  Search
                </a>
              </li>
              <li className="[ c-header__list-item ]">
                <a
                  className="[ c-header__link ]"
                  onClick={() => this.props.navigateTo('/library')}
                >
                  Library
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
}

const mapStateToProps = createSelector({});

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {

  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    navigateTo: (href:string) => {
      dispatch(push(href));
    }
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(HeaderComp);
