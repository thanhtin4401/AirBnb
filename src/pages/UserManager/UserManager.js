import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getUserList } from '../../redux/manager/user';
import './UserManager.scss';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';
function UserManager() {
  const { Search } = Input;
  const dispatch = useDispatch();

  const [searchUser, setsearchUser] = useState(null);

  const onSearch = (value) => {
    setsearchUser(value);
  };

  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      <h1>Quản lí người dùng</h1>
      <Search allowClear enterButton="Search" size="large" onSearch={onSearch} />{' '}
      <div className="btn-css">
        <Button
          className="btn-add"
          onClick={() => {
            navigation('/Manager/AddUser');
          }}
        >
          Thêm người dùng
        </Button>
      </div>
      <UserTable search={searchUser} />
    </div>
  );
}

export default UserManager;
