import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import Settings from './Settings'; // Import the Settings component

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>
            <Routes>
              <Route path="/" element={<div>Main content</div>} />
              <Route path="/settings" element={<Settings />} /> {/* Route to Settings */}
            </Routes>
          </Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
