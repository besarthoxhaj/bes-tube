import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { ImgThumbnail } from '../app/components/Utils';
import { SmallPlayIcon } from '../app/components/Utils';

storiesOf('Utils',module)
  .add('ImgThumbnail', () => {
    return (
      <Wrapper>
        <ImgThumbnail/>
      </Wrapper>
    );
  })
  .add('SmallPlayIcon', () => {

    // create a wrapper so to play
    // with the component
    class PlayWrapper extends React.Component {
      constructor() {
        super();
        this.state = {is:false};
      };
      render() {
        const { is } = this.state;
        return (
          <Wrapper>
            <SmallPlayIcon
              isPlaying={is}
              onClick={() => this.setState({is:!is})}
            />
          </Wrapper>
        );
      };
    };

    return (
      <PlayWrapper/>
    );
  })
