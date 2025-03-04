import Skeleton from 'react-loading-skeleton';

const VideoSkeleton = () => (

  <div className=" ml-[70%] mt-[5%] mr-[20px] w-full rounded-lg p-4 space-y-2 bg-gray-850 ">
    <Skeleton className="h-30 w-full rounded-lg opacity-20" /> {/* Thumbnail */}
    <div className="space-y-2">
      <Skeleton className="h-6 w-3/4 rounded-md" /> {/* Title */}
      <Skeleton className="h-4 w-1/2 rounded-md" /> {/* Channel */}
      <Skeleton className="h-4 w-1/3 rounded-md" /> {/* Views & Time */}
    </div>
  
  </div>
);

export default VideoSkeleton
 