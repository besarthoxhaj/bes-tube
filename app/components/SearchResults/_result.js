import React from 'react';
import * as utils from '../../utils';

export default class Result extends React.Component {

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
    this.getStyleCont = this.getStyleCont.bind(this);
  };

  render() {
    return (
      <div
        className="[ c-search-item ]"
        data-video-click={this.props.videoId}
        onClick={() => this.props.sendDownload(this.props.videoId)}
        style={this.getStyleCont()}
      >
        <div
          className="[ c-search-item__image ]"
          style={{
            backgroundImage:`url(${this.props.thumbnail})`
          }}
        />
        <div className="[ c-search-item__desc ]">
          <p>
            {this.props.title}
          </p>
        </div>
      </div>
    );
  };

  getStyleCont() {
    return {
      backgroundColor: utils.getColor(),
    };
  };

  getStyle() {
    return {};
  };
}
