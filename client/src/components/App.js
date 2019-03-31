import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Parent from './Parent';

const App = () => {
  return (
    <div className="container">
    <BrowserRouter>
    <Header />
      <Route path="/" exact component={Parent} />
    </BrowserRouter>
    </div>
  );
}

export default App;
