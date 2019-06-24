
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/theme-context';
import Themes from '../constants/themes';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttons: {
    border: 0,
    margin: '10px',
    padding: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
};

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme, toggleTheme } = this.context;
    const styleTheme = Themes[theme];

    return (
      <div
        style={{
          ...style.container,
          background: styleTheme.bg,
        }}
      >
        <button
          style={{
            ...style.buttons,
            background: styleTheme.ui,
            color: styleTheme.syntax,
          }}
          onClick={() => toggleTheme('dark')}
        >
          Theme Dark
        </button>
        <button
          style={{
            ...style.buttons,
            background: styleTheme.ui,
            color: styleTheme.syntax,
          }}
          onClick={() => toggleTheme('light')}
        >
          Theme Light
        </button>
      </div>
    )
  }
}
