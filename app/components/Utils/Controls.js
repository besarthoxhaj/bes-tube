import React from 'react';

export default class Controls extends React.Component {

  static defaultProps = {
    next: () => console.log('NEXT'),
    prev: () => console.log('PREV'),
    title: 'Foo',
    src: 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/viper.mp3',
    isPlaying: false,
  };

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="[ c-controls ]">
        <div className="[ c-controls__prev ]">
          <svg className="[ next-prev ]" data-svg-colour="fill" role="img">
            <use xlinkHref="#next-prev"></use>
          </svg>
        </div>
        <div className="[ c-controls__play-pause ]">
          {this.getPlaying()}
        </div>
        <div className="[ c-controls__next ]">
          <svg className="[ next-prev ]" data-svg-colour="fill" role="img">
            <use xlinkHref="#next-prev"></use>
          </svg>
        </div>
      </div>
    );
  };

  getPlaying() {
    if(this.props.isPlaying) {
      return (
        <svg data-svg-colour="fill" role="img">
          <use xlinkHref="#pause"></use>
        </svg>
      );
    } else {
      return (
        <svg data-svg-colour="fill" role="img">
          <use xlinkHref="#play"></use>
        </svg>
      );
    }
  };
};
