import { Form, Input, message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { locationService } from '../../../services/locationService';
import { useTranslation } from 'react-i18next';
import './UpdateLocation.scss';
function UpdateLocation({ setIsModalOpen, isModalOpen, ID, handleOnSuccessUpdate, locationInfor }) {
  const dispatch = useDispatch();
  const [locationApi, setlocationApi] = useState({});
  const [hinhAnh, sethinhAnh] = useState({});
  const [imgSRC, setimgSRC] = useState('');
  const [file, setfile] = useState({});
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const openNotificationWithIcon = (type, mess, description) => {
    notification[type]({
      message: mess,
      description: description,
    });
  };

  useEffect(() => {
    locationService
      .getLocation(ID)
      .then((res) => {
        setlocationApi(res.data.content);
        sethinhAnh(res.data.content.avatar);
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  }, []);
  useEffect(() => {
    locationApi &&
      form.setFieldsValue({
        tenViTri: locationInfor?.tenViTri,
        tinhThanh: locationInfor?.tinhThanh,
        quocGia: locationInfor?.quocGia,
        hinhAnh: locationInfor?.hinhAnh,
      });
  }, [form, locationApi]);

  const onFinish = (values) => {
    const infor = {
      tenViTri: values.tenViTri,
      tinhThanh: values.tinhThanh,
      quocGia: values.quocGia,
      hinhAnh: values.hinhAnh,
    };
    console.log(infor);
    locationService
      .putLocation(ID, infor)
      .then((res) => {
        message.success('Cap nhat thanh cong');
        setIsModalOpen(false);
        handleOnSuccessUpdate();
      })
      .catch((err) => {
        setIsModalOpen(false);
      });
  };

  const onFinishFailed = (errorInfo) => {};

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
    <Modal
      title={'Thêm Vị Trí'}
      open={isModalOpen}
      className="modal_update-location"
      onCancel={handleCancel}
    >
      <div className=" w-fll flex justify-center items-center">
        <div className="">
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
                placeholder={t('Location')}
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
            <Form.Item rules={[{ required: true, message: 'Vui lòng nhập hình ảnh' }]}>
              <img
                className="w-[150px] rounded-[0.5rem]"
                src={imgSRC === '' ? locationInfor?.hinhAnh : imgSRC}
                alt=""
              />
              <br></br>
              {/* <input
                type="file"
                onChange={handleChangeFile}
                accept="image/png,image/jpeg,image/jpg,image/gif"
              /> */}
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
export default UpdateLocation;
