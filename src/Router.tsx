import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Member from './pages/member/Index';
import Result from './pages/results/index/Index';
import League from './pages/results/league/Index';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Member} />
      <Route exact path="/result" component={Result} />
      <Route path="/result/league" component={League} />
    </Switch>
  );
}

export default Router;
