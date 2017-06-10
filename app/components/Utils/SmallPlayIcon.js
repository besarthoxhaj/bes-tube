import React from 'react';

export default class SmallPlayIcon extends React.Component {

  static defaultProps = {
    onClick: () => console.log('CLICK PLAY'),
    isPlaying: false,
  };

  render() {
    return (
      <div className="[ c-library-paly-icon ]" onClick={this.props.onClick}>
        {this.props.isPlaying
          ? <svg className="[ pause ]" data-svg-colour="fill" role="img">
              <use xlinkHref="#pause"></use>
            </svg>
          : <svg className="[ play ]" data-svg-colour="fill" role="img">
              <use xlinkHref="#play"></use>
            </svg>
        }
      </div>
    );
  };
};
