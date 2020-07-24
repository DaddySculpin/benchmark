import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box } from '@coreym/benchmark';
import codeTheme from './themes/default.js';

export default function StaticCodeBlock({ className, children, language }) {
  const lang = language || className.replace(/language-/, '') || 'jsx';
  return (
    <Highlight
      {...defaultProps}
      theme={codeTheme}
      code={children.trim()}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Box
            as="pre"
            className={className}
            style={{
              ...style,
              overflowY: 'auto',
              padding: '20px',
              borderRadius: '8px',
              fontSize: '16px',
              marginBottom: '12px',
            }}
          >
            {/* need to have an inline block to ensure parents padding works */}
            <div style={{ display: 'inline-block' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </div>
          </Box>
        );
      }}
    </Highlight>
  );
}
