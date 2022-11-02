import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../../redux/manager/room';
import RoomForm from './RoomForm';
import './ListRoomPage.scss';
import { roomService } from '../../../services/RoomService';
import ActionRoom from './ActionRoom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddRoomPage from './AddRoomPage';
function RoomManager() {
  const isDeleteSuccess = useSelector((state) => state.manager.room.isDeleteSuccess);
  // const dispatch = useDispatch();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);
  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'ID',
      fixed: 'left',
    },
    {
      title: t('Room Name'),
      width: 100,
      dataIndex: 'tenPhong',
      key: 'tenPhong',
      fixed: 'left',
    },
    {
      title: t('Guest'),
      dataIndex: 'khach',
      key: '1',
    },
    {
      title: t('Bedroom'),
      dataIndex: 'phongNgu',
      key: '2',
    },
    {
      title: t('Bed'),
      dataIndex: 'giuong',
      key: '3',
    },
    {
      title: t('Bathroom'),
      dataIndex: 'phongTam',
      key: '4',
    },
    // {
    //   title: 'Mô tả',
    //   dataIndex: 'moTa',
    //   key: '5',
    // },
    {
      title: t('Price'),
      dataIndex: 'giaTien',
      key: '6',
    },
    // {
    //   title: 'Máy giặt',
    //   dataIndex: 'mayGiat',
    //   key: '7',
    // },
    // {
    //   title: 'Bàn là',
    //   dataIndex: 'banLa',
    //   key: '8',
    // },
    // {
    //   title: 'Tivi',
    //   dataIndex: 'tivi',
    //   key: '9',
    // },
    // {
    //   title: 'Điều hoà',
    //   dataIndex: 'dieuHoa',
    //   key: '10',
    // },
    // {
    //   title: 'Wifi',
    //   dataIndex: 'wifi',
    //   key: '11',
    // },
    // {
    //   title: 'Bếp',
    //   dataIndex: 'bep',
    //   key: '12',
    // },
    // {
    //   title: 'Đỗ xe',
    //   dataIndex: 'doXe',
    //   key: '13',
    // },
    // {
    //   title: 'Hồ Bơi',
    //   dataIndex: 'hoBoi',
    //   key: '14',
    // },
    // {
    //   title: 'Bàn Ủi',
    //   dataIndex: 'banUi',
    //   key: '15',
    // },
    {
      title: t('Location ID'),
      dataIndex: 'maViTri',
      key: '16',
    },
    {
      title: t('Picture'),
      dataIndex: 'hinhAnh',
      key: 'avatar',
      render: (text, record) => {
        return (
          <img
            className="w-[32px] h-[32px] rounded-[50rem]"
            src={
              record.hinhAnh
                ? record.hinhAnh
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYk517l_JVMrV2jf042ozAGKNehKJjjEHyQtS7bB3PUp_UUWofpG8qdylOOOgmjuxHzB4&usqp=CAU'
            }
          />
        );
      },
    },

    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'acion',
    },
  ];
  const { Search } = Input;
  const [searchRoom, setsearchRoom] = useState(null);
  const onSearchRoom = (value) => {
    setsearchRoom(value);
  };
  const [dataRoom, setDataRoom] = useState([]);

  useEffect(() => {
    let fetchListRoom = () => {
      roomService
        .getRoomList()
        .then((res) => {
          let roomList = res.data.content.map((room, index) => {
            return {
              key: index,
              ...room,
              action: <ActionRoom key={index} ID={room.id} />,
            };
          });

          setDataRoom(roomList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListRoom();
  }, []);

  useEffect(() => {
    if (searchRoom == '' || searchRoom == null) {
      let fetchListRoom = () => {
        roomService
          .getRoomList()
          .then((res) => {
            let roomList = res.data.content.map((room, index) => {
              return {
                key: index,
                ...room,
                action: <ActionRoom key={index} ID={room.id} />,
              };
            });

            setDataRoom(roomList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListRoom();
    } else {
      let fetchListRoom = () => {
        roomService
          .getsearchRoom(searchRoom)
          .then((res) => {
            let roomList = res.data.content.map((room, index) => {
              return {
                key: index,
                ...room,
                action: (
                  <ActionRooms
                    roomInfor={room}
                    key={index}
                    ID={room.id}
                    handleOnSuccess={fetchListRoom}
                  />
                ),
              };
            });
            setDataRoom(roomList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListRoom();
    }
  }, [searchRoom, isDeleteSuccess, isRegisterAccountSuccess]);
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
        <h1 className="text-white text-[3rem] font-[700]">{t('LIST ROOM')}</h1>
      </div>
      <Search
        placeholder={t('Find Room')}
        onSearch={onSearchRoom}
        enterButton
        className="search-room"
      />
      <div className="w-full mt-2 mb-2">
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1.2rem] "
        >
          {t('+ Add Room')}
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={dataRoom}
        scroll={{
          x: 1300,
        }}
      />
      <AddRoomPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
    </>
  );
}

export default RoomManager;
