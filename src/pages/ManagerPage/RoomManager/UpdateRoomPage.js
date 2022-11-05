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
  message,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './AddRoomPage.scss';
import { locationService } from '../../../services/locationService';
import { roomService } from '../../../services/RoomService';
function UpdateRoomPage({ setIsModalOpen, isModalOpen, handleOnSuccessUpdate, roomInfor, ID }) {
  const [form] = Form.useForm();
  const [roomApi, setRoomApi] = useState({});
  const [checkInfor, setCheckInfor] = useState([]);
  const { TextArea } = Input;
  const onFinish = (values) => {
    const infor = {
      tenPhong: values.tenPhong,
      khach: values.khach,
      phongNgu: values.phongNgu,
      giuong: values.giuong,
      moTa: values.moTa,
      phongTam: values.phongTam,
      giaTien: values.giaTien,
      mayGiac: values.checkbox.indexOf('mayGiac') >= 1 ? true : false,
      banLa: values.checkbox.indexOf('banLa') >= 1 ? true : false,
      tivi: values.checkbox.indexOf('tivi') >= 1 ? true : false,
      wifi: values.checkbox.indexOf('wifi') >= 1 ? true : false,
      bep: values.checkbox.indexOf('bep') >= 1 ? true : false,
      doXe: values.checkbox.indexOf('doXe') >= 1 ? true : false,
      hoBoi: values.checkbox.indexOf('hoBoi') >= 1 ? true : false,
      banUi: values.checkbox.indexOf('banUi') >= 1 ? true : false,
      maViTri: values.maViTri,
      hinhAnh: values.hinhAnh,
    };

    roomService
      .putRoom(ID, infor)
      .then((res) => {
        message.success('cap nhat thanh cong');
        handleOnSuccessUpdate();
        setIsModalOpen(false);
        return res;
      })
      .catch((err) => {
        message.success('them thanh cong');
        console.log(err);
      });
  };
  useEffect(() => {
    locationService
      .getLocation(ID)
      .then((res) => {
        setRoomApi(res.data.content);
      })
      .catch((err) => {
        // message.error(err.response.data.content);
      });
  }, []);

  useEffect(() => {
    const checkInfor = [
      roomInfor.mayGiac ? 'mayGiac' : '',
      roomInfor.banLa ? 'banLa' : '',
      roomInfor.tivi ? 'tivi' : '',
      roomInfor.wifi ? 'wifi' : '',
      roomInfor.bep ? 'bep' : '',
      roomInfor.doXe ? 'doXe' : '',
      roomInfor.hoBoi ? 'hoBoi' : '',
      roomInfor.banUi ? 'banUi' : '',
    ];
    roomApi &&
      form.setFieldsValue({
        tenPhong: roomInfor.tenPhong,
        Khach: roomInfor.khach,
        phongNgu: roomInfor.phongNgu,
        giuong: roomInfor.giuong,
        moTa: roomInfor.moTa,
        phongTam: roomInfor.phongTam,
        giaTien: roomInfor.giaTien,
        mayGiac: 'mayGiac',
        checkbox: checkInfor,
        maViTri: roomInfor.maViTri,
        hinhAnh: roomInfor.hinhAnh,
      });
  }, [form, roomApi, roomInfor]);
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
  const [locationList, setLocationList] = useState([]);
  useEffect(() => {
    locationService
      .getLocationList()
      .then((res) => {
        setLocationList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Modal
      title={t('Cập nhật thông tin phòng')}
      open={isModalOpen}
      className="modal_add-room"
      onCancel={handleCancel}
    >
      <div className=" w-full flex justify-center items-center">
        <div className="w-full ">
          <Form
            form={form}
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
                  name="maViTri"
                >
                  <Select className="w-full dropdowregister " placeholder={t('Vị Trí')}>
                    {locationList.map((item) => {
                      return <Select.Option value={item.id}>{item.tenViTri}</Select.Option>;
                    })}
                  </Select>
                </Form.Item>

                <p className="">{t('Mô tả')}</p>
                <Form.Item
                  className="mb-4"
                  name="moTa"
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
                  name="giaTien"
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
                <Form.Item name="checkbox">
                  <Checkbox.Group>
                    <div className="flex flex-col">
                      <Checkbox
                        className="checkbox-add-room"
                        value="mayGiac"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Máy giặc
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="banLa"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bàn là
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="tivi"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Tivi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="wifi"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Wifi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="bep"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bếp
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="doXe"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Đỗ xe
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="hoBoi"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Hồ bơi
                      </Checkbox>
                      <Checkbox
                        className="checkbox-add-room"
                        value="banUi"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        Bàn Ủi
                      </Checkbox>
                    </div>
                  </Checkbox.Group>
                </Form.Item>
                <h2 className="font-[600] text-[1rem] text-[#FF385C] ">Số lượng</h2>

                <div className="w-full">
                  <p className="">{t('Phòng ngũ')}</p>
                  <Form.Item
                    className="mb-4 w-full"
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
                      // defaultValue={1}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <p className="">{t('Giường')}</p>
                  <Form.Item
                    className="mb-4 w-full"
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
                      // defaultValue={1}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <p className="">{t('Phòng tắm')}</p>
                  <Form.Item
                    className="mb-4 w-full"
                    name="phongTam"
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
                      // defaultValue={1}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <p className="">{t('Số lượng khách')}</p>
                  <Form.Item
                    className="mb-4 w-full"
                    name="Khach"
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
                      // defaultValue={1}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="hover:blacks rounded-[0.5rem] bg-slate-500 btn-login text-white py-[1rem] px-[0.5rem]"
              >
                {t('Cập nhật')}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateRoomPage;
