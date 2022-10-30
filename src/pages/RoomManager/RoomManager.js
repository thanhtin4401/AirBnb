import React, { useEffect } from 'react';
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../redux/manager/room';
import RoomForm from './RoomForm';
import './RoomManager.scss';

function RoomManager() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const allRoomList = useSelector((state) => state.manager.room.allRoom);
  console.log(allRoomList);
  useEffect(() => {
    dispatch(getRoomList());
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
      title: 'Tên Phòng',
      width: 100,
      dataIndex: 'tenPhong',
      key: 'tenPhong',
      fixed: 'left',
    },
    {
      title: 'Khách',
      dataIndex: 'khach',
      key: '1',
    },
    {
      title: 'Phòng ngủ',
      dataIndex: 'phongNgu',
      key: '2',
    },
    {
      title: 'Giường',
      dataIndex: 'giuong',
      key: '3',
    },
    {
      title: 'Phòng tắm',
      dataIndex: 'phongTam',
      key: '4',
    },
    // {
    //   title: 'Mô tả',
    //   dataIndex: 'moTa',
    //   key: '5',
    // },
    {
      title: 'Gia tiền',
      dataIndex: 'giaTien',
      key: '6',
    },
    {
      title: 'Máy giặt',
      dataIndex: 'mayGiat',
      key: '7',
    },
    {
      title: 'Bàn là',
      dataIndex: 'banLa',
      key: '8',
    },
    {
      title: 'Tivi',
      dataIndex: 'tivi',
      key: '9',
    },
    {
      title: 'Điều hoà',
      dataIndex: 'dieuHoa',
      key: '10',
    },
    {
      title: 'Wifi',
      dataIndex: 'wifi',
      key: '11',
    },
    {
      title: 'Bếp',
      dataIndex: 'bep',
      key: '12',
    },
    {
      title: 'Đỗ xe',
      dataIndex: 'doXe',
      key: '13',
    },
    {
      title: 'Hồ Bơi',
      dataIndex: 'hoBoi',
      key: '14',
    },
    {
      title: 'Bàn Ủi',
      dataIndex: 'banUi',
      key: '15',
    },
    {
      title: 'Mã vị trí',
      dataIndex: 'maViTri',
      key: '16',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      key: '17',
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
      <h1>Quản lí phòng</h1>
      <Search
        className="mb-5"
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />{' '}
      <RoomForm />
      <div className="btn-css">
        <Button className="btn-add">Thêm người dùng</Button>
        <Button className="btn-delete">Xoá người dùng</Button>
        <Button className="btn-update">Sửa thông tin</Button>
      </div>
      <Table
        columns={columns}
        dataSource={allRoomList}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
}

export default RoomManager;
