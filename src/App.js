import React from 'react';

import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

import ThemeContextProvider from './contexts/theme-context';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
        <LanguageToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
