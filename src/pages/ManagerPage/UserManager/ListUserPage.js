import { useSelect, Search } from '@material-tailwind/react';
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Tag } from 'antd';
import { getSearchUser, getUserList } from '../../../redux/manager/user';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './ListUserPage.scss';
import AddUserPage from './AddUserPage';
import ActionUser from './ActionUser';
import { setDate } from 'date-fns';
import { userService } from '../../../services/userService';
const ListUserPage = () => {
  // const allUserList = useSelector((state) => state.manager.user.allUser);
  const isDeleteSuccess = useSelector((state) => state.manager.user.isDeleteSuccess);
  const dispatch = useDispatch();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record) => {
        return (
          <img
            className="w-[32px] h-[32px] rounded-[50rem]"
            src={
              record.avatar
                ? record.avatar
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYk517l_JVMrV2jf042ozAGKNehKJjjEHyQtS7bB3PUp_UUWofpG8qdylOOOgmjuxHzB4&usqp=CAU'
            }
          />
        );
      },
    },
    {
      title: 'Role',
      dataIndex: 'Role',
      key: 'role',
      render: (text, record) => {
        console.log(record.role);
        if (record.role === 'ADMIN') {
          return <Tag color={'red'}>Quản trị</Tag>;
        } else {
          return <Tag color={'blue'}>Khách hàng</Tag>;
        }
      },
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'acion',
    },
  ];
  const { Search } = Input;
  const [searchUser, setsearchUser] = useState(null);
  const onSearchUser = (value) => {
    setsearchUser(value);
    console.log(value);
  };
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    let fetchListUser = () => {
      userService
        .getUserList()
        .then((res) => {
          let userList = res.data.content.map((user, index) => {
            return {
              key: index,
              ...user,
              action: <ActionUser key={index} ID={user.id} />,
            };
          });
          console.log(userList);

          setDataUser(userList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser();
  }, []);
  console.log('dataUser', dataUser);
  useEffect(() => {
    if (searchUser == '' || searchUser == null) {
      let fetchListUser = () => {
        userService
          .getUserList()
          .then((res) => {
            let userList = res.data.content.map((user, index) => {
              return {
                key: index,
                ...user,
                action: <ActionUser key={index} ID={user.id} />,
              };
            });

            setDataUser(userList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListUser();
    } else {
      let fetchListUser = () => {
        userService
          .getSearchUser(searchUser)
          .then((res) => {
            let userList = res.data.content.map((user, index) => {
              return {
                key: index,
                ...user,
                action: <ActionUser userInfor={user} key={index} ID={user.id} />,
              };
            });
            setDataUser(userList);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log('qua la xam');
      fetchListUser();
    }
  }, [searchUser, isDeleteSuccess, isRegisterAccountSuccess]);
  // useEffect(() => {
  //   dispatch(getSearchUser(searchUser));
  //   const userList = allUserList?.map((user, index) => {
  //     return {
  //       key: index,
  //       ...user,
  //       action: <ActionUser ID={user.id} />,
  //     };
  //   });
  //   setDataUser(userList);
  // }, [searchUser]);

  // useEffect(() => {
  //   dispatch(getUserList());
  //   const userList = allUserList?.map((user, index) => {
  //     return {
  //       key: index,
  //       ...user,
  //       action: <ActionUser ID={user.id} />,
  //     };
  //   });
  //   setDataUser(userList);
  // }, []);
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full text-center p-2 bg-[#FF385C]">
        <h1 className="text-white text-[3rem] font-[700]">LIST USER</h1>
      </div>
      <Search
        placeholder="Tìm tài khoản"
        onSearch={onSearchUser}
        enterButton
        className="search-user"
      />
      <div className="w-full mt-2 mb-2">
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1.2rem] "
        >
          + Thêm tài khoản
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={dataUser}
        scroll={{
          x: 1300,
        }}
      />
      <AddUserPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
    </>
  );
};

export default ListUserPage;