import React, { useEffect, useState } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './AddRoomPage.scss';
function UpdateRoomPage({ setIsModalOpen, isModalOpen, ID }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch();
  // }, []);
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
    dispatch(registerUser(infor));
  };
  const [imgSRC, setimgSRC] = useState([]);
  const onFinishFailed = (errorInfo) => {};

  const { t } = useTranslation();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/gif' ||
      file.type === 'image/jpg'
    ) {
      await setfile(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgSRC(e.target.result);
      };
    }
  };
  return (
    <Modal title="Thêm Phòng" open={isModalOpen} className="modal_add-user" onCancel={handleCancel}>
      <div className=" w-fll flex justify-center items-center">
        <div className="">
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
            <p className="">Thêm tên phòng</p>
            <Form.Item
              className="mb-4"
              name="Tên Phòng"
              rules={[
                {
                  required: true,
                  message: t('Please input your Room Name!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                placeholder="Email"
              />
            </Form.Item>
            <p className="">{t('Guest')}</p>
            <Form.Item
              className="mb-4"
              name="guest"
              rules={[
                {
                  required: true,
                  message: t('Please input your guest!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="border  px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('Khách')}
              />
            </Form.Item>
            <p className="">{t('Số phòng ngủ')}</p>
            <Form.Item
              className="mb-4"
              name="bedroom"
              rules={[
                {
                  required: true,
                  message: t('Please input your Bedroom number!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('Phòng ngủ')}
              />
            </Form.Item>

            <Row span={24} style={{ width: '100%' }}>
              <Col span={12} style={{ paddingRight: '0.2rem' }}>
                <p className="">{t('Giường')}</p>
                <Form.Item
                  className="mb-4"
                  name="bed"
                  wrapperCol={{ sm: 24 }}
                  style={{ width: '100%', marginRight: '1rem' }}
                ></Form.Item>
              </Col>
              <Col span={12}>
                <p className="">{t('Bathroom')}</p>
                <Form.Item
                  className="mb-4"
                  wrapperCol={{ sm: 24 }}
                  style={{ width: '100%', borderRadius: 'none', marginRight: 0 }}
                  name="bathroom"
                >
                  <Select className="w-full dropdowregister " placeholder={t('Phòng tắm')}>
                    <Select.Option value="true">{t('có')}</Select.Option>
                    <Select.Option value="false">{t('không')}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <p className="">{t('Giá tiền')}</p>
            <Form.Item
              className="mb-4"
              name="price"
              rules={[
                {
                  required: true,
                  message: t('Please input your Price!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                placeholder={t('Nhập giá tiền')}
              />
            </Form.Item>
            {/* <p className="">{t('Role')}</p>
            <Form.Item
              className="mb-4"
              wrapperCol={{ sm: 24 }}
              style={{ width: '100%', borderRadius: 'none', marginRight: 0 }}
              name="role"
            >
              <Select className="w-full dropdowregister " placeholder={t('Role')}>
                <Select.Option value="User">{t('User')}</Select.Option>
                <Select.Option value="Admin">{t('Amin')}</Select.Option>
              </Select>
            </Form.Item> */}
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập hình ảnh' }]}
              label="Poster"
              valuePropName="hinhAnh"
            >
              <input
                type="file"
                onChange={handleChangeFile}
                accept="image/png,image/jpeg,image/jpg,image/gif"
              />
              <br></br>
              <img className="w-[150px]" src={imgSRC === '' ? movieInfor.hinhAnh : imgSRC} alt="" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
              >
                {t('Update Room')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateRoomPage;
