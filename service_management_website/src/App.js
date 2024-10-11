import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header'; // Assuming this is your custom Header component
import LeftSider from './LeftSider'; // Left sidebar component
import MainContent from './MainContent'; // Main content component
import Settings from './Settings'; // Settings component
import AppFooter from './Footer'; // Footer component

const { Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          {/* Header */}
          <Header style={{ background: '#fff', padding: 0 }} />

          {/* Main Layout with Sidebar and Content */}
          <Layout>

              <LeftSider />


            {/* Main Content Area with Routes */}
            <Content style={{ padding: '24px', background: '#fff' }}>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Content>



          </Layout>

          {/* Footer */}
          <AppFooter />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
