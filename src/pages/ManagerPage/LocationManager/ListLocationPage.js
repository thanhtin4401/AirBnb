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
import UpdateLocation from './UpdateLocation';
import UploadImg from './UploadImg';

function ListLocationPage() {
  const { t } = useTranslation();
  const isUpdateSuccess = useSelector((state) => state.manager.location.isUpdateSuccess);

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
  let fetchListLocation = () => {
    locationService
      .getLocationList()
      .then((res) => {
        let locationList = res.data.content.map((location, index) => {
          return {
            key: index,
            ...location,
            hinhAnh: (
              <UploadImg
                handleOnSuccess={fetchListLocation}
                imgLocation={location.hinhAnh}
                key={index}
                ID={location.id}
              />
            ),
            action: (
              <ActionLocation
                key={index}
                ID={location?.id}
                handleOnSuccess={fetchListLocation}
                locationInfor={location}
                setIsUpdateLocationSuccess={setIsUpdateLocationSuccess}
              />
            ),
          };
        });
        setDataLocation(locationList);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchListLocation();
  }, []);

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
                hinhAnh: (
                  <UploadImg
                    handleOnSuccess={fetchListLocation}
                    imgLocation={location.hinhAnh}
                    ID={location.id}
                  />
                ),
                action: (
                  <ActionLocation
                    key={index}
                    ID={location?.id}
                    handleOnSuccess={fetchListLocation}
                    locationInfor={location}
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
        let locationRes = dataLocation.filter((loca) => {
          return convertString(loca.tenViTri) === convertString(searchLocation);
        });

        const locationList = [
          {
            ...locationRes[0],
            action: (
              <ActionLocation
                locationInfor={locationRes[0]}
                ID={locationRes[0]?.id}
                handleOnSuccess={fetchListLocation}
              />
            ),
          },
        ];

        setDataLocation(locationList);
      };

      fetchListLocation();
    }
  }, [searchLocation]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full text-left p-2 bg-[#FF385C]">
        <h1 className="text-white text-[3rem] font-[700]">{t('Quản lý danh sách điạ điểm')}</h1>
      </div>
      <div className="flex items-center my-4">
        <Search
          placeholder={t('Find Location')}
          onSearch={onSearchLocation}
          enterButton
          className="search-location"
        />
        <button
          onClick={handleShowModal}
          className="py-[6px] px-[12px] bg-black transition-all hover:bg-[#FF385C] text-white font-[600] text-[1rem] h-[3.2rem]"
        >
          {t('+ Add Location')}
        </button>
      </div>
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
          fetchListLocation();
        }}
      />
      ;
    </>
  );
}

export default ListLocationPage;
