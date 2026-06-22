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
            I'm Cássia.{" "}
            <strong>Engineering leader, builder, and creator</strong>.
            <br />
            At hyperexponential, I help teams deliver AI-driven platforms for
            some of the world's most complex industries.
            <br />
            <br />
            Outside of work,{" "}
            <strong>
              I'm passionate about creating content and sharing it online.
            </strong>
            <br />
            <br />
            <strong>I’ve worked across gaming, finance, and tech</strong>,
            always focused on connecting engineering with business goals,
            helping people grow, and solving problems that matter.
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
                <ImgWithFallback
                  src="/logos/hx.png"
                  alt="hyperexponential"
                  fallback="hx"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">
                  Senior Engineering Manager
                </span>
                <span className="timeline-dates">Sep 2025 – Present</span>
              </div>
              <div className="timeline-company">
                hyperexponential · England, UK
              </div>
              <div className="timeline-desc">
                Building AI-driven platforms that power smarter decision-making
                for complex industries.
                <br />
                Working on hx Renew, a flagship pricing decision intelligence
                platform.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback
                  src="/logos/dps-games.jpg"
                  alt="DPS Games"
                  fallback="DPS"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Tech Producer</span>
                <span className="timeline-dates">Aug 2023 – Sep 2025</span>
              </div>
              <div className="timeline-company">DPS Games · England, UK</div>
              <div className="timeline-desc">
                Leader of the Tech Organisation for{" "}
                <a
                  href="https://wargaming.com/en/news/wargaming-new-title-steel-hunters/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steel Hunters
                </a>
                <br />
                <br />
                Led a cross-functional team of 30+ to deliver a global
                multiplayer game. I oversaw Backend, DevOps, Engine, and Tools,
                driving architecture, scalability, and live operations while
                ensuring alignment with studio goals and timely, high-quality
                delivery.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback
                  src="/logos/unity.jpg"
                  alt="Unity"
                  fallback="U"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">
                  Manager, Software Engineering
                </span>
                <span className="timeline-dates">Jan 2017 – Jan 2022</span>
              </div>
              <div className="timeline-company">Unity · Dublin, Ireland</div>
              <div className="timeline-desc">
                Led a team delivering cloud-enabled and ML-driven services,
                spanning web development, internal tools in Python and C++, and
                applied machine learning in content creation workflows.
                <br />
                <br />I directed technical strategy and team operations, oversaw
                projects from web apps to AI-powered features like single-image
                to normal map generation in Unity ArtEngine, and managed
                timelines and budgets to ensure smooth, on-time delivery.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback
                  src="/logos/blue-insurance.jpg"
                  alt="Blue Insurance"
                  fallback="BI"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">
                  Team Manager &amp; Principal Software Engineer
                </span>
                <span className="timeline-dates">May 2014 – Oct 2016</span>
              </div>
              <div className="timeline-company">
                Blue Insurance · Dublin, Ireland
              </div>
              <div className="timeline-desc">
                Led a development team delivering web products using .NET
                technologies.
                <br />
                I oversaw .NET Core applications with SQL Server backends,
                managed on-premise infrastructure, set up CI/CD pipelines, and
                planned development roadmaps aligned with business goals.
                <br />
                <br />
                Some products I helped to build:
                <ul className="timeline-products">
                  <li>
                    CarHireExcess:{" "}
                    <a
                      href="https://www.carhireexcess.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      carhireexcess.com
                    </a>
                  </li>
                  <li>
                    PetInsurance:{" "}
                    <a
                      href="https://www.petinsurance.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      petinsurance.ie
                    </a>
                  </li>
                  <li>
                    InsureYourPaws:{" "}
                    <a
                      href="https://www.insureyourpaws.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      insureyourpaws.co.uk
                    </a>
                  </li>
                  <li>
                    Multitrip:{" "}
                    <a
                      href="https://www.multitrip.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      multitrip.com
                    </a>
                  </li>
                  <li>
                    AnPost Insurance:{" "}
                    <a
                      href="https://anpostinsurance.petquote.ie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      anpostinsurance.petquote.ie
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback
                  src="/logos/dell.jpg"
                  alt="Softforce"
                  fallback="SF"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Senior Software Engineer</span>
                <span className="timeline-dates">May 2014 – Oct 2016</span>
              </div>
              <div className="timeline-company">Dell · Brazil</div>
              <div className="timeline-desc">
                Led a distributed team across five countries to deliver
                enterprise-grade financial and credit systems for global sales
                operations. Designed .NET 4.5 applications for invoicing, credit
                checks, and transaction processing, backed by Oracle and SQL
                Server. Built backend services and data access layers for
                high-volume financial data.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-logo">
                <ImgWithFallback
                  src="/logos/softforce.png"
                  alt="Softforce"
                  fallback="SF"
                />
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-header">
                <span className="timeline-role">Software Engineer</span>
                <span className="timeline-dates">Oct 2011 – May 2014</span>
              </div>
              <div className="timeline-company">Softforce · Brazil</div>
              <div className="timeline-desc">
                Built a .NET/C# real-time transport tracking app with Google
                Maps, delivering accurate ETAs, fleet monitoring, route
                optimisation, and emergency handling. Also developed
                SharePoint-hosted apps for an 80+ store fashion retailer and
                mobile web apps using jQuery Mobile.
              </div>
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
                <span className="timeline-role">Software Engineer</span>
                <span className="timeline-dates">Apr 2010 – Oct 2011</span>
              </div>
              <div className="timeline-company">Hewlett-Packard · Brazil</div>
              <div className="timeline-desc">
                Developed Java Spring MVC web applications for an internal
                banking system, integrating with multiple external systems and
                Oracle databases. Also built WPF and WCF applications related to
                stock exchange operations.
              </div>
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
              <div className="edu-school">
                Building Better Games · England, UK
              </div>
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
              <div className="edu-degree">
                Creative Projects Management: Methodologies and Processes
              </div>
              <div className="edu-school">
                Pontifical Catholic University of Rio Grande do Sul · Brazil
              </div>
            </div>
            <span className="edu-year">2015</span>
          </div>
          <div className="edu-item">
            <div>
              <div className="edu-degree">
                Graduate Course: IT Project Management
              </div>
              <div className="edu-school">
                Pontifical Catholic University of Rio Grande do Sul · Brazil
              </div>
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
              <div className="edu-degree">
                Computer Science — Bachelor&apos;s Degree
              </div>
              <div className="edu-school">
                Pontifical Catholic University of Rio Grande do Sul · Brazil
              </div>
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
