import React, {Component} from 'react';

import LeftNav from '../leftNav/leftNav';
import Header from '../header/header';
import Contentent from '../../pages/content/content';

import './admin.less';

import {Layout, Tag, Divider} from 'antd';
import {Switch, Route} from 'react-router-dom';

// import Bread from '../bread/bread';
import Table from '../table/table';
const {Sider, Content} = Layout;

const dataRow = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '名字',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 80,
    sorter: (a, b) => {
      return a.age - b.age;
    },
    // sortOrder: this.state.sortOrder,
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 80,
  },
  {
    title: '其他',
    dataIndex: 'other',
    width: 80,
  },
];

export default class Admin extends Component {
  constructor (props, context) {
    super (props, context);
    this.state = {
      dataSource: [],
      selectedRows: [],
      selectedRowKeys: [],
      sortOrder: '',
      pagination: {},
      current: 1,
      isShow: false,
      params: {},
    };
  }
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
            {/* <Bread /> */}
            <Table
              that={this}
              selecekeys={this.state.selectedRowKeys}
              rowSelection="checkbox"
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={this.state.pagination}
            />
            <Switch>
              <Route path="/setting" component={Contentent} />
              {/* <Redirect to="/setting" /> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
