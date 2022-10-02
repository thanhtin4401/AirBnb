import React from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player
function HomePage() {
  return (
    <div className="h-screen">
      <div className="h-screen scale-50">
        <ReactPlayer width="100%" height="100%" url="https://vimeo.com/162413069" playing={true} />
      </div>

      {/* <video className="h-100vh" autoPlay src="https://www.youtube.com/watch?v=WhQapHmaYYE"></video> */}
    </div>
  );
}

export default HomePage;
