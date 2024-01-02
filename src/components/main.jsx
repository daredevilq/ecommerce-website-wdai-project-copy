import React, { useState } from 'react';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 ">
          <video
            className="card-img img-fluid"
            autoPlay
            loop
            muted={isMuted}
            height={100}
          >
            <source src="./assets/home-video.mp4" type="video/mp4" />
          </video>         
          <button onClick={handleToggleMute}>
            {isMuted ? 'Unmute Sound' : 'Mute Sound'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;