import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeProvider, themes } from '@coreym/benchmark';
import css from './PreviewFrame.module.css';

const themeArray = Object.keys(themes).map((key) => {
  return themes[key];
});

function PreviewFrame({ children, onToggleCode }) {
  const [theme, setTheme] = useState(0);

  function handleThemeChange() {
    setTheme((theme + 1) % themeArray.length);
  }

  return (
    <div className={classnames(css.codeframe, global.base)}>
      <ThemeProvider theme={themeArray[theme]}>
        <div className={css.toolbar}>
          <div className={css.codeUtils}>
            <div>
              <button className={css.util}>Playroom</button>
              <button className={css.util} onClick={() => onToggleCode()}>
                Code
              </button>
            </div>
            <div>
              <button className={css.util} onClick={handleThemeChange}>
                Theme
              </button>
            </div>
          </div>
        </div>
        <div className={css.content}>{children}</div>
      </ThemeProvider>
    </div>
  );
}

PreviewFrame.propTypes = {
  themes: PropTypes.array,
  theme: PropTypes.string,
};

PreviewFrame.defaultProps = {
  themes: ['Default', 'Dark', 'Beige'],
  theme: 'Default',
};

export default PreviewFrame;
