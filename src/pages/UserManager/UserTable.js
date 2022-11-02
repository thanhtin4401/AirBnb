import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userService } from '../../services/userService';
import UserAction from './UserAction.js/UserAction';
import { columns } from './UserManagerUtils/userManager.utils';

function UserTable({ search }) {
  const allUserList = useSelector((state) => state.manager.user.allUser);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    setDataUser(allUserList);
  }, [allUserList]);

  useEffect(() => {
    userService
      .searchUser(search)
      .then((res) => {
        setDataUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataUser}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
}

export default UserTable;
