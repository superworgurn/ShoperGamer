import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from './scroll';

const VideoLoader = () => {
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible && !showVideo) {
      setShowVideo(true);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="w-full flex items-center justify-center">
      {showVideo ? (
        <div className="rounded-xl bg-gray-100 p-4 shadow-lg w-full">
          <iframe
            className="w-full h-120"
            src="https://www.youtube-nocookie.com/embed/videoseries?si=Zpn9KMacp5RktO4x&amp;list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="rounded-xl bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 shadow-lg w-full h-[300px] flex flex-col items-center justify-center">
          <div className="bg-gray-800/60 border border-cyan-500/30 rounded-xl w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
              <p className="text-cyan-400 text-lg">กำลังโหลดวิดีโอ...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLoader;