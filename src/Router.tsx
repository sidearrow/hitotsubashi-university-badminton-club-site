import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Member from './pages/member/Index';
import Result from './pages/results/index/Index';
import League from './pages/results/league/Index';
import Index from './pages/index/Index';
import PageSantama from './pages/santama/index/Index';
import PageBbs from './pages/bbs/PageBbs';
import PageMizutori from './pages/mizutori/PageMizutori';
import PageMizutoriLogin from './pages/mizutori/PageMizutoriLogin';
import PageAbout from './pages/about/PageAbout';

/*
const MizutoriAuthRoute: React.FC = () => {
  return 
};
*/

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={PageAbout} />
      <Route exact path="/member" component={Member} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/result/league" component={League} />
      <Route exact path="/santama" component={PageSantama} />
      <Route exact path="/bbs" component={PageBbs} />
      <Route exact path="/mizutori">
        {false ? <PageMizutori /> : <Redirect to="/mizutori/login" />}
      </Route>
      <Route exact path="/mizutori/login" component={PageMizutoriLogin} />
    </Switch>
  );
}

export default Router;
