import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './Tag';

storiesOf('Docs', module).add('Tag', () => {
  const style = {
    display: 'grid',
    gridRowGap: '10px'
  };

  return (
    <div style={style}>
      <Tag type="success">Success</Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="danger">Danger</Tag>
    </div>
  );
});
