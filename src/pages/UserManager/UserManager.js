import React from 'react';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
function UserManager() {
  const { Search } = Input;
  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'ID',
      key: 'ID',
      fixed: 'left',
    },
    {
      title: 'Tên',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '1',
    },
    {
      title: 'Pass',
      dataIndex: 'pass',
      key: '2',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: '3',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: '4',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: '5',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: '6',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <h1>Quản lí người dùng</h1>
      <Search
        className="mb-5"
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />{' '}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
}

export default UserManager;
