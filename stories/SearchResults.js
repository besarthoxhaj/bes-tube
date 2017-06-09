import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from './_wrapper';
import SearchResults from '../app/components/SearchResults';
import mockQuery from '../data/GET.SEARCH.HELLO.json';

storiesOf('SearchResults',module)
  .add('Empty', () => {
    return (
      <Wrapper>
        <SearchResults/>
      </Wrapper>
    );
  })
  .add('Single', () => {
    return (
      <Wrapper>
        <SearchResults
          searchRes={mockQuery['data']['items']}
        />
      </Wrapper>
    );
  })
