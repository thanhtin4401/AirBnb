import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationList } from '../../redux/manager/location';
function LocationManager() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const allLocationList = useSelector((state) => state.manager.location.allLocation);
  console.log(allLocationList);
  useEffect(() => {
    dispatch(getLocationList());
  }, []);
  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'ID',
      key: 'ID',
      fixed: 'left',
    },
    {
      title: 'Tên Vị Trí',
      width: 100,
      dataIndex: 'tenViTri',
      key: 'tenViTri',
      fixed: 'left',
    },
    {
      title: 'Tỉnh Thành',
      dataIndex: 'tinhThanh',
      key: '1',
    },
    {
      title: 'Quốc Gia',
      dataIndex: 'quocGia',
      key: '2',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      key: '3',
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
      <h1>Quản lí vị trí khách sạn</h1>
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
        dataSource={allLocationList}
        scroll={{
          x: 1300,
        }}
      />
      <div className="btn-css">
        <Button className="btn-add">Thêm người dùng</Button>
        <Button className="btn-delete">Xoá người dùng</Button>
        <Button className="btn-update">Sửa thông tin</Button>
      </div>
    </div>
  );
}

export default LocationManager;
