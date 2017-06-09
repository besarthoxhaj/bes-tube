import React from 'react';

export default class Wrapper extends React.Component {
  render() {
    return (
      <div style={this.getStyle()}>
        <div
          className="[ u-hidden ]"
          dangerouslySetInnerHTML={this.getSvgSymbols()}
        />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  };

  getStyle() {
    return {
      margin:'auto',
      padding:20,
      ...this.props.style,
    };
  };

  getSvgSymbols() {
    return {
      __html:require('../assets/svg-symbols.js')
    };
  };
};
