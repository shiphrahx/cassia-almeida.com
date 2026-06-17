import ImgWithFallback from "@/components/ImgWithFallback";

export default function About() {
  return (
    <>
      <div className="about-intro">
        <div className="about-avatar">
          <ImgWithFallback
            src="/logos/avatar.jpg"
            alt="Cássia Almeida"
            fallback="CA"
          />
        </div>
        <div>
          <div className="about-name">Hiya</div>
          <p className="about-role">
            I'm Cássia. <strong>Engineering leader, builder, and creator</strong>.
            <br />
            At hyperexponential, I help teams deliver AI-driven platforms for some of the world's most complex industries.
            <br /><br />
            Outside of work, <strong>I'm passionate about creating content and sharing it online.</strong>

            <br /><br />
            <strong>I’ve worked across gaming, finance, and tech</strong>, always focused on connecting engineering
            with business goals, helping people grow, and solving problems that matter.
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
              <div className="timeline-logo">
                <ImgWithFallback src="/logos/hx.png" alt="hyperexponential" fallback="hx" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Senior Engineering Manager</span>
                <span className="timeline-dates">Sep 2025 – Present</span>
              </div>
              <div className="timeline-company">hyperexponential · England, UK</div>
              <div className="timeline-desc">
                Building AI-driven platforms that power smarter decision-making for complex industries.
                <br />
                Working on hx Renew, a flagship pricing decision intelligence platform.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="/logos/dps-games.jpg" alt="DPS Games" fallback="DPS" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Tech Producer</span>
                <span className="timeline-dates">Aug 2023 – Sep 2025</span>
              </div>
              <div className="timeline-company">DPS Games · England, UK</div>
              <div className="timeline-desc">
                Leader of the Tech Organisation for <a href="https://wargaming.com/en/news/wargaming-new-title-steel-hunters/" target="_blank" rel="noopener noreferrer">Steel Hunters</a> 🚀🚀
                <br/><br/>
                Led a cross-functional team of 30+ to deliver a global multiplayer game.
                I oversaw Backend, DevOps, Engine, and Tools — driving architecture, scalability, 
                and live operations while ensuring alignment with studio goals and timely, 
                high-quality delivery.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="/logos/unity.jpg" alt="Unity" fallback="U" />
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
                <ImgWithFallback src="/logos/blue-insurance.jpg" alt="Blue Insurance" fallback="BI" />
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
                <ImgWithFallback src="/logos/hp.jpg" alt="HP" fallback="HP" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Senior Software Engineer</span>
                <span className="timeline-dates">Apr 2010 – Oct 2011</span>
              </div>
              <div className="timeline-company">Hewlett-Packard · Brazil</div>
              <div className="timeline-desc">Developed Java Spring MVC web applications for internal banking systems, managed Oracle databases, and created WPF/WCF applications for stock exchange operations.</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback src="/logos/softforce.jpg" alt="Softforce" fallback="SF" />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Software Engineer</span>
                <span className="timeline-dates">Oct 2011 – May 2014</span>
              </div>
              <div className="timeline-company">Softforce · Brazil</div>
              <div className="timeline-desc">Led teams delivering cloud-enabled and ML-driven services spanning web development, internal tools in Python and C++, and machine learning applications.</div>
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
              <div className="edu-degree">Succeeding in Games Production</div>
              <div className="edu-school">Building Better Games · England, UK</div>
            </div>
            <span className="edu-year">2025</span>
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
              <div className="edu-degree">Creative Projects Management: Methodologies and Processes</div>
              <div className="edu-school">Pontifical Catholic University of Rio Grande do Sul · Brazil</div>
            </div>
            <span className="edu-year">2015</span>
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
              <div className="edu-degree">Agile Project Management</div>
              <div className="edu-school">PMTech · Brazil</div>
            </div>
            <span className="edu-year">2013</span>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Computer Science — Bachelor&apos;s Degree</div>
              <div className="edu-school">Pontifical Catholic University of Rio Grande do Sul · Brazil</div>
            </div>
            <span className="edu-year">2008 – 2013</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Awards &amp; Certifications</span>
        </div>
        <div className="edu-list">
          <div className="edu-item">
            <div>
              <div className="edu-degree">Certified Scrum Master</div>
            </div>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Certified Scrum Developer</div>
            </div>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">Certified Product Owner Open</div>
            </div>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">On the Spot Award</div>
              <div className="edu-school">DELL</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
