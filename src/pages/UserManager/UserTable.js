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
    let fetchListUser = (search) => {
      userService
        .getUser(search)
        .then((res) => {
          let allUser = res.data.content.map((user, index) => {
            return {
              key: index,
              ...user,
              action: (
                <UserAction key={index} account={user.name} handleOnSuccess={fetchListUser} />
              ),
            };
          });
          setDataUser(allUser);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser(search);
  }, [search]);
  return (
    <div>
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

export default UserTable;
