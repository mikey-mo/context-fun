import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'book one', id: 1 },
    { title: 'book two', id: 2 },
    { title: 'book three', id: 3 },
    { title: 'book four', id: 4 },
  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
