import React from 'react';
import { Table } from 'antd';
import './SalesDashboardPage.css';

const SalesDashboardPage = () => {
  const overallSalesData = [
    {
      product: 'Product A',
      totalSales: 100,
    },
    {
      product: 'Product B',
      totalSales: 200,
    },
    // Add more overall sales data objects...
  ];

  const paSalesData = [
    {
      product: 'Product A',
      totalSales: 50,
    },
    {
      product: 'Product B',
      totalSales: 100,
    },
    // Add more PA sales data objects...
  ];

  const criticalIllnessSalesData = [
    {
      product: 'Product A',
      totalSales: 30,
    },
    {
      product: 'Product B',
      totalSales: 50,
    },
    // Add more Critical Illness sales data objects...
  ];

  const hospicashSalesData = [
    {
      product: 'Product A',
      totalSales: 20,
    },
    {
      product: 'Product B',
      totalSales: 40,
    },
    // Add more Hospicash sales data objects...
  ];

  const cancerCareSalesData = [
    {
      product: 'Product A',
      totalSales: 25,
    },
    {
      product: 'Product B',
      totalSales: 35,
    },
    // Add more Cancer Care sales data objects...
  ];

  const cardiacCareSalesData = [
    {
      product: 'Product A',
      totalSales: 15,
    },
    {
      product: 'Product B',
      totalSales: 25,
    },
    // Add more Cardiac Care sales data objects...
  ];

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Total Sales',
      dataIndex: 'totalSales',
      key: 'totalSales',
    },
  ];

  return (
    <div className="sales-dashboard-container">
      <h1 className="dashboard-heading">Sales Dashboard</h1>

      <div className="sales-table-container">
        <h2 className="table-heading">Overall (Product - Total Sales)</h2>
        <Table className="sales-table" dataSource={overallSalesData} columns={columns} pagination={false} />
      </div>

      <div className="sales-table-container">
        <h2 className="table-heading">PA (Total Sales)</h2>
        <Table className="sales-table" dataSource={paSalesData} columns={columns} pagination={false} />
      </div>

      <div className="sales-table-container">
        <h2 className="table-heading">Critical Illness (Total Sales)</h2>
        <Table className="sales-table" dataSource={criticalIllnessSalesData} columns={columns} pagination={false} />
      </div>

      <div className="sales-table-container">
        <h2 className="table-heading">Hospicash (Total Sales)</h2>
        <Table className="sales-table" dataSource={hospicashSalesData} columns={columns} pagination={false} />
      </div>

      <div className="sales-table-container">
        <h2 className="table-heading">Cancer Care (Total Sales)</h2>
        <Table className="sales-table" dataSource={cancerCareSalesData} columns={columns} pagination={false} />
      </div>

      <div className="sales-table-container">
        <h2 className="table-heading">Cardiac Care (Total Sales)</h2>
        <Table className="sales-table" dataSource={cardiacCareSalesData} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default SalesDashboardPage;
