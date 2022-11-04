import React, { useEffect, useState } from 'react';

import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Col,
  Row,
  InputNumber,
  Checkbox,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import './AddRoomPage.scss';
import moment from 'moment';
import './AddRoomPage.scss';
function AddRoomPage({ setIsModalOpen, isModalOpen }) {
  const dispatch = useDispatch();
  const { TextArea } = Input;
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
      <div className=" w-full flex justify-center items-center">
        <div className="w-full ">
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
            <div className="flex w-full justify-between">
              <div className="w-2/4 pr-6 border-r-[1px]">
                <h2 className="font-[600] text-[1rem] text-[#FF385C] ">Thông tin chung</h2>
                <p className="">{t('Location')}</p>
                <Form.Item
                  className="mb-4"
                  name="tenPhong"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your Room!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                    placeholder="Tên phòng"
                  />
                </Form.Item>
                <p className="">{t('Vị Trí')}</p>
                <Form.Item
                  className="mb-4"
                  wrapperCol={{ sm: 24 }}
                  style={{ width: '100%', borderRadius: 'none', marginRight: 0 }}
                  name="gender"
                >
                  <Select className="w-full dropdowregister " placeholder={t('Vị Trí')}>
                    <Select.Option value="true">{t('male')}</Select.Option>
                    <Select.Option value="false">{t('female')}</Select.Option>
                  </Select>
                </Form.Item>
                <div className="flex justify-between">
                  <div className="">
                    <p className="">{t('Số lượng khách')}</p>
                    <Form.Item
                      className="mb-4"
                      name="soLuongKhach"
                      rules={[
                        {
                          required: true,
                          message: t('Please input your Guest Number!'),
                        },
                      ]}
                    >
                      <InputNumber
                        className="border py-[14] rounded-[0.5rem]"
                        min={1}
                        max={10}
                        defaultValue={1}
                      />
                    </Form.Item>
                  </div>
                  <div className="">
                    <p className="">{t('Phòng ngũ')}</p>
                    <Form.Item
                      className="mb-4"
                      name="phongNgu"
                      rules={[
                        {
                          required: true,
                          message: t('Please input your Guest Number!'),
                        },
                      ]}
                    >
                      <InputNumber
                        className="border py-[14] rounded-[0.5rem]"
                        min={1}
                        max={10}
                        defaultValue={1}
                      />
                    </Form.Item>
                  </div>
                  <div className="">
                    <p className="">{t('Giường')}</p>
                    <Form.Item
                      className="mb-4"
                      name="giuong"
                      rules={[
                        {
                          required: true,
                          message: t('Please input your Guest Number!'),
                        },
                      ]}
                    >
                      <InputNumber
                        className="border py-[14] rounded-[0.5rem]"
                        min={1}
                        max={10}
                        defaultValue={1}
                      />
                    </Form.Item>
                  </div>
                </div>
                <p className="">{t('Mô tả')}</p>
                <Form.Item
                  className="mb-4"
                  name="quocGia"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your Country!'),
                    },
                  ]}
                >
                  <TextArea
                    className="border w-full py-[14] rounded-[0.5rem]"
                    placeholder="Mô tả"
                  />
                </Form.Item>

                <p className="">{t('Price')}</p>
                <Form.Item
                  className="mb-4"
                  name="hinhAnh"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Price')}
                  />
                </Form.Item>
                <p className="">{t('Hinh anh')}</p>
                <Form.Item
                  className="mb-4"
                  name="hinhAnh"
                  rules={[
                    {
                      required: true,
                      message: t('Please input your image!'),
                    },
                  ]}
                >
                  <Input
                    style={{ width: '100%' }}
                    className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                    placeholder={t('Link hinh anh')}
                  />
                </Form.Item>
              </div>
              <div className="w-2/4 pl-6">
                <h2 className="font-[600] text-[1rem] text-[#FF385C] ">Thông tin bổ xung</h2>
                <Form.Item name="checkbox-group">
                  <Checkbox.Group>
                    <div className="flex flex-col">
                      <Checkbox
                        className="checkbox-add-room"
                        value="true"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Máy giặc
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="Bàn là"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bàn là
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value=""
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Tivi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="Điều hoà"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Điều hoà
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="Wifi"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Wifi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="D"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bếp
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="D"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Đỗ xe
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="D"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Hồ bơi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="D"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bàn ủi
                      </Checkbox>
                    </div>
                  </Checkbox.Group>
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="hover:blacks rounded-[0.5rem] bg-slate-500 btn-login text-white py-[1rem] px-[0.5rem]"
              >
                {t('Add Room')}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default AddRoomPage;
