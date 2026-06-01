import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <Image
          src="/home.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="home-hero-overlay" />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 className="page-title">Cássia Almeida</h1>
        <p className="page-subtitle">
          Engineering leader with <strong>15+ years</strong> building software and leading teams.
          Currently Senior Engineering Manager at <strong>hyperexponential</strong>, working on
          AI-driven pricing platforms. I write, build side projects, and share what I learn.
        </p>
      </div>
    </>
  );
}
