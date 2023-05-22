"use client"
import Link from "next/link";
import { useRouter,useSearchParams,usePathname } from "next/navigation";

function WatchVideoPage() {
  const pathname = usePathname();

  return (
    <div>
      <Link href="/"><p>Back to home</p></Link>
      <h1 className="mt-3 pt-1">Watch Video</h1>
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