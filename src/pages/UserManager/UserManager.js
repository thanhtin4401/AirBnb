import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../redux/manager/user';
import UserForm from './UserForm';
import './UserManager.scss';

function UserManager() {
  const handleSearch = () => {};

  const { Search } = Input;
  const dispatch = useDispatch();
  const allUserList = useSelector((state) => state.manager.user.allUser);
  console.log(allUserList);
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
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
  const data = [];
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
      <UserForm />
      <div className="btn-css">
        <Button className="btn-add">Thêm người dùng</Button>
        <Button className="btn-delete">Xoá người dùng</Button>
        <Button className="btn-update">Sửa thông tin</Button>
      </div>
      <Table
        columns={columns}
        dataSource={allUserList}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
}

export default UserManager;
