import React from 'react';

import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

import ThemeContextProvider from './contexts/theme-context';
import AuthContextProvider from './contexts/auth-context';
import LanguageContextProvider from './contexts/language-context';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <LanguageContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
            <LanguageToggle />
          </LanguageContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
