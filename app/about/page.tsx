import ImgWithFallback from "@/components/ImgWithFallback";

export default function About() {
  return (
    <>
      <div className="about-intro">
        <div className="about-avatar">
          <ImgWithFallback
            src="https://static.wixstatic.com/media/36d147_54895d624327445da5d867b9225a0069~mv2.jpg/v1/fill/w_267,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-07-05%20at%2016_34_23_271fd14d.jpg"
            alt="Cássia Almeida"
            fallback="CA"
          />
        </div>
        <div>
          <div className="about-name">Cássia Almeida</div>
          <p className="about-role">
            Engineering leader with <strong>15+ years</strong> in software development and team management.
            Currently <strong>Senior Engineering Manager at hyperexponential</strong>, building AI-driven
            platforms for complex industries. Based in England, UK.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Career</span>
        </div>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">hx</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Senior Engineering Manager</span>
                <span className="timeline-dates">Sep 2025 – Present</span>
              </div>
              <div className="timeline-company">hyperexponential · England, UK</div>
              <div className="timeline-desc">Building AI-driven platforms that power smarter decision-making for complex industries. Working on hx Renew, a flagship pricing decision intelligence platform.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_0220091e36de4b899aeab0fc1928c0d2~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-09-19%20121007_edited.png" alt="Steel Hunters" fallback="SH" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Leader of Tech Organisation</span>
                <span className="timeline-dates">Aug 2023 – Sep 2025</span>
              </div>
              <div className="timeline-company">Steel Hunters · England, UK</div>
              <div className="timeline-desc">Led a cross-functional team of 30+ delivering a global multiplayer game. Oversaw Backend, DevOps, Engine, and Tools development.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_2b10753af5e042eebe73e0f46ae6a39f~mv2.jpg/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1641390662299_e%3D1697673600%26v%3Dbeta%26t%3DjTVA6YRGH7d1YXiXJqB6hk53wgyW9qGGbK3q24J0DNk.jpg" alt="DPS Games" fallback="DPS" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Tech Producer</span>
                <span className="timeline-dates">Jan 2022 – Jul 2023</span>
              </div>
              <div className="timeline-company">DPS Games · England, UK</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_6bf5c8ec45cf4e9299de5eda65c1e2d7~mv2.jpg/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/36d147_6bf5c8ec45cf4e9299de5eda65c1e2d7~mv2.jpg" alt="Unity" fallback="U" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Manager, Software Engineering</span>
                <span className="timeline-dates">Jan 2017 – Jan 2022</span>
              </div>
              <div className="timeline-company">Unity · Dublin, Ireland</div>
              <div className="timeline-desc">Led a team delivering cloud-enabled and ML-driven services, including AI-driven tools such as single-image to normal map generation in Unity ArtEngine.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_8664d24def9e4c3dbf4032e135e37af0~mv2.jpg/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1614178926580_e%3D1697673600%26v%3Dbeta%26t%3DWPt_CCac_pKLXHhkJj1yCOTctLJsLbX-J3veF8r93zU.jpg" alt="Blue Insurance" fallback="BI" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Team Manager &amp; Principal Software Engineer</span>
                <span className="timeline-dates">May 2014 – Oct 2016</span>
              </div>
              <div className="timeline-company">Blue Insurance · Dublin, Ireland</div>
              <div className="timeline-desc">Led a distributed Agile team delivering .NET web products. Built pet insurance, travel, and car hire excess platforms.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_0d4645ff51e440e68540748e9cb220ed~mv2.jpg/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1688238534972_e%3D1697673600%26v%3Dbeta%26t%3DrQkUCyNdmuqkQJeh7Avglvm5cv8KeZC9qtQ5tN8Ga3I.jpg" alt="HP" fallback="HP" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Senior Software Engineer</span>
                <span className="timeline-dates">Apr 2010 – Oct 2011</span>
              </div>
              <div className="timeline-company">Hewlett-Packard · Brazil</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="https://static.wixstatic.com/media/36d147_a8d1df23391846aca16e07feface212d~mv2.jpg/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1619770796988_e%3D1697673600%26v%3Dbeta%26t%3DI9uX05ct-yaX51euT8d3E2IUuotaNiBtv1LIvNnHXQ4.jpg" alt="Softforce" fallback="SF" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Software Engineer</span>
                <span className="timeline-dates">Oct 2011 – May 2014</span>
              </div>
              <div className="timeline-company">Softforce · Brazil</div>
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Education</span>
        </div>
        <div className="edu-list">
          <div className="edu-item">
            <div>
              <div className="edu-degree">Computer Science — Bachelor&apos;s Degree</div>
              <div className="edu-school">Pontifical Catholic University of Rio Grande do Sul · Brazil</div>
            </div>
            <span className="edu-year">2008 – 2013</span>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Graduate Course: IT Project Management</div>
              <div className="edu-school">Pontifical Catholic University of Rio Grande do Sul · Brazil</div>
            </div>
            <span className="edu-year">2014 – 2015</span>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Effective People Management</div>
              <div className="edu-school">DCM Learning · Dublin, Ireland</div>
            </div>
            <span className="edu-year">2021</span>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Succeeding in Games Production</div>
              <div className="edu-school">Building Better Games · England, UK</div>
            </div>
            <span className="edu-year">2025</span>
          </div>
        </div>
      </div>
    </>
  );
}
