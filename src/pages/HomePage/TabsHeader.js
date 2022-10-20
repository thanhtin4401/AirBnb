import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardItem from '../../components/CardItem/CardItem';
import CardItemHeader from '../../components/CardItem/CardItemHeader';
import './TabsHeader.scss';
import GridImgHeader from '../../components/CardItem/GridImgHeader';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsHeader({ props }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="mb-[20px]">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'transparent',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '20px',
          display: 'flex',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'white',
              borderRadius: '2rem',
              height: 4,
              width: '100%',
              justifyContent: 'space-around',
            },
          }}
          aria-label="basic tabs example"
          className="border-none justify-center"
          sx={{
            width: '100%',
            justifyContent: 'space-around',

            '& button': { color: 'white', fontSize: '1rem', opacity: '0.6' },
            '& button:hover': { opacity: '1', color: 'white' },
            '& button:active': { opacity: '1', color: 'white' },
            '& button:focus': { opacity: '1', color: 'white' },
            '& button.Mui-selected': { opacity: '1', color: 'white' },
          }}
        >
          <Tab
            styles={{ button: { color: 'white' } }}
            className="text-white "
            label="Galeria"
            {...a11yProps(0)}
            sx={{ justifyContent: 'center' }}
          />
          <Tab
            styles={{ button: { color: 'white' } }}
            className="text-white "
            label="Alojamiento"
            {...a11yProps(1)}
          />
          <Tab
            styles={{ button: { color: 'white' } }}
            className="text-white "
            label="Experiencias"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel className="overflow-scroll h-[40rem]" value={value} index={0}>
        <CardItemHeader
          src="https://media.worldnomads.com/explore/vietnam/halong-bay-vietnam-from-above-gettyimages.jpg"
          content={{
            title: 'Is Halong Bay in Vietnam Really Worth It?',
            heart: '23',
            text: 'Images may be subject to copyright 200',
          }}
        />
        <CardItemHeader
          src="https://upload.travelawaits.com/ta/uploads/2021/04/ef89ea2918733bbe55510ded85699ef89ea.jpg"
          content={{
            title: 'The Best Things To Do In Rio De Janeiro',
            heart: '53',
            text: 'Images may be subject to copyright 400',
          }}
        />
        <CardItemHeader
          src="https://www.abercrombiekent.com/-/media/ak/media-for-prod/destinations/mastheads/asia-singapore-marina-skyline-mh.jpg?h=660&w=1920&la=en&hash=9D036204A16170792E3931E00D9FF027"
          content={{
            title: 'Singapore Luxury Travel: Luxury Singapore Tours',
            heart: '123',
            text: 'Images may be subject to copyright 600',
          }}
        />
        <CardItemHeader
          src="https://smile.cebupacificair.com/wp-content/uploads/2015/12/shutterstock_697069453_Singapore.jpg"
          content={{
            title: 'Singapore Travel Guide and Itinerary',
            heart: '64',
            text: 'Images may be subject to copyright 100',
          }}
        />
        <CardItemHeader
          src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/03/Singapore-scaled.jpg?fit=1200%2C800&ssl=1"
          content={{
            title: 'Singapore to ease cross-border ',
            heart: '79',
            text: 'Images may be subject to copyright 800',
          }}
        />
      </TabPanel>
      <TabPanel className="overflow-scroll h-[40rem]" value={value} index={1}>
        <GridImgHeader />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    // <>
    //   <h1>ashfjashfj</h1>
    // </>
  );
}
