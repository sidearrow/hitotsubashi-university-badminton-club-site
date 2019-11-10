import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Member } from './pages/member/Index';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Member} />
    </Switch>
  );
}

export default Router;
