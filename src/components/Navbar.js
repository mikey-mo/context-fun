import React from 'react';
import { ThemeContext } from '../contexts/theme-context';
import Themes from '../constants/themes';
import Languages from '../constants/languages';

const Navbar = () => (
  // GOOD FOR FUNCTIONAL COMPS
  <ThemeContext.Consumer>{context => {
    const { theme, language } = context;
    const styleTheme = Themes[theme];
    const appLang = Languages[language];
    const { title, home, about, contact } = appLang;
    return (
      <nav style={{ background: styleTheme.bg, color: styleTheme.syntax }}>
        <h1>{title}</h1>
        <ul>
          <li>{home}</li>
          <li>{about}</li>
          <li>{contact}</li>
        </ul>
      </nav>
    )
  }}</ThemeContext.Consumer>
);
 
export default Navbar;