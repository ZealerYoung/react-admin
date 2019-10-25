import React, {Component} from 'react';

import LeftNav from '../leftNav/leftNav';
import Header from '../header/header';

import './admin.less';

import {Layout, Menu, Icon} from 'antd';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
const {Sider, Content} = Layout;

export default class Admin extends Component {
  render () {
    return (
      <Layout style={{height: '100%'}}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            {/* <Icon
              className="trigger"
              type={'menu-fold'}
              onClick={this.toggle}
            /> */}
          </Header>
          <Content
            style={{
              background: '#fff',
            }}
          >
            <Switch>
              {/* <Route path='/home' component={Home}/> */}
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
