import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';

import './login.less';

class Login extends Component {
  state = {
    imgCodeUrl: '',
  };
  getImgCode = () => {
    let num = Math.ceil (Math.random () * 10);
    this.setState ({
      imgCodeUrl: `http://47.103.36.64:8081/v1/sys/login/getCaptcha?` + num,
    });
  };
  componentWillMount () {
    this.getImgCode ();
  }
  render () {
    return (
      <div className="login-container">
        <div className="header">
          <img
            src="https://yscyoss.oss-cn-shanghai.aliyuncs.com/System/login/logo.png"
            alt
          />
          <span>安徽四建控股集团后台管理系统</span>
        </div>
        <div className="home">
          <div className="login-form">
            <div className="login-form-title">安徽四建控股集团后台管理系统</div>

            <Row className="form-field mt-32">
              <span className="title">用户名</span>
              <Input
                placeholder="请输入用户名"
                v-model="userName"
                maxlength="15"
                minlength="5"
              />

            </Row>
            <Row className="form-field mt-16">
              <span className="title">密码</span>
              <Input
                type="password"
                placeholder="请输入密码"
                v-model="userPassword"
                maxlength="15"
                minlength="5"
              />

            </Row>
            <Row
              className="form-field mt-16"
              type="flex"
              justify="space-between"
            >
              <el-checkbox v-model="isRemember">记住密码</el-checkbox>
              <span className="forget" onClick="forgetPwd">忘记密码</span>
            </Row>
            <Row className="form-field mt-16">
              <Col span={16} className="mt-8">
                <Input placeholder="请输入验证码" v-model="imageCode" />

              </Col>
              <Col span={8} className="tr mt-8">
                <img
                  className="img-code"
                  // src={imgCodeUrl}
                  alt=""
                  onClick="getImgCode"
                />
              </Col>
            </Row>
            <Row className="form-field mt-16">
              <Button type="primary" className="login-btn" onClick="login">
                登录
              </Button>
            </Row>
          </div>
        </div>
        <div className="footer">
          <span>
            © 2019 安徽四建控股集团有限公司 版权所有 皖ICP备06014286号
            技术支持：安徽物迅科技
          </span>
        </div>
      </div>
    );
  }
}

const WrapLogin = Form.create () (Login);
export default WrapLogin;
