import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import DateRangeComp from './DateRangeComp';
import './DetailRoomPage.scss';
import './TotalReserce.scss';
import './DetailRoomPage';
import { Button, Modal } from 'antd';
import { localStorageService } from '../../services/localStorageService';
import useFormItemStatus from 'antd/lib/form/hooks/useFormItemStatus';
function TotalReserce({ mobile, handleIsReserve, isReserve, desktop, roomId }) {
  const [isGuestsSelect, setisGuestsSelect] = useState(false);
  const [isCANCELLATIONPOLICES, setisCANCELLATIONPOLICES] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleIsGuestsSelect = () => {
    setisGuestsSelect(!isGuestsSelect);
  };
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(1);
  const [infants, setInfants] = useState(0);
  const [guets, setGuets] = useState(1);
  const [dateBooking, setDateBooking] = useState([]);
  const [openDateRange, setOpenDateRange] = useState(false);
  const handlePlus = (name) => {
    if (name == 'children') {
      setChildren(children + 1);
      setGuets(guets + 1);
    } else if (name == 'adults') {
      setAdults(adults + 1);
      setGuets(guets + 1);
    } else if (name == 'infants') {
      setInfants(infants + 1);
      setGuets(guets + 1);
    }
  };
  const handleMinus = (name) => {
    if (name == 'children') {
      setChildren(children - 1);
      setGuets(guets - 1);
    } else if (name == 'adults') {
      setAdults(adults - 1);
      setGuets(guets - 1);
    } else if (name == 'infants') {
      setInfants(infants - 1);
      setGuets(guets - 1);
    }
  };
  const handleOpenDateRange = () => {
    setOpenDateRange(true);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {
    const bookRoom = {
      maPhong: roomId.roomId,
      ngayDen: dateBooking.startDate,
      ngayDi: dateBooking.endDate,
      soLuongKhach: guets,
      maNguoiDung: localStorageService.get('USER').user.id,
    };
  };
  return (
    <div
      className={`p-[1.5rem] card-total border rounded-[0.5rem] ${
        isReserve || desktop ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-[500] text-[1.2rem] mx-1">42.000</p>
          <span className="text-[0.6rem] font-[300]">night</span>
        </div>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p className="text-[0.8rem] font-[500] mx-1">4.8</p>
          <span> . </span>
          <span className="text-[0.8rem] font-[500] opacity-60 underline">5 review</span>
        </div>
      </div>
      <div className="w-full  py-2">
        <div className="w-full relative border-[1px] rounded-lg border-black">
          <div className="w-full flex justify-between  border-b-[1px] border-black">
            {/* <Space direction="vertical" size={12}>
                    <RangePicker />
                  </Space> */}
            <div
              onClick={handleOpenDateRange}
              className=" datestart p-[12px] transition-all cursor-pointer border-r-[1px] border-black w-2/4"
            >
              <h2 className="font-[700]  text-[1rem] mb-1">Date Start</h2>
              <p>{dateBooking.startDate}</p>
            </div>
            <div
              onClick={handleOpenDateRange}
              className=" dateend p-[12px] transition-all cursor-pointer w-2/4"
            >
              <h2 className="font-[700] text-[1rem] mb-1">Date End</h2>
              <p>{dateBooking.endDate}</p>
            </div>
          </div>
          <DateRangeComp
            openDateRange={openDateRange}
            setOpenDateRange={setOpenDateRange}
            setDateBooking={setDateBooking}
          />
          <div
            className="py-2 p-[12px]  flex justify-between items-center transition-all cursor-pointer"
            onClick={handleIsGuestsSelect}
          >
            <div className="">
              <h2 className="font-[400] text-[1rem]">GUESTS</h2>
              <p className="font-[300] text-[1rem] mt-1">{guets} guests</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div
            className={`${
              isGuestsSelect ? 'block' : 'hidden'
            } absolute bg-white w-full guestsSelect top-[100%] z-10 rounded-lg border left-0 p-[12px]`}
          >
            <div className="flex items-center w-full my-[12px]">
              <div className="w-[70%] flex flex-col ">
                <p className="text-[0.8rem] font-[600]">Adults</p>
                <span className="text-[0.8rem] font-[300]">Age 13+</span>
              </div>
              <div className="w-[30%] flex items-center justify-center ">
                <button
                  onClick={() => handleMinus('adults')}
                  disabled={adults == 1 ? true : false}
                  className={` transition-all ${
                    adults == 1 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <p className="text-[1rem] mx-2">{adults}</p>
                <button
                  onClick={() => handlePlus('adults')}
                  disabled={adults == 9 ? true : false}
                  className={` transition-all ${
                    adults == 9 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center w-full my-[12px]">
              <div className="w-[70%] flex flex-col ">
                <p className="text-[0.8rem] font-[600]">Children</p>
                <span className="text-[0.8rem] font-[300]">Age 12 - 16</span>
              </div>
              <div className="w-[30%] flex items-center justify-center ">
                <button
                  onClick={() => handleMinus('children')}
                  disabled={children == 0 ? true : false}
                  className={` transition-all ${
                    children == 0 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <p className="text-[1rem] mx-2">{children}</p>
                <button
                  onClick={() => handlePlus('children')}
                  disabled={children == 9 ? true : false}
                  className={` transition-all ${
                    children == 9 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center w-full my-[12px]">
              <div className="w-[70%] flex flex-col ">
                <p className="text-[0.8rem] font-[600]">Infants</p>
                <span className="text-[0.8rem] font-[300]">Under 2</span>
              </div>
              <div className="w-[30%] flex items-center justify-center ">
                <button
                  onClick={() => handleMinus('infants')}
                  disabled={infants == 0 ? true : false}
                  className={` transition-all ${
                    infants == 0 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <p className="text-[1rem] mx-2">{infants}</p>
                <button
                  onClick={() => handlePlus('infants')}
                  disabled={infants == 9 ? true : false}
                  className={` transition-all ${
                    infants == 9 ? 'opacity-30' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.8"
                    stroke="currentColor"
                    className="w-[2.5rem] cursor-pointer h-[2.5rem] "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="font-[300] text-[0.8rem]">
              This place has a maximum of 8 guests, not including infants. Pets aren't allowed.
            </p>

            <p
              onClick={handleIsGuestsSelect}
              className="text-right w-full underline cursor-pointer font[600] text-[1rem]"
            >
              Close
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setisCANCELLATIONPOLICES(!isCANCELLATIONPOLICES);
          }}
          className="my-4 flex justify-between w-full pr-[12px]"
        >
          CANCELLATIONPOLICES{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <div
          className={`${
            isCANCELLATIONPOLICES ? 'block' : 'hidden'
          } w-full border-black border rounded-lg`}
        >
          <div className="flex justify-between p-[12px] items-center border-b-[1px] border-black">
            <p className="font-[300] text-[1rem]">Non-refunable</p>
            <input
              type="radio"
              name="refund"
              value="non-refund"
              className="w-[32px] h-[32px] rounded-[5rem]"
            />
          </div>
          <div className="flex justify-between p-[12px] items-center ">
            <p className="font-[300] text-[1rem] w-[90%]">
              Non-refunable br <br />
              <span className="text-[0.8rem] opacity-70 block font-[300]">
                Free cancellation before 22 Jun. Cancel before check-in on 23 Jun for a partial
                refund.
              </span>
            </p>

            <input
              type="radio"
              name="refund"
              value="refund"
              className="w-[32px] h-[32px] rounded-[5rem]"
            />
          </div>
        </div>
      </div>
      <button
        style={{ background: 'linear-gradient(91.46deg, #E61E4F 18.59%, #D70566 94.48%)' }}
        className="flex mb-[0.75rem] py-[0.75rem] justify-center font-bold text-[1.1rem] text-white w-full rounded-[8px] "
        onClick={showModal}
      >
        Reserve
      </button>
      <>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
        <Modal
          className="modal-reserce"
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-[600] text-[1rem] ">Tên Khách sạn</span>
            <span className="font-[300] text-[1rem]">$506</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-[600] text-[1rem] ">Số lượng Khách:</span>
            <span className="font-[300] text-[1rem]">{guets}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-[300] text-[1rem] ">Ngày đến:</span>
            <span className="font-[300] text-[1rem]">{dateBooking.startDate}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="font-[300] text-[1rem]">Ngày trả:</span>
            <span className="font-[300] text-[1rem]">{dateBooking.startDate}</span>
          </div>
          <div className="total flex justify-between pt-[1.25rem] border-t-[1px] border-[#dadada]">
            <h1 className="font-[500] text-[1rem]">Total before taxes</h1>
            <p className="text-[1rem] font-[600]">2.30.217 total</p>
          </div>
        </Modal>
      </>
      <p className="text-center text-[0.875rem] font-[300]">You won't be charged yet</p>
      <div className="py-4">
        <div className="flex items-center justify-between w-full">
          <span className="font-[300] text-[1rem] underline ">Show price details</span>
          <span className="font-[300] text-[1rem]">$506</span>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <span className="font-[300] text-[1rem] underline ">Service fee</span>
          <span className="font-[300] text-[1rem]">$506</span>
        </div>
      </div>
      <div className="total flex justify-between pt-[1.25rem] border-t-[1px] border-[#dadada]">
        <h1 className="font-[500] text-[1rem]">Total before taxes</h1>
        <p className="text-[1rem] font-[600]">2.30.217 total</p>
      </div>
      <button
        onClick={() => {
          handleIsReserve();
        }}
        className={`w-full font-[400] text-[1rem] underline mt-4 text-right ${
          mobile ? 'block ' : 'hidden'
        }`}
      >
        Close
      </button>
    </div>
  );
}

export default TotalReserce;
