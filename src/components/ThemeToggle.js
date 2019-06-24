
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context';
import { LanguageContext } from '../contexts/language-context';
import Themes from '../constants/themes';
import Languages from '../constants/languages';

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

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const appLang = Languages[language];
  const styleTheme = Themes[theme];
  const { darkTheme, lightTheme } = appLang;
  const { bg, ui, syntax } = styleTheme;

  return (
    <div
      style={{
        ...style.container,
        background: bg,
      }}
    >
      <button
        style={{
          ...style.buttons,
          background: ui,
          color: syntax,
        }}
        onClick={() => toggleTheme('dark')}
      >
        {darkTheme}
      </button>
      <button
        style={{
          ...style.buttons,
          background: ui,
          color: syntax,
        }}
        onClick={() => toggleTheme('light')}
      >
        {lightTheme}
      </button>
    </div>
  )
}

export default ThemeToggle;
