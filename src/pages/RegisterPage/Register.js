import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Register.scss';
import { loginUser, registerUser } from '../../redux/auth/authSlice';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import DropdownLanguages from './DropdownLanguages';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, Col, Row } from 'antd';
import moment from 'moment';

import { unstable_useEnhancedEffect } from '@mui/material';
function Register() {
  const dispatch = useDispatch();
  const registerSuccess = useSelector((state) => state.auth.registerSuccess);
  const [authLogin, setauthLogin] = useState({});

  const onFinish = (values) => {
    let birthday = moment(values.birthday).format('dd / mm / yyyy');

    const infor = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      birthday: birthday,
      gender: values.gender,
      role: 'USER',
    };
    setauthLogin({
      email: values.email,
      password: values.password,
    });

    dispatch(registerUser(infor));
  };

  useEffect(() => {
    if (registerSuccess === true) {
      dispatch(loginUser(authLogin));
    }
  }, [registerSuccess]);
  const onFinishFailed = (errorInfo) => {};

  const { Option } = Select;

  const { t } = useTranslation();
  const navigater = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <div className="login flex items-center justify-center h-screen mb:p-0 sm :p-0 lg:p-[24px]">
      <div className="flex bg-white items-center relative w-[70rem] border rounded-[0.5rem] login-wrapper p-5 mb:h-screen sm:h-screen md:h-screen lg:h-[100%]">
        <Link className="absolute top-[24px] left-[24px]" to="/">
          <img
            className=" w-[6rem]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt=""
          />
        </Link>

        <div className=" mb:w-full sm:w-full lg:w-2/4 h-screen flex justify-center items-center">
          <div className="">
            <div className="flex justify-between mb-2 items-center">
              <h1 className="font-bold text-[20px]">{t('REGISTER')}</h1>
              <div className="flex items-center">
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
              <p className="">Email</p>
              <Form.Item
                className="mb-4"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: t('The input is not valid E-mail!'),
                  },
                  {
                    required: true,
                    message: t('Please input your Email!'),
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                  placeholder="Email"
                />
              </Form.Item>
              <p className="">{t('Password')}</p>
              <Form.Item
                className="mb-4"
                name="password"
                rules={[
                  {
                    required: true,
                    message: t('Please input your password!'),
                  },
                  { max: 16, message: t('your password must be max 16 characters.') },
                  { min: 6, message: t('your password must be minimum 6 characters.') },
                ]}
              >
                <Input.Password
                  style={{ width: '100%' }}
                  className="border password px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                  placeholder={t('Password')}
                />
              </Form.Item>
              <p className="">{t('Full name')}</p>
              <Form.Item
                className="mb-4"
                name="name"
                rules={[
                  // {
                  //   pattern: new RegExp(/^(?:\d*)$/),
                  //   message: t('field does not accept numbers or special charactor'),
                  // },

                  {
                    required: true,
                    message: t('Please input your username!'),
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                  placeholder={t('Full name')}
                />
              </Form.Item>

              <Row span={24} style={{ width: '100%' }}>
                <Col span={12} style={{ paddingRight: '0.2rem' }}>
                  <p className="">{t('Birthday')}</p>
                  <Form.Item
                    className="mb-4"
                    name="birthday"
                    wrapperCol={{ sm: 24 }}
                    style={{ width: '100%', marginRight: '1rem' }}
                  >
                    <DatePicker className="datepicker-register w-full " format={'DD/MM/YYYY'} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <p className="">{t('Gender')}</p>
                  <Form.Item
                    className="mb-4"
                    wrapperCol={{ sm: 24 }}
                    style={{ width: '100%', borderRadius: 'none', marginRight: 0 }}
                    name="gender"
                  >
                    <Select className="w-full dropdowregister " placeholder={t('Gender')}>
                      <Select.Option value="true">{t('male')}</Select.Option>
                      <Select.Option value="false">{t('female')}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <p className="">{t('Phone Number')}</p>
              <Form.Item
                className="mb-4"
                name="phone"
                rules={[
                  { max: 10, message: t('Userphone must be max  9 characters.') },

                  {
                    required: true,
                    message: t('Please input your username!'),
                  },
                  {
                    pattern: /^(?:\d*)$/,
                    message: t('Please input your number!'),
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                  placeholder={t('+84 Phone Number')}
                />
              </Form.Item>

              <button
                className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white py-[6px] px-[12px]"
                type="primary"
                size="large"
                htmltype="submit"
              >
                {t('Register')}
              </button>
            </Form>
            <div className="flex justify-center w-full">
              <Link to="/Login" className="mt-5 text-blue text-left text-bold">
                {t('Login')}
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
