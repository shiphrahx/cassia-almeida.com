import ParallaxBackdrop from "./ParallaxBackdrop";

export default function Home() {
  return (
    <>
      <ParallaxBackdrop />
      <div className="home-content">
        <h1 className="page-title">Cássia Almeida</h1>
        <p className="page-subtitle">
          Engineering leader with at <strong>hyperexponential</strong>, working on
          AI-driven platforms. <br/> I write, build, and share what I learn.
        </p>
      </div>
    </>
  );
}
