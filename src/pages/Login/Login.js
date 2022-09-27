import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Input, Select } from 'antd';
import './Login.scss';
import { Link } from 'react-router-dom';
function Login() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { Option } = Select;
  return (
    <div className="flex items-center justify-center h-screen mb:p-0 sm :p-0 lg:p-[24px]">
      <div className="flex items-center relative w-[70rem] border rounded-[0.5rem] login-wrapper p-5 mb:h-screen sm:h-screen  lg:h-[50rem]">
        <img
          className="absolute top-[24px] left-[24px] w-[6rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
        <div className=" mb:w-full sm:w-full lg:w-2/4 h-screen flex justify-center items-center">
          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[20px]">Login</h1>
              <div className="flex items-center">
                <Select
                  defaultValue="VN"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="jack">ENG</Option>
                  <Option value="lucy">VN</Option>
                </Select>
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
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input
                  className="input border px-[14px] py-[14px] rounded-[0.5rem] w-[320px] "
                  placeholder="Input your email/phone number"
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
                  className="border password px-[14px] py-[14px] rounded-[0.5rem] w-[320px] "
                  placeholder="Input your email/phone number"
                />
              </Form.Item>

              <Button
                className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
                type="primary"
                size="large"
                htmlType="submit"
              >
                Login
              </Button>
            </Form>
            <a to="/" className="mt-5 text-blue w-full block text-left text-bold">
              forget password
            </a>
            <div className="relative">
              <p className="my-5 opacity-40 relative login-with">login with</p>
            </div>
            <div className=""></div>
            <div>
              <button className="flex mt-5 justify-center items-center text-[16px] w-full border p-3 rounded-[0.5rem]">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                  alt=""
                  className="w-[22px] mr-2"
                />
                Google
              </button>
              <button className="flex mt-5 justify-center items-center text-[16px] w-full border p-3 rounded-[0.5rem]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                  alt=""
                  className="w-[22px] mr-2"
                />
                Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4 mb:hidden relative bg-[rgba(236,76,96,73%)] overflow-hidden h-full flex justify-center items-center rounded-[0.5rem]">
          <div className="glass h-[4rem] relative w-[5rem] rouded-[0.5rem] bg-mainColor z-10">
            <h1 className="text-white text-[30px] text-left p-5">
              Start your journey by one click, explore beautiful world!
            </h1>
            <img src="../img/img.png" className="bottom-0 absolute left-20" alt="" />
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

export default Login;
