import React from 'react';
import LiveCodeBlock from './LiveCodeBlock.js';
import StaticCodeBlock from './StaticCodeBlock.js';

export default ({
  children,
  render,
  className,
  live = false,
  renderTheme = 'Default',
}) => {
  return live ? (
    <LiveCodeBlock render={render}>{children}</LiveCodeBlock>
  ) : (
    <StaticCodeBlock className={className}>{children}</StaticCodeBlock>
  );
};
