import React, { useState } from 'react';
import { Form, Input, Button, TextArea, Rate, Modal } from 'antd';
import './CommentPush.scss';
import { localStorageService } from '../../services/localStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentUser } from '../../redux/comment/commentSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function CommentPush(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [rateCount, setRateCount] = useState(5);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const userAPI = localStorageService.get('USER')?.user;
  const auth = useSelector((state) => state.auth.isLoggedIn);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const onFinish = (values) => {
    if (!auth) {
      setIsModalOpenLogin(true);
    } else {
      const comment = {
        maPhong: props.roomId,
        maNguoiBinhLuan: localStorageService.get('USER').user.id,
        ngayBinhLuan: date,
        noiDung: values.comment,
        saoBinhLuan: rateCount,
      };

      dispatch(postCommentUser(comment));
    }
  };

  const handleOkLogin = () => {
    setIsModalOpenLogin(false);
    navigate('/Login');
  };
  const handleCancelLogin = () => {
    setIsModalOpenLogin(false);
  };
  return (
    <>
      <div className="flex items-center justify-start mb-2">
        <img
          src={`${
            userAPI
              ? userAPI.avatar
              : 'https://ecommerce-europe.eu/wp-content/uploads/2016/06/no-pic-ava.jpg'
          }`}
          alt=""
          className="mb:w-[32px] mb:h-[32px] sm:w-[32px] sm:h-[32px] md:w-[2.2rem] md:h-[2.2rem] rounded-[50%] mr-2"
        />
        <div className="text-left">
          <p className="font-[600] text-[1rem]">
            {localStorageService.get('USER') ? localStorageService.get('USER').user.name : 'name'}
          </p>
        </div>
      </div>
      <div className="w-full">
        <Rate
          allowHalf
          defaultValue={5}
          onChange={(count) => {
            setRateCount(count);
          }}
        />
      </div>
      <div className="w-full">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="comment">
            <TextArea className="w-full" rows={4} />
          </Form.Item>

          <Form.Item className="mt-2" wrapperCol={{ span: 4 }}>
            <button
              className="text-black py-[6px] px-[12px] border rounded-lg text-[1rem] font-[600] hover:bg-[#FF385C] hover:text-white transition-all"
              type="primary"
              htmltype="submit"
            >
              {t('Comment')}
            </button>
            <Modal
              className="modal-reserce"
              title="Login confirm"
              open={isModalOpenLogin}
              onOk={handleOkLogin}
              onCancel={handleCancelLogin}
            >
              <p className="w-full text-center font-600 text-[1rem]">
                {t('Plese login to comment.thank you')}
              </p>
            </Modal>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default CommentPush;
