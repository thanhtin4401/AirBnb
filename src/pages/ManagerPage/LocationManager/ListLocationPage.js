import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationList } from '../../../redux/manager/location';
import { locationService } from '../../../services/locationService';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddLocationPage from './AddLocationPage';
import './ListLocationPage.scss';
import ActionLocation from './ActionLocation';
function ListLocationPage() {
  const isUpdateSuccess = useSelector((state) => state.manager.location.isUpdateSuccess);
  console.log('isUpdateSuccess', isUpdateSuccess);
  const [isUpdateLocationSuccess, setIsUpdateLocationSuccess] = useState(false);

  // const dispatch = useDispatch();
  const isRegisterAccountSuccess = useSelector((state) => state.auth.isRegisterAccountSuccess);

  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'ID',
      fixed: 'left',
    },
    {
      title: 'Tên Vị Trí',
      width: 100,
      dataIndex: 'tenViTri',
      key: 'tenViTri',
      fixed: 'left',
    },
    {
      title: 'Tỉnh Thành',
      dataIndex: 'tinhThanh',
      key: '1',
    },
    {
      title: 'Quốc Gia',
      dataIndex: 'quocGia',
      key: '2',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      key: '3',
      render: (text, record) => {
        return (
          <img
            className="w-[32px] h-[32px] rounded-[50rem]"
            src={
              record.hinhAnh
                ? record.hinhAnh
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYk517l_JVMrV2jf042ozAGKNehKJjjEHyQtS7bB3PUp_UUWofpG8qdylOOOgmjuxHzB4&usqp=CAU'
            }
          />
        );
      },
    },

    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'acion',
    },
  ];
  const { Search } = Input;
  const [searchLocation, setsearchLocation] = useState(null);
  const onSearchLocation = (value) => {
    setsearchLocation(value);
  };
  const [dataLocation, setDataLocation] = useState([]);
  const handleOnSuccess = () => {
    setsearchLocation('');
  };
  function convertString(str) {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, ' ');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str.toLowerCase();
  }
  const onSearch = (value) => console.log(value);
  useEffect(() => {
    let fetchListLocation = () => {
      locationService
        .getLocationList()
        .then((res) => {
          let locationList = res.data.content.map((location, index) => {
            return {
              key: index,
              ...location,
              action: (
                <ActionLocation
                  key={index}
                  ID={location.id}
                  setIsUpdateLocationSuccess={setIsUpdateLocationSuccess}
                />
              ),
            };
          });

          setDataLocation(locationList);
        })
        .catch((err) => {});
    };
    fetchListLocation();
  }, []);
  console.log('dataLocation', isUpdateLocationSuccess);
  useEffect(() => {
    if (searchLocation == '' || searchLocation == null) {
      let fetchListLocation = () => {
        locationService
          .getLocationList()
          .then((res) => {
            let locationList = res.data.content.map((location, index) => {
              return {
                key: index,
                ...location,
                action: (
                  <ActionLocation
                    key={index}
                    ID={location.id}
                    handleOnSuccess={fetchListLocation}
                    locationInfor={location}
                  />
                ),
              };
            });
            console.log(locationList);
            setDataLocation(locationList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListLocation();
    } else {
      let fetchListLocation = () => {
        let locationRes = dataLocation.filter((loca) => {
          return convertString(loca.tenViTri) === convertString(searchLocation);
        });
        console.log('locationRes:', locationRes);
        const locationList = [
          {
            ...locationRes[0],
            action: (
              <ActionLocation
                locationInfor={locationRes[0]}
                ID={locationRes[0].id}
                handleOnSuccess={() => {
                  handleOnSuccess();
                }}
              />
            ),
          },
        ];
        console.log(locationList);
        setDataLocation(locationList);
      };

      fetchListLocation();
    }
  }, [searchLocation]);
  // useEffect(() => {
  //   dispatch(getSearchLocation(searchLocation));
  //   const LocationList = allLocationList?.map((Location, index) => {
  //     return {
  //       key: index,
  //       ...Location,
  //       action: <ActionLocation ID={Location.id} />,
  //     };
  //   });
  //   setDataLocation(LocationList);
  // }, [searchLocation]);

  // useEffect(() => {
  //   dispatch(getLocationList());
  //   const LocationList = allLocationList?.map((Location, index) => {
  //     return {
  //       key: index,
  //       ...Location,
  //       action: <ActionLocation ID={Location.id} />,
  //     };
  //   });
  //   setDataLocation(LocationList);
  // }, []);
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full text-left p-2 bg-[#FF385C]">
        <h1 className="text-white text-[3rem] font-[700]">List Location</h1>
      </div>
      <div className="flex items-center my-4">
        <Search
          placeholder="Tìm vị trí"
          onSearch={onSearchLocation}
          enterButton
          className="search-location"
        />
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1rem] h-[3.2rem]"
        >
          + Thêm vị trí
        </button>
      </div>
      {/* <div className="w-full mt-2 mb-2">
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1.2rem] "
        >
          + Thêm tài khoản
        </button>
      </div> */}
      <Table
        columns={columns}
        dataSource={dataLocation}
        scroll={{
          x: 1300,
        }}
      />
      <AddLocationPage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOnSuccess={() => {
          handleOnSuccess();
        }}
      />
      ;
    </>
  );
}

export default ListLocationPage;
