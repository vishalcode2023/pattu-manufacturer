import { useEffect, useRef } from "react";

export default function LazyVideo({
  src,
  sources = [],
  poster,
  className = "",
  width = 1280,
  height = 720,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const loadVideo = () => {
      video.querySelectorAll("source[data-src]").forEach((source) => {
        source.src = source.dataset.src;
        source.removeAttribute("data-src");
      });
      video.load();
    };

    if (!("IntersectionObserver" in window)) {
      loadVideo();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadVideo();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const videoSources = [
    ...(src ? [{ src }] : []),
    ...sources,
  ];

  return (
    <video
      ref={videoRef}
      poster={poster}
      width={width}
      height={height}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    >
      {videoSources.map((source) => (
        <source key={source.src} data-src={source.src} type={source.type || "video/mp4"} />
      ))}
    </video>
  );
}
