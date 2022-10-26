import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import dateFormat, { masks } from 'dateformat';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import './DateRangeComp.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeComp = (props) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      // key: 'selection',
    },
  ]);

  useEffect(() => {
    const date = {
      startDate: dateFormat(range[0].startDate, 'fullDate'),
      endDate: dateFormat(range[0].endDate, 'fullDate'),
    };
    props.setDateBooking(date);
  }, [range]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.openDateRange);
  }, [props.openDateRange]);
  const handleCloseDateRange = () => {
    props.setOpenDateRange(false);
  };

  const refOne = useRef(null);

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      props.setOpenDateRange(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      props.setOpenDateRange(false);
    }
  };

  return (
    <div
      className={`calendarWrap absolute md:-top-2 md:-right-2 md:w-[120%] sm:top-0 sm:right-0 sm:w-[100%] mb:top-0 mb:right-0 mb:w-[100%]  bg-white p-[12px] ${
        props.openDateRange ? 'block' : 'hidden'
      }`}
    >
      <div ref={refOne}>
        {props.openDateRange && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
      <div className="w-full text-right">
        <button
          onClick={handleCloseDateRange}
          className="hover:bg-[#FF385C] hover:text-white transition-all py-[6px] px-[12px] border border-[#FF385C] rounded-[5rem]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DateRangeComp;
