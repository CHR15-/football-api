import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class PageLayout extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;