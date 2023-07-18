import React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, LineChartOutlined, AreaChartOutlined, SearchOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SalesDashboardPage from './pages/SalesDashboardPage';
import PremiumDashboardPage from './pages/PremiumDashboardPage';
import TransactionReportPage from './pages/TransactionReportPage';

const { Sider, Header, Content } = Layout;

const data = [
  {
    product_name: 'Product A',
    name: 'John Doe',
    phone_number: '1234567890',
    email: 'john.doe@example.com',
    premium_paid: 2000,
    insurer: 'Insurer A',
    sum_assured: 50000,
    date_of_insurance: '2022-01-01',
    date_of_expiry: '2023-01-01',
    policy_number: 'POL-001',
  },
  {
    product_name: 'Product B',
    name: 'Jane Smith',
    phone_number: '9876543210',
    email: 'jane.smith@example.com',
    premium_paid: 1500,
    insurer: 'Insurer B',
    sum_assured: 75000,
    date_of_insurance: '2022-02-01',
    date_of_expiry: '2023-02-01',
    policy_number: 'POL-002',
  },
  // Add more data objects...
];

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Email ID',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Premium Paid',
    dataIndex: 'premium_paid',
    key: 'premium_paid',
  },
  {
    title: 'Insurer',
    dataIndex: 'insurer',
    key: 'insurer',
  },
  {
    title: 'Sum Assured',
    dataIndex: 'sum_assured',
    key: 'sum_assured',
  },
  {
    title: 'Date of Insurance',
    dataIndex: 'date_of_insurance',
    key: 'date_of_insurance',
  },
  {
    title: 'Date of Expiry',
    dataIndex: 'date_of_expiry',
    key: 'date_of_expiry',
  },
  {
    title: 'Policy Number',
    dataIndex: 'policy_number',
    key: 'policy_number',
  },
];

const salesData = [
  {
    product: 'Product A',
    totalSales: 100,
  },
  {
    product: 'Product B',
    totalSales: 200,
  },
  // Add more sales data objects...
];

const premiumData = [
  {
    product: 'Product A',
    totalPremium: 5000,
  },
  {
    product: 'Product B',
    totalPremium: 8000,
  },
  // Add more premium data objects...
];

const transactionData = [
  {
    product_name: 'Product A',
    name: 'John Doe',
    phone_number: '1234567890',
    email: 'john.doe@example.com',
    premium_paid: 2000,
    insurer: 'Insurer A',
    sum_assured: 50000,
    date_of_insurance: '2022-01-01',
    date_of_expiry: '2023-01-01',
    policy_number: 'POL-001',
  },
  {
    product_name: 'Product B',
    name: 'Jane Smith',
    phone_number: '9876543210',
    email: 'jane.smith@example.com',
    premium_paid: 1500,
    insurer: 'Insurer B',
    sum_assured: 75000,
    date_of_insurance: '2022-02-01',
    date_of_expiry: '2023-02-01',
    policy_number: 'POL-002',
  },
  // Add more transaction data objects...
];

const salesTotal = salesData.reduce((total, item) => total + item.totalSales, 0);
const premiumTotal = premiumData.reduce((total, item) => total + item.totalPremium, 0);

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} theme="dark">
          <Menu mode="inline" defaultSelectedKeys={['0']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="0" icon={<SearchOutlined />}>
              <Link to="/">Search</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<LineChartOutlined />}>
              <Link to="/sales">Sales Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AreaChartOutlined />}>
              <Link to="/premium">Premium Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/transactions">Transaction Report</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px' }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/" element={<SearchPage data={data} columns={columns} />} />
                <Route path="/sales" element={<SalesDashboardPage salesData={salesData} salesTotal={salesTotal} />} />
                <Route path="/premium" element={<PremiumDashboardPage premiumData={premiumData} premiumTotal={premiumTotal} />} />
                <Route path="/transactions" element={<TransactionReportPage data={transactionData} columns={columns} />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
