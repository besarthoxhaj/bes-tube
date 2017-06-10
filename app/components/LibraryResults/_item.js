import React from 'react';

import * as utils from '../../utils';
import { SmallPlayIcon } from '../Utils';

export default class Result extends React.Component {

  static defaultProps = {
    play: () => console.log('PLAY'),
    src: '',
    id: '',
    title: 'Your forgot the props',
  };

  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
    this.getStyleCont = this.getStyleCont.bind(this);
  };

  render() {
    return (
      <div
        className="[ c-library-item ]"
        data-library-item={this.props.id}
        style={this.getStyleCont()}
      >
        <SmallPlayIcon
          
        />
        <div className="[ c-library-item__desc ]">
          <p>{this.props.title}</p>
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
