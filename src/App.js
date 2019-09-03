import React from "react";
import { Route } from 'react-router-dom';

// STYLE
import './App.css';

// COMPONENTS
import Homepage from "./pages/Homepage/Homepage";
import Shop from './pages/Shop/Shop';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={Shop}/>
    </div>
  );
};

export default App;
