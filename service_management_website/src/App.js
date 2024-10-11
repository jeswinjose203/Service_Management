import React from 'react';
import { Layout } from 'antd'; // Adjust this based on your component library
import LeftSider from './LeftSider';
import AppFooter from './Footer';
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
  <Header>header</Header>
  <Layout>
    <LeftSider/>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <AppFooter/>
</Layout>
    </div>
  );
}

export default App;
