import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Work Experiences</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/magnetoasher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Developer</h3>
              <ul>
                <li>
                  Integrated enhancements into web design to improve user
                  stickiness, smooth functionality and boost load times.
                </li>
                <li>
                  Implemented user interface guidelines and standards throughout
                  the development and maintenance of the website.
                </li>
                <li>
                  Built microservice backend application with NestJS, TypeORM
                  and PostgreSQL.
                </li>
                <li>
                  Collaborated with project managers and other engineering
                  groups to plan and prioritize projects and then break them
                  into scrum epics and stories for my teams (agile).
                </li>
                <li>
                  Participated in API design and development of RESTful Services
                  For the enterprise product in business.
                </li>
                <li>
                  Assessed and reviewed all pull requests created by teammates
                  to ensure the quality and accuracy of the code.
                </li>
                <li>
                  Maintained backend code built with Express.js, MySQL and
                  collaborate with product team to implement new features plan
                  for future products.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Vue</li>
                <li>Express</li>
                <li>MySql</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/github-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://github-search-blond.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Developer</h3>
              <ul>
                <li>
                  Built PWA for healthcare & fitness application using Vue,
                  JavaScript.
                </li>
                <li>
                  Contributed ideas and suggestions in team meetings and
                  delivered updates on deadlines, designs and enhancements.
                </li>
                <li>
                  Deployed several web applications using Docker, Kubernetes and
                  AWS.
                </li>
                <li>
                  Implemented SEO in React application for e-commerce site with
                  a catalogue of 15000 products leading to an increase in page
                  views per session of 25% with SSR in Next.js and Gatsby
                </li>
                <li>
                  Built a fully-integrated one-to-one live video co-shopping
                  platform for customers and associates using Vue, Nuxt.js,
                  TypeScript, and GraphQL
                </li>
                <li>
                  Maintained backend code built with Express, MySQL and
                  collaborate with product team to implement new features plan
                  for future products.
                </li>
                <li>
                  Implemented work studio platform and OKR dashboard using Vue,
                  TypeScript, AWS (lambda, API gateway, rest API, S3, Amplify),
                  Node, MongoDB
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>AWS</li>
                <li>Vue</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://joaotuliojt.github.io/sunnyside-agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Web developer</h3>
              <ul>
                <li>
                  Built RESTful APIs to automate real-time reporting of
                  healthcare data to custom-built dashboards improving trend
                  prediction accuracy by 70%
                </li>
                <li>
                  Worked with a customer to build a plugin architecture for
                  their existing software to enable them to ramp up the number
                  of developers working on their code
                </li>
                <li>
                  Delivered responsive, cross-browser compatible and
                  accessibility compliant websites, achieving 17% faster load
                  time than industry average using React and Redux
                </li>
                <li>
                  Collaborated with the UX/UI design teams to improve the
                  website and applications, increasing conversion rates by 20%
                  using SASS/SCSS and Bootstrap.
                </li>
                <li>
                  Expanded features, refined code, and improved performance with
                  React, producing smoother operations and enhancing user
                  engagement.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>NextJs</li>
                <li>JavaScript</li>
                <li>Laravel</li>
                <li>jQuery</li>
                <li>Vue/Quasar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
