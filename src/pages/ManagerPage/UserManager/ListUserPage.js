import { useSelect, Search } from '@material-tailwind/react';
import React, { useEffect, koutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Tag, message } from 'antd';
import { getSearchUser, getUserList } from '../../../redux/manager/user';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './ListUserPage.scss';
import AddUserPage from './AddUserPage';
import ActionUser from './ActionUser';
import { setDate } from 'date-fns';
import { userService } from '../../../services/userService';
const ListUserPage = () => {
  const isDeleteSuccess = useSelector((state) => state.manager.user.isDeleteSuccess);
  const isUpdateSuccess = useSelector((state) => state.manager.user.isUpdateSuccess);

  const dispatch = useDispatch();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);
  const { t } = useTranslation();

  const [isUpdateUserSuccess, setIsUpdateUserSuccess] = useState(false);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('Email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('Birthday'),
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: t('Avatar'),
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
      title: t('Role'),
      dataIndex: 'Role',
      key: 'role',
      render: (text, record) => {
        if (record.role === 'ADMIN') {
          return <Tag color={'red'}>{t('Admin')}</Tag>;
        } else {
          return <Tag color={'blue'}>{t('Guest')}</Tag>;
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
              action: (
                <ActionUser
                  handleOnSuccess={fetchListUser}
                  key={index}
                  ID={user.id}
                  setIsUpdateUserSuccess={setIsUpdateUserSuccess}
                />
              ),
            };
          });

          setDataUser(userList);
        })
        .catch((err) => {});
    };
    fetchListUser();
  }, []);

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
                action: <ActionUser key={index} ID={user.id} handleOnSuccess={fetchListUser} />,
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
                action: (
                  <ActionUser
                    userInfor={user}
                    key={index}
                    ID={user.id}
                    handleOnSuccess={fetchListUser}
                  />
                ),
              };
            });
            setDataUser(userList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListUser();
    }
  }, [searchUser, isDeleteSuccess, isRegisterAccountSuccess, isUpdateSuccess]);
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full text-left p-2 bg-[#FF385C]">
        <h1 className="text-white text-[3rem] font-[700]">{t('LIST USER')}</h1>
      </div>
      <div className="flex items-center my-4">
        <Search
          placeholder={t('Find Account')}
          onSearch={onSearchUser}
          enterButton
          className="search-user"
        />
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1rem] h-[3.2rem]"
        >
          {t('+ Add Account')}
        </button>
      </div>
      {/* <div className="w-full mt-2 mb-2">
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1.2rem] "
        >
          + Thêm tài khoản
        </button>
      </div> */}
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
