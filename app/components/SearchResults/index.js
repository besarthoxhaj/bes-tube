import React from 'react';

import * as utils from '../../utils';
import Result from './_result';

export default class SearchResults extends React.PureComponent {
  render() {

    console.log(`this.props`,this.props);

    if(this.props.searchRes === undefined) {
      return (
        <div>
          Type and search a video to start
        </div>
      );
    }

    return (
      <div>
        {this.props.searchRes.map(elm => {
          return (
            <Result
              key={`search-result-${elm['id']['videoId']}`}
              title={elm['snippet']['title']}
              thumbnail={elm['snippet']['thumbnails']['medium']['url']}
              videoId={elm['id']['videoId']}
              sendDownload={this.props.sendDownload}
            />
          );
        })}
      </div>
    );
  };
}
