import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Name from "./components/Phase1/Name/Name.jsx";
import Circleleft from "./components/Phase1/Circles/Circleleft.jsx";
import Circleright from "./components/Phase1/Circles/Circleright.jsx";
import Text from "./components/Phase 2/Text.jsx";
import Logos from "./components/Phase 2/Logos.jsx";
import Title from "./components/Phase 3/Title.jsx";
import Carousel from "./components/Phase 3/Carousel.jsx";
import Aboutme from "./components/Phase 4/Aboutme.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MouseFollower from "./components/MouseFollow/MouseFollow.jsx";

import { useEffect, useRef, useState } from "react";

function App() {
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      window.scrollTo({
        top: nameRef.current?.offsetTop - 100, // * Scrolls further past the Name component
        behavior: "smooth",
      });
    }
  }, [loading]);

  return (
    <>
      <MouseFollower />
      <Loading onComplete={() => setLoading(true)} />
      <div ref={nameRef} className="pt-[50vh]">
        <Name />
      </div>
      <div className="circles">
        <Circleleft />
        <Circleright />
      </div>
      <div className="bio ">
        <div className="lg:mt-200">
          <Text />
        </div>

        <div className="lg:mt-140">
          <Logos />
        </div>
      </div>
      <div className="projects mt-40 relative">
  <div className="relative z-20">
    <Title />
  </div>
  <div className="mt-20">
    <Carousel />
  </div>
</div>
<div className="aboutme mt-40">
  <Aboutme />
</div>
<div className="mt-16">
  <Footer />
</div>
    </>
  );
}

export default App;
