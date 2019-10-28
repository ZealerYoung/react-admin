import React, {Component} from 'react';
import './leftNav.less';
import {Menu} from 'antd';
import menuConfig from '../../config/menuConfig';
import {withRouter, Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class leftNav extends Component {
  state = {
    currentPath: '',
  };
  componentWillMount () {
    const menuList = this.renderMenu (menuConfig);
    let currentPath = this.props.location.pathname;
    this.setState ({
      menuList,
      currentPath,
    });
  }
  //使用递归
  renderMenu = data => {
    return data.map (item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title} popupClassName={'nav-sub'}>
            {this.renderMenu (item.children)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={item.key} title={item.title}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </MenuItem>
        );
      }
    });
  };
  render () {
    const path = this.props.location.pathname;
    return (
      <Menu mode="inline" selectedKeys={[path]} theme="dark">
        {this.state.menuList}
      </Menu>
    );
  }
}

export default withRouter (leftNav);
