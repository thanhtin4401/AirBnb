import React, { useState } from 'react';
import { Tabs, Input, Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import UserTable from './HotelTable';

const { Search } = Input;

function HotelPage() {
  const [searchUser, setsearchUser] = useState(null);
  const onSearchUser = (value) => {
    setsearchUser(value);
  };
  const [searchMovie, setsearchMovie] = useState(null);
  const onSearchMovie = (value) => {
    setsearchMovie(value);
  };
  const navigation = useNavigate();
  return (
    <div className="warrapped bg-white ">
      <div className="container mt-[5rem] bg-white mx-auto  my-7">
        <div className="mx-[40px] bg-white">
          <Tabs className="text-2xl" defaultActiveKey="1">
            <Tabs.TabPane tab="Quản lý người dùng" key="1">
              <div className="function mb-2 flex items-center">
                <Space direction="vertical">
                  <Search placeholder="Tìm tài khoản" onSearch={onSearchUser} enterButton />
                </Space>
                <Button
                  to="/manageruserformpage"
                  className="ml-2"
                  type="primary"
                  onClick={() => {
                    navigation('/manager/adduser');
                  }}
                >
                  + Thêm tài khoản
                </Button>
              </div>

              <UserTable search={searchUser} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
