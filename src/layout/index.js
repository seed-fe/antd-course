// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'
import GlobalHeader from "../component/GlobalHeader";
import logo from '../assets/logo.svg';
const { Header, Footer, Sider, Content } = Layout; // 这是es6中的解构赋值

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}> // 整个视口是100vh
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px', textAlign: 'center', lineHeight: '32px'}}>
          <Link to="/">
                <span>antd-course</span>
              </Link>
            </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
               <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
            <Link to="/puzzlecards">
              <Icon type="book" />
              <span>Puzzlecards</span>
            </Link>
            </Menu.Item>
              <Menu.Item key="3">
              <Link to="/list">
                <Icon type="table" />
                <span>List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/css-modules-with-less">
                <Icon type="table" />
                <span>Less</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/css-modules-with-antd">
                <Icon type="table" />
                <span>Override</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/locale">
                <Icon type="table" />
                <span>locale</span>
              </Link>
            </Menu.Item>
          </Menu>
          
        </Sider>
        <Layout >
        <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              // collapsed={collapsed}
              currentUser={{
                name: 'Serati Ma',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                userid: '00000001',
                notifyCount: 12,
              }}
              onCollapse={this.handleMenuCollapse}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}