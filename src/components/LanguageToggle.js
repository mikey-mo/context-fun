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
    padding: '4px',
    paddingLeft: '6px',
    paddingRight: '6px',
  },
}

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme, toggleLanguage } = this.context;
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
          onClick={() => toggleLanguage('english')}
        >
          {'English'}
        </button>
        <button
          style={{
            ...style.buttons,
            background: styleTheme.ui,
            color: styleTheme.syntax,
          }}
          onClick={() => toggleLanguage('spanish')}
        >
          {'Spanish'}
        </button>
      </div>
    )
  }
}
