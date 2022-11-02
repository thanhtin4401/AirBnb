import React, { useEffect, useState } from 'react';

import { Button, Modal, Form, Input, Select, DatePicker, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './AddRoomPage.scss';
function AddRoomPage({ setIsModalOpen, isModalOpen }) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let birthday = moment(values.birthday).format('dd / mm / yyyy');

    const infor = {
      tenPhong: values.tenPhong,
      khach: values.khach,
      phongNgu: values.phongNgu,
      giuong: values.giuong,
      phongTam: phongTam,
      mayGiat: values.mayGiat,
      banLa: values.banLa,
      tivi: values.tivi,
      wifi: values.wifi,
      bep: values.bep,
      doXe: values.doXe,
      hoBoi: values.hoBoi,
      banUi: values.banUi,
      maViTri: values.maViTri,
      hinhAnh: values.hinhAnh,
    };

    dispatch(registerUser(infor));
  };

  const onFinishFailed = (errorInfo) => {};

  const { Option } = Select;

  const { t } = useTranslation();

  const auth = useSelector((state) => state.auth);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title={t('Add Room')}
      open={isModalOpen}
      className="modal_add-room"
      onCancel={handleCancel}
    >
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
            <p className="">{t('Room Name')}</p>
            <Form.Item
              className="mb-4"
              name="tenPhong"
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
                placeholder={t('Room Name')}
              />
            </Form.Item>
            <p className="">{t('Số lượng khách')}</p>
            <Form.Item
              className="mb-4"
              name="guest"
              rules={[
                {
                  required: true,
                  message: t('Please input your Guest Number!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('Bed Room')}
              />
            </Form.Item>
            <p className="">{t('Bedroom')}</p>
            <Form.Item
              className="mb-4"
              name="bedroom"
              rules={[
                {
                  required: true,
                  message: t('Please input your bedroom number!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('')}
              />
            </Form.Item>

            <p className="">{t('Giường')}</p>
            <Row span={24} style={{ width: '100%' }}>
              <Form.Item
                className="mb-4"
                name="bed"
                rules={[
                  {
                    required: true,
                    message: t('Please input your bed number!'),
                  },
                ]}
              >
                <Input
                  style={{ width: '100%' }}
                  className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                  placeholder={t('Bed')}
                />
              </Form.Item>
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

            {/* <Button
              className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
              type="primary"
              size="large"
              htmltype="submit"
            >
              {t('Register')}
            </Button> */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="hover:blacks w-full rounded-[0.5rem] bg-slate-500 btn-login text-white"
              >
                {t('Add Room')}
              </Button>
            </Form.Item>
          </Form>
          {/* <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          {/* </Form> */}
        </div>
      </div>
    </Modal>
  );
}

export default AddRoomPage;
