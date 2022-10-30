import React, { useState, useEffect } from 'react';
import { columns } from './userManager.utils';
import { Table } from 'antd';
import { userService } from '../../services/userService';
import UserAction from './HotelAction';
import { useSelector } from 'react-redux';
function UserTable({ search }) {
  const [dataUser, setDataUser] = useState([]);
  const allUserList = useSelector((state) => state.manager.user.allUser);
  const [searchUser, setsearchUser] = useState(null);
  const onSearch = (value) => {
    setsearchUser(value);
    console.log(value);
  };

  useEffect(() => {
    let fetchListUser = (search) => {
      userService
        .getUserList(search)
        .then((res) => {
          let userList = res.data.content.map((user, index) => {
            return {
              key: index,
              ...user,
              action: (
                <UserAction key={index} account={user.taiKhoan} handleOnSuccess={fetchListUser} />
              ),
            };
          });
          setDataUser(userList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser(search);
  }, [search]);

  return (
    <Table
      columns={columns}
      dataSource={allUserList}
      scroll={{
        x: 1300,
      }}
      search={searchUser}
    />
  );
}

export default UserTable;
