import React from 'react';

const IframeVideo = () => {

 

  return (
    <div className='bg-black aspect-video rounded-lg overflow-hidden'>
      <iframe
        className='w-full h-full'
        src="https://www.youtube.com/embed/ZIiJgHRaUyY"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default IframeVideo;
