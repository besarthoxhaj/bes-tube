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
      <a
        data-video-click={this.props.videoId}
        style={{cursor:'pointer'}}
        onClick={() => this.props.sendDownload(this.props.videoId)}
      >
        <div style={this.getStyleCont()}>
          <img src={this.props.thumbnail} />
          <span>
            {this.props.title}
          </span>
        </div>
      </a>
    );
  };

  getStyleCont() {
    return {
      backgroundColor: utils.getColor(),
      height: 200,
    };
  };

  getStyle() {
    return {};
  };
}
