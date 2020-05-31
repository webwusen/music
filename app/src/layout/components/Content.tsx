import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Leftmenu from './Leftmenu';
import Discover from '@/pages/discover/index';
import Fm from '@/pages/fm/index';
import styles from '@/layout/index.module.less';

const Content: React.FC = (props) => {
  return (
    <div className={`${styles['content']} theme-element-content`}>
      <Leftmenu />
      <div className={`${styles['view']}`}>
        {props.children}
        <HashRouter>
          <Switch>
            <Route path="/discover" component={Discover} />
            <Route path="/fm" component={Fm} />
            <Redirect exact from="/" to="/discover" />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
};

export default Content;
