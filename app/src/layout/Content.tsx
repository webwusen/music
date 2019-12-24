import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Leftmenu from './Leftmenu';
import Discover from '@/pages/discover/Discover';
import Fm from '@/pages/fm/Fm'

class Content extends Component {
  render() {
    return (
      <div className="content" >
        <Leftmenu />
        <div className="view">
          {this.props.children}
          <HashRouter>
            <Switch>
              <Route path="/discover" component={Discover} />
              <Route path="/fm" component={Fm} />
              <Redirect exact from="/" to="/discover" />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default Content;
