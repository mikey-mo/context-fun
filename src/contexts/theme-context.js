import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'light',
    language: 'english',
  }
  

  toggleTheme = (value) => this.setState({ theme: value });
  toggleLanguage = (value) => this.setState({ language: value });

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
          toggleLanguage: this.toggleLanguage,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
