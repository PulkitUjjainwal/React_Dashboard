import React from 'react';
import { Table } from 'antd';
import './TransactionReportPage.css';

const TransactionReportPage = () => {
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
      sum_assured: 70000,
      date_of_insurance: '2021-12-15',
      date_of_expiry: '2022-12-15',
      policy_number: 'POL-002',
    },
    // Add more dummy data...
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
      render: (value) => `Rs. ${value.toFixed(2)}`,
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
      render: (value) => `Rs. ${value.toLocaleString()}`,
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

  return (
    <div className="transaction-report-page">
      <h1 className="transaction-report-page-heading">Transaction Report</h1>

      <Table
        className="transaction-report-table"
        dataSource={data}
        columns={columns}
        rowKey="policy_number"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default TransactionReportPage;
