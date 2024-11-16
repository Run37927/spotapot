import MapList from "@/components/MapList";

export default function Home() {
  return (
    <>
      <MapList />

      {/* corner popup */}
      <div className="fixed top-0 left-0 bg-white/75 border border-gray-200 rounded-br-xl h-12 w-fit px-4 py-1 z-40">
        <a
          href="https://x.com/HairunHuang"
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm block leading-tight">
          💬<span className="hover:underline hover:underline-offset-2 ml-1">feedback</span>
        </a>
        <a href="https://runbuilds.canny.io/bug-reports"
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm block leading-tight">
          🪲<span className="hover:underline hover:underline-offset-2 ml-1">bug report</span>
        </a>
      </div>
    </>
  );
}
