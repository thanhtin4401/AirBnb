import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';

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
      key: 'selection',
    },
  ]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.openDateRange);
  }, [props.openDateRange]);
  const handleCloseDateRange = () => {
    props.setOpenDateRange(false);
  };
  // open close
  //   const [open, setOpen] = useState(true);

  // get the target element to toggle
  const refOne = useRef(null);

  //   useEffect(() => {
  //     // event listeners
  //     document.addEventListener('keydown', hideOnEscape, true);
  //     document.addEventListener('click', hideOnClickOutside, true);
  //   }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      props.setOpenDateRange(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      props.setOpenDateRange(false);
    }
  };

  return (
    <div
      className={`calendarWrap absolute -top-2 -right-2 w-[120%] bg-white p-[12px] ${
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
