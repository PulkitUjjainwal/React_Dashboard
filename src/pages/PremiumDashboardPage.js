import React from 'react';
import { Table } from 'antd';
import './PremiumDashboardPage.css';

const PremiumDashboardPage = () => {
  const overallPremiumData = [
    {
      product: 'Product A',
      totalPremium: 10000,
    },
    {
      product: 'Product B',
      totalPremium: 20000,
    },
    // Add more overall premium data objects...
  ];

  const paPremiumData = [
    {
      product: 'Product A',
      totalPremium: 5000,
    },
    {
      product: 'Product B',
      totalPremium: 10000,
    },
    // Add more PA premium data objects...
  ];

  const criticalIllnessPremiumData = [
    {
      product: 'Product A',
      totalPremium: 3000,
    },
    {
      product: 'Product B',
      totalPremium: 5000,
    },
    // Add more Critical Illness premium data objects...
  ];

  const hospicashPremiumData = [
    {
      product: 'Product A',
      totalPremium: 2000,
    },
    {
      product: 'Product B',
      totalPremium: 4000,
    },
    // Add more Hospicash premium data objects...
  ];

  const cancerCarePremiumData = [
    {
      product: 'Product A',
      totalPremium: 2500,
    },
    {
      product: 'Product B',
      totalPremium: 3500,
    },
    // Add more Cancer Care premium data objects...
  ];

  const cardiacCarePremiumData = [
    {
      product: 'Product A',
      totalPremium: 1500,
    },
    {
      product: 'Product B',
      totalPremium: 2500,
    },
    // Add more Cardiac Care premium data objects...
  ];

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Total Premium',
      dataIndex: 'totalPremium',
      key: 'totalPremium',
    },
  ];

  return (
    <div className="premium-dashboard-container">
      <h1 className="dashboard-heading">Premium Dashboard</h1>

      <div className="premium-table-container">
        <h2 className="table-heading">Overall (Product - Total Premium)</h2>
        <Table className="premium-table" dataSource={overallPremiumData} columns={columns} pagination={false} />
      </div>

      <div className="premium-table-container">
        <h2 className="table-heading">PA (Total Premium)</h2>
        <Table className="premium-table" dataSource={paPremiumData} columns={columns} pagination={false} />
      </div>

      <div className="premium-table-container">
        <h2 className="table-heading">Critical Illness (Total Premium)</h2>
        <Table className="premium-table" dataSource={criticalIllnessPremiumData} columns={columns} pagination={false} />
      </div>

      <div className="premium-table-container">
        <h2 className="table-heading">Hospicash (Total Premium)</h2>
        <Table className="premium-table" dataSource={hospicashPremiumData} columns={columns} pagination={false} />
      </div>

      <div className="premium-table-container">
        <h2 className="table-heading">Cancer Care (Total Premium)</h2>
        <Table className="premium-table" dataSource={cancerCarePremiumData} columns={columns} pagination={false} />
      </div>

      <div className="premium-table-container">
        <h2 className="table-heading">Cardiac Care (Total Premium)</h2>
        <Table className="premium-table" dataSource={cardiacCarePremiumData} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default PremiumDashboardPage;
