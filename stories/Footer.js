import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import { Footer } from '../app/containers/Footer';

storiesOf('Footer',module)
  .add('Default', () => {
    return (
      <Wrapper>
        <Footer/>
      </Wrapper>
    );
  })
