import React from 'react';
import Home from './pages/Home';
import { BrowserRouteur, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouteur>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouteur>
    </div>
  );
};

export default App;