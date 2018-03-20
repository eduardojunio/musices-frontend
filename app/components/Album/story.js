import React from 'react';
import { storiesOf } from '@storybook/react';
import Album from './index';

storiesOf('Album', module)
  .add('Default', () => (
    <Album
      cover="https://i.scdn.co/image/34cb17fa4c905291aa579de84c9f9ff3933b0522"
      title="I Bet You Look Good On The Dance Floor"
    />
  ));
