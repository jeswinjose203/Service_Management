import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header'; // Your custom Header component
// import LeftSider from './LeftSider'; // Left sidebar component
import MainContent from './MainContent'; // Main content component
import Settings from './Settings'; // Settings component
import JobDetails from './JobDetails'; // Job details component
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
            {/* Left Sidebar */}
            {/* <LeftSider /> */}

            {/* Main Content Area with Routes */}
            <Content style={{ padding: '24px', background: '#fff' }}>
              <Routes>
                <Route path="/" element={<MainContent />} /> {/* Main Page Route */}
                <Route path="/settings" element={<Settings />} /> {/* Settings Page Route */}
                <Route path="/job/:id" element={<JobDetails />} /> {/* Job Details Page Route */}
              </Routes>
            </Content>

            {/* Right Sidebar */}
            {/* Your Right Sidebar can be added here if needed */}
          </Layout>

          {/* Footer */}
          <AppFooter />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
