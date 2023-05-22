"use client"
import { useRouter,useSearchParams,usePathname } from "next/navigation";

function WatchVideoPage() {
  const pathname = usePathname();

  return (
    <div>
      <video
        src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/videos/${pathname.split('/')[2]}`}
        width="800px"
        height="auto"
        controls
        controlsList="nodownload" 
        autoPlay
        id="video-player"
      />
       
    </div>
  );
}

export default WatchVideoPage;