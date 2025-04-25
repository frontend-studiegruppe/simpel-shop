// components/VideoBackground.jsx
export default function VideoBackground() {
  return (
    <video className="fixed top-0 left-0 w-full h-screen object-cover z-[-1]" autoPlay muted loop playsInline>
      <source src="/video/studiorouge.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
