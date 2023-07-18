import React, { useState } from 'react';
import { Input, Table } from 'antd';
import './SearchPage.css';

const { Search } = Input;

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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

  const handleSearch = (value) => {
    setSearchText(value);

    const filtered = data.filter((item) => {
      return Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="search-page-container">
      <h1 className="search-page-heading">Search</h1>

      <div className="search-bar-container">
        <Search
          placeholder="Search by keyword"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>

      <div className="search-results-container">
        <Table
          className="search-results-table"
          dataSource={filteredData.length > 0 ? filteredData : data}
          columns={columns}
          rowKey="policy_number"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
