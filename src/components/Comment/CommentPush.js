import React from 'react';
import { Form, Input, Button, TextArea } from 'antd';
import './CommentPush.scss';
function CommentPush() {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="flex items-center justify-start mb-2">
        <img
          src="https://ecommerce-europe.eu/wp-content/uploads/2016/06/no-pic-ava.jpg"
          alt=""
          className="mb:w-[32px] mb:h-[32px] sm:w-[32px] sm:h-[32px] md:w-[2.2rem] md:h-[2.2rem] rounded-[50%] mr-2"
        />
        <div className="text-left">
          <p className="font-[600] text-[1rem]">Name</p>
        </div>
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
              htmlType="submit"
            >
              Comment
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default CommentPush;
