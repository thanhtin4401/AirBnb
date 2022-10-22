import React from 'react';

function Map() {
  return (
    <div className="w-full h-[20rem]">
      <iframe
        className="gmap_iframe w-full h-full"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=1001&amp;height=567&amp;hl=en&amp;q=ho chi minh&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default Map;
