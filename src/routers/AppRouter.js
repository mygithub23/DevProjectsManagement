import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import ProjectItemPage from '../components/ProjectItemPage';
import ProjectPage from '../components/ProjectPage';
import App from '../App';
import DeveloperPage from '../components/DeveloperPage';
import DeveloperItemPage from '../components/DeveloperItemPage';
import StackPage from '../components/StackPage';
import StackItemPage from '../components/StackItemPage';




const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/manage" component={App}  />
        <Route path="/project" component={ProjectPage} exact={true} />
        <Route path="/project/:id" component={ProjectItemPage} />
        <Route path="/developer" component={DeveloperPage} exact={true} />
        <Route path="/developer/:id" component={DeveloperItemPage} />
        <Route path="/stack" component={StackPage} exact={true} />
        <Route path="/stack/:id" component={StackItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
