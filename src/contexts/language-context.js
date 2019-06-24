import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
  state = {
    language: 'english',
  }

  toggleLanguage = (value) => this.setState({ language: value });

  render() {
    const { children } = this.props;
    const { language } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          language,
          toggleLanguage: this.toggleLanguage,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContextProvider;
