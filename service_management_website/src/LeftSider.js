import React from 'react';
import { Layout, Menu, message } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

// Sample menu data
const menuData = [
  {
    key: 'sub1',
    title: 'Option 1',
    items: [
      { key: '1-1', title: 'Sub Option 1' },
      { key: '1-2', title: 'Sub Option 2' },
      { key: '1-3', title: 'Sub Option 3' },
    ],
  },
  {
    key: 'sub2',
    title: 'Option 2',
    items: [
      { key: '2-1', title: 'Sub Option 1' },
      { key: '2-2', title: 'Sub Option 2' },
      { key: '2-3', title: 'Sub Option 3' },
    ],
  },
  {
    key: 'sub3',
    title: 'Option 3',
    items: [
      { key: '3-1', title: 'Sub Option 1' },
      { key: '3-2', title: 'Sub Option 2' },
      { key: '3-3', title: 'Sub Option 3' },
    ],
  },
];

const LeftSider = () => {
  // Handler for menu item click
  const handleMenuClick = (key, title) => {
    // Display the key and title using Ant Design message
    message.info(`Clicked: ${title} (Key: ${key})`);
  };

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menuData.map((subMenu) => (
          <SubMenu key={subMenu.key} title={subMenu.title}>
            {subMenu.items.map((item) => (
              <Menu.Item
                key={item.key}
                onClick={() => handleMenuClick(item.key, item.title)}
              >
                {item.title}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default LeftSider;
