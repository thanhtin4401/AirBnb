import { Button, Form, Input, message, Radio } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pushUser } from '../../../redux/manager/user';
import { userService } from '../../../services/userService';
import './UserAdd.scss';
function UserAddForm() {
  const navigation = useNavigate();
  const onFinish = (e) => {
    const data = { ...e };
    userService
      .pushUser(data)
      .then((res) => {
        message.success(res.data.message);
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
        autoComplete="off"
      ></Form>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Ngày sinh" name="birthday">
        <Input />
      </Form.Item>
      <Form.Item label="Avarta" name="avatar">
        <Input />
      </Form.Item>
      <Form.Item label="Giới tính" name="gender">
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Vui lòng nhập giá trị' }]}
        name="maLoaiNguoiDung"
        label="Loại"
      >
        <Radio.Group>
          <Radio value="apple"> Quản trị </Radio>
          <Radio value="pear"> Khách hàng </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Thêm">
        <Button className="text-white btn-add" htmlType="submit">
          Thêm
        </Button>
        <Button
          onClick={() => {
            navigation('/manager/user');
          }}
          className="border ml-2 back-btn bg-white btn-back"
        >
          Trở về
        </Button>
      </Form.Item>
    </div>
  );
}

export default UserAddForm;
