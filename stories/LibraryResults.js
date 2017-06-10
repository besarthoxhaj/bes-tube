import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import LibraryResults from '../app/components/LibraryResults';
import mockQuery from '../data/GET.LIBRARY.ALL.json';

storiesOf('LibraryResults',module)
  .add('Empty', () => {
    return (
      <Wrapper>
        <LibraryResults/>
      </Wrapper>
    );
  })
  .add('Single', () => {
    return (
      <Wrapper>
        <LibraryResults
          libraryRes={mockQuery['data']['results']}
        />
      </Wrapper>
    );
  })
