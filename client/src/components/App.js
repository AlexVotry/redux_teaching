import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';

const App = () => {
  return (
    <div className="container">
    <BrowserRouter>
    <Header />
      <Route path="/" exact component={Landing} />
    </BrowserRouter>
    </div>
  );
}

export default App;
