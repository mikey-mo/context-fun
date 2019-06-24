import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { LanguageContext } from '../contexts/language-context';
import Themes from '../constants/themes';
import Languages from '../constants/languages';

const BookList = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext);
  const styleTheme = Themes[theme];
  const appLang = Languages[language];
  const { bookOne, bookTwo, bookThree } = appLang;
  return (
    <div style={{ background: styleTheme.bg, color: styleTheme.syntax }} className="book-list">
      <ul>
        <li style={{ background: styleTheme.ui }}>{bookOne}</li>
        <li style={{ background: styleTheme.ui }}>{bookTwo}</li>
        <li style={{ background: styleTheme.ui }}>{bookThree}</li>
      </ul>
    </div>
  )
}

export default BookList;
