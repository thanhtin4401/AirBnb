import { Form, Input, Modal, message } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './AddLocationPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { roomService } from '../../../services/RoomService';
import { locationService } from '../../../services/locationService';
function AddLocationPage({ setIsModalOpen, isModalOpen, handleOnSuccess }) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const infor = {
      tenViTri: values.tenViTri,
      tinhThanh: values.tinhThanh,
      quocGia: values.quocGia,
      hinhAnh: values.hinhAnh,
    };

    locationService
      .postLocation(infor)
      .then((res) => {
        message.success('them thanh cong');
        handleOnSuccess();
        setIsModalOpen(false);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {};

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
      title="Thêm Vị Trí"
      open={isModalOpen}
      className="modal_add-location"
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
            <p className="">{t('Location')}</p>
            <Form.Item
              className="mb-4"
              name="tenViTri"
              rules={[
                {
                  required: true,
                  message: t('Please input your Location!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem]"
                placeholder="Vị Trí"
              />
            </Form.Item>
            <p className="">{t('Province')}</p>
            <Form.Item
              className="mb-4"
              name="tinhThanh"
              rules={[
                {
                  required: true,
                  message: t('Please input your Province!'),
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('Province')}
              />
            </Form.Item>
            <p className="">{t('Country')}</p>
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
              <Input
                style={{ width: '100%' }}
                className="input border px-[14px] py-[14px] rounded-[0.5rem] 
                  "
                placeholder={t('Country')}
              />
            </Form.Item>

            <p className="">{t('Picture')}</p>
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
                placeholder={t('imgLink')}
              />
            </Form.Item>
            <Form.Item>
              <button
                type="primary"
                htmlType="submit"
                className="hover:blacks rounded-[0.5rem] bg-slate-500 btn-login text-white py-[1rem] px-[0.5rem]"
              >
                {t('Add Location')}
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default AddLocationPage;
