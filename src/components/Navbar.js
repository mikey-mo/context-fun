import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { LanguageContext } from '../contexts/language-context';
import Themes from '../constants/themes';
import Languages from '../constants/languages';

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext);
  const styleTheme = Themes[theme];
  const appLang = Languages[language];
  const { bg, syntax } = styleTheme;
  const { title, home, about, contact } = appLang;
  return (
    <nav style={{ background: bg, color: syntax }}>
      <h1>{title}</h1>
      <ul>
        <li>{home}</li>
        <li>{about}</li>
        <li>{contact}</li>
      </ul>
    </nav>
  )
}
 
export default Navbar;