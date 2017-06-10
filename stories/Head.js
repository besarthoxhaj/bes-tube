import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { HeaderComp } from '../app/containers/Header';

storiesOf('Header',module)
  .add('Default', () => {
    return (
      <Wrapper>
        <HeaderComp/>
      </Wrapper>
    );
  })
