import React, {Component} from 'react';
import './header.less';
import {Avatar, Divider, Modal, Button, message} from 'antd';
const {confirm} = Modal;
export default class header extends Component {
  confirmLogout = () => {
    confirm ({
      title: '您确定要退出?',
      okText: '确认',
      cancelText: '取消',
      onOk () {
        alert (123);
      },
      onCancel () {
        message.warning ('已取消退出');
      },
    });
  };
  render () {
    return (
      <div className="header">
        <Avatar icon="user" />
        <span className="user">
          您好，admin
        </span>
        <Divider type="vertical" />
        <span className="logout" onClick={this.confirmLogout}>
          退出
        </span>
      </div>
    );
  }
}
