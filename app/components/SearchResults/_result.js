import React from 'react';

import * as utils from '../../utils';
import { ImgThumbnail } from '../Utils';

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
        style={this.getStyleCont()}
      >
        <ImgThumbnail
          imgSrc={this.props.thumbnail}
          onClick={() => this.props.sendDownload(this.props.videoId)}
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
