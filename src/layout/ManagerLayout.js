import { message } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBarManager from '../components/SideBarManager/SideBarManager';
import { notification } from 'antd';

import { localStorageService } from '../services/localStorageService';

function ManagerLayout() {
  const [user, setuser] = useState(localStorageService.get('USER'));
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(user?.user.role === "USER" || user == null || user == undefined){
  //     navigate("/")
  //     openNotificationWithIcon("error","Thất Bại","Bạn không có quyền truy cập")
  //   }
  //  },[user])
  const openNotificationWithIcon = (type, mess, description) => {
    notification[type]({
      message: mess,
      description: description,
    });
  };
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="">
        <SideBarManager />
      </div>
      <div className="pl-[300px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default ManagerLayout;
