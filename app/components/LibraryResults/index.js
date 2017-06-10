import React from 'react';

import * as utils from '../../utils';
import Item from './_item';

export default class LibraryResults extends React.PureComponent {

  static defaultProps = {
    libraryRes: []
  };

  render() {

    if(this.props.libraryRes.length === 0) {
      return (
        <div className="[ c-library--empty ]">
          The library is empty. Go to search and
          add some songs or videos.
        </div>
      );
    }

    return (
      <div>
        {this.props.libraryRes.map(elm => {
          return (
            <Item
              key={`library-item-${elm['id']}`}
              title={elm['title']}
              description={elm['description']}
              src={elm['src']}
              play={this.props.play}
            />
          )
        })}
      </div>
    );
  };
}
