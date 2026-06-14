import ParallaxBackdrop from "./ParallaxBackdrop";
import Astronaut from "./Astronaut";

export default function Home() {
  return (
    <>
      <ParallaxBackdrop />
      <Astronaut />
      <div className="home-content">
        <div className="home-text">
          <h1 className="page-title">Cássia Almeida</h1>
          <p className="page-subtitle">
            Engineering leader at <strong>hyperexponential</strong>, working on
            AI-driven platforms. <br/> <br/> I write, build, and share what I learn.
          </p>
          <div id="astronaut-rest" aria-hidden />
        </div>
      </div>
    </>
  );
}
