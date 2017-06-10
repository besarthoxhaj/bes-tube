import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { Progress } from '../app/components/Utils';

storiesOf('Progress',module)
  .add('Default', () => {
    return (
      <Wrapper>
        <Progress/>
      </Wrapper>
    );
  })
