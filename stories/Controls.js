import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { Controls } from '../app/components/Utils';

storiesOf('Controls',module)
  .add('Default', () => {
    return (
      <Wrapper>
        <Controls/>
      </Wrapper>
    );
  })
