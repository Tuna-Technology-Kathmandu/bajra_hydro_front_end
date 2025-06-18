import React from 'react';

const IframeVideo = ({ videoUrl }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return <div className="text-red-500">Invalid YouTube URL</div>;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div className='bg-black aspect-video rounded-lg overflow-hidden'>
      <iframe
        className='w-full h-full'
        src={embedUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default IframeVideo;