import React, { Component } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import Themes from '../constants/themes';
import Languages from '../constants/languages';

class BookList extends Component {
  // GOOD FOR FUNCTIONAL COMPONENTS
  static contextType = ThemeContext;
  
  render() {
    const { theme, language } = this.context;
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
    );
  }
}
 
export default BookList;