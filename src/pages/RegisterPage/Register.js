import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Register.scss';
import { loginUser } from '../../redux/auth/authSlice';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import DropdownLanguages from './DropdownLanguages';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, Col, Row } from 'antd';
function Register() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginUser(values));
    // dispatch(on_loading(12));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { Option } = Select;
  const handleCallBackRespone = (res) => {
    console.log('token' + res.credential);
  };
  const onSuccess = (res) => {
    console.log('res', res);
  };
  const onFail = (res) => {
    console.log('fail', res);
  };
  const clientId = '887923344894-gd09ok46pli0071vdgasta0o9fkhjj10.apps.googleusercontent.com';
  useEffect(() => {
    // google.accounts.id.initialize({
    //   client_id: '887923344894-gd09ok46pli0071vdgasta0o9fkhjj10.apps.googleusercontent.com',
    //   callback: handleCallBackRespone,
    // });
    // return google.accounts.id.renderButton(document.getElementById('btnGoogle'), {
    //   theme: 'outline',
    //   size: 'large',
    // });
    const clientId = '887923344894-gd09ok46pli0071vdgasta0o9fkhjj10.apps.googleusercontent.com';
    function start() {
      // gapi.clientId.init({
      //   clientId: clientId,
      //   scope: '',
      // });
    }
    gapi.load('client:auth2', start);
  }, []);
  const { t } = useTranslation();
  const navigater = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <div className="login flex items-center justify-center h-screen mb:p-0 sm :p-0 lg:p-[24px]">
      <div className="flex bg-white items-center relative w-[70rem] border rounded-[0.5rem] login-wrapper p-5 mb:h-screen sm:h-screen md:h-screen lg:h-[100%]">
        <img
          className="absolute top-[24px] left-[24px] w-[6rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
        <div className=" mb:w-full sm:w-full lg:w-2/4 h-screen flex justify-center items-center">
          <div className="">
            <div className="flex justify-between mb-2 items-center">
              <h1 className="font-bold text-[20px]">{t('REGISTER')}</h1>
              <div className="flex items-center">
                {/* <Select
                  defaultValue="VN"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="jack">ENG</Option>
                  <Option value="lucy">VN</Option>
                </Select> */}
                <DropdownLanguages />
              </div>
            </div>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password
                  style={{ width: '100%' }}
                  className="border password px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                  placeholder="Full name"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                  placeholder="+84 Phone Number"
                />
              </Form.Item>
              <Row span={24} style={{ width: '100%' }}>
                <Col span={12} style={{ paddingRight: '0.2rem' }}>
                  <Form.Item wrapperCol={{ sm: 24 }} style={{ width: '100%', marginRight: '1rem' }}>
                    <DatePicker className="w-full " />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    wrapperCol={{ sm: 24 }}
                    style={{ width: '100%', borderRadius: 'none', marginRight: 0 }}
                  >
                    <Select className="w-full " placeholder="gender">
                      <Select.Option value="demo">Nam</Select.Option>
                      <Select.Option value="demo">Nữ</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Button
                className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
                type="primary"
                size="large"
                htmlType="submit"
              >
                Register
              </Button>
            </Form>
            <div className="flex justify-center w-full">
              <Link to="/Login" className="mt-5 text-blue text-left text-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/4  mb:hidden sm:hidden lg:flex relative bg-[#e86f7d] overflow-hidden h-full flex justify-center items-center rounded-[0.5rem]">
          <div className="glass h-[80%] relative w-[30rem] rouded-[0.5rem] bg-mainColor z-10">
            <h1 className="text-white text-[30px] text-left p-5">
              Start your journey by one click, explore beautiful world!
            </h1>
            <img src="../img/img.png" className="bottom-0 w-[70%] absolute left-20" alt="" />
          </div>
          <img
            className="absolute right-[9rem] bottom-0 z-none"
            src="../img/decoration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
