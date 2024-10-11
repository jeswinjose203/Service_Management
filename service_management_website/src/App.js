import React from 'react';
import { Layout } from 'antd';
import LeftSider from './LeftSider';
import AppFooter from './Footer';
import MainContent from './MainContent';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        {/* Header */}
        <Header style={{ background: '#fff', padding: 0 }}>
          <h2 style={{ textAlign: 'center' }}>Job Finder App</h2>
        </Header>

        {/* Main Layout with Sidebar and Content */}
        <Layout>
          {/* Left Sidebar */}
          <LeftSider />

          {/* Main Content Area */}
          <Content style={{ padding: '24px', background: '#fff' }}>
            <MainContent />
          </Content>

          {/* Right Sidebar */}
          <Sider width={200} style={{ background: '#fff' }}>
            <div>Right Sidebar Content</div>
          </Sider>
        </Layout>

        {/* Footer */}
        <AppFooter />
      </Layout>
    </div>
  );
}

export default App;
