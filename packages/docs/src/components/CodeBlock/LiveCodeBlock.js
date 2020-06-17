import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Components from '@coreym/benchmark';
import { Box } from '@coreym/benchmark';
import PreviewFrame from './PreviewFrame.js';
import css from './CodeBlock.module.css';
import codeTheme from './themes/default.js';

export default ({ children, render, renderTheme = 'Default' }) => {
  const [showEditor, toggleCode] = useState(false);

  function Editor() {
    return (
      <div className={css.code}>
        <LiveEditor className={css.editor} />
        <div className={css.codeUtils}>
          <span>Copy</span>
        </div>
      </div>
    );
  }

  if (render) {
    return (
      <Box border="1" borderColor="n.300">
        <LiveProvider code={children.trim()}>
          <PreviewFrame onToggleCode={() => toggleCode(!showEditor)}>
            <LivePreview className={css.preview} />
          </PreviewFrame>
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box
      border="1"
      borderRadius="lg"
      borderColor="n.200"
      overflow="hidden"
      mb="4"
      mt="2"
    >
      <LiveProvider
        code={children.trim()}
        scope={{ ...Components }}
        theme={codeTheme}
      >
        <PreviewFrame
          onToggleCode={() => toggleCode(!showEditor)}
          theme={renderTheme}
        >
          <div className={css.codeframe}>
            <LivePreview className={css.preview} />
          </div>
        </PreviewFrame>
        {showEditor ? <Editor /> : null}
        <LiveError className={css.pre} />
      </LiveProvider>
    </Box>
  );
};
