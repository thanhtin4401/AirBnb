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
      title: t('Location Name'),
      width: 100,
      dataIndex: 'tenViTri',
      key: 'tenViTri',
      fixed: 'left',
    },
    {
      title: t('Province'),
      dataIndex: 'tinhThanh',
      key: '1',
    },
    {
      title: t('Country'),
      dataIndex: 'quocGia',
      key: '2',
    },
    {
      title: t('Picture'),
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
      title: t('Action'),
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
                  />
                ),
              };
            });

            setDataLocation(locationList);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchListLocation();
    } else {
      let fetchListLocation = () => {
        locationService
          .getSearchLocation(searchLocation)
          .then((res) => {
            let locationList = res.data.content.map((location, index) => {
              return {
                key: index,
                ...Location,
                action: (
                  <ActionLocation
                    LocationInfor={location}
                    key={index}
                    ID={location.id}
                    handleOnSuccess={fetchListLocation}
                  />
                ),
              };
            });
            setDataLocation(locationList);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log('qua la xam');
      fetchListLocation();
    }
  }, [searchLocation, isRegisterAccountSuccess]);
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
        <h1 className="text-white text-[3rem] font-[700]">{t('LOCATION LIST')}</h1>
      </div>
      <div className="flex items-center my-4">
        <Search
          placeholder={T('Find Location')}
          onSearch={onSearchLocation}
          enterButton
          className="search-Location"
        />
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1rem] h-[3.2rem]"
        >
          {t('+ Add Location')}
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
      <AddLocationPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
    </>
  );
}

export default ListLocationPage;
