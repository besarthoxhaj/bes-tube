import React from 'react';

export default class ImgThumbnail extends React.Component {

  static defaultProps = {
    onClick: () => console.log('CLICK IMG THUMBNAIL'),
    imgSrc: 'http://placekitten.com/1500/1000'
  };

  render() {
    return (
      <div className="[ c-img-thumbnail ]" onClick={this.props.onClick}>
        <div className="[ c-img-thumbnail__overlay ]">
          <div
            className="[ img ]"
            style={{backgroundImage:`url(${this.props.imgSrc})`}}
          />
        </div>
        <div className="[ c-img-thumbnail__content ]">
          <div className=" c-img-thumbnail__content-holder ]">
            <span className="[ svg ]">
              <svg className="download" data-svg-colour="fill" role="img">
                <use xlinkHref="#download"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  };
};
