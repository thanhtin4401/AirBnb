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
          <Typography>{children}</Typography>
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
      <TabPanel className="overflow-scroll h-[76rem]" value={value} index={0}>
        <CardItemHeader />
        <CardItemHeader />
        <CardItemHeader />
        <CardItemHeader />
        <CardItemHeader />
        <CardItemHeader />
        <CardItemHeader />
      </TabPanel>
      <TabPanel value={value} index={1}>
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
