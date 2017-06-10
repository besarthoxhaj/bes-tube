import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { ImgThumbnail } from '../app/components/Utils';

storiesOf('Utils',module)
  .add('ImgThumbnail', () => {
    return (
      <Wrapper>
        <ImgThumbnail/>
      </Wrapper>
    );
  })
