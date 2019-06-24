import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context';
import { LanguageContext } from '../contexts/language-context';
import Languages from '../constants/languages';
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
    width: '100px',
  },
}

const LanguageToggle = () => {
  const { theme } = useContext(ThemeContext)
  const { language, toggleLanguage } = useContext(LanguageContext);
  const styleTheme = Themes[theme];
  const appLang = Languages[language];
  const { ui, syntax, bg } = styleTheme;
  const { english, spanish } = appLang;

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
        onClick={() => toggleLanguage('english')}
      >
        {english}
      </button>
      <button
        style={{
          ...style.buttons,
          background: ui,
          color: syntax,
        }}
        onClick={() => toggleLanguage('spanish')}
      >
        {spanish}
      </button>
    </div>
  )
}

export default LanguageToggle;
