import "./background.css";

function Background() {
  return (
    <div className="background fixed top-0 left-0 w-full h-full min-h-screen -z-10 motion-parallax backdrop-blur-sm bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
      <div className="absolute inset-0 grainy-overlay"></div>
    </div>
  );
}

export default Background;