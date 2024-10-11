import React from 'react';
import { Layout } from 'antd'; // Adjust this based on your component library
import LeftSider from './LeftSider';
const { Header, Sider, Content, Footer } = Layout;

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
  <Footer>footer</Footer>
</Layout>
    </div>
  );
}

export default App;
