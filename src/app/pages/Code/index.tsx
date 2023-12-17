import PageWrapper from "@/app/components/PageWrapper";
import { CodePage, OGImageWrapper, Projects } from "./styles";
import { Project } from "@/app/components/Project";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Code = () => {
  return (
    <CodePage>
      <PageWrapper>
        <h2>Code</h2>
        <p>
          I use <strong>Next.JS (React)</strong> as a basis for pretty much all
          of my projects, picking up technologies that I need as I go along.
        </p>
        <p>
          Highlights include <strong>Google Cloud</strong>,{" "}
          <strong>Prismic CMS</strong> and the <strong>OpenAI API</strong>.
          Click the button below for the full list of technologies I&apos;ve
          explored.
        </p>
        <details>
          <summary>The button 🎯</summary>
          <p>
            <strong>Frameworks and languages</strong>
          </p>
          <ul>
            <li>NextJS (React)</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
          <p>
            <strong>Styling/CSS</strong> - SASS with{" "}
            <a href="https://www.css-components.net" target="_blank">
              CSS Components
            </a>
          </p>
          <p>
            <strong>Backend & Cloud</strong>
            <small>
              : Encompassing a vast range of functions, including hosting,
              storage, previews, and authentication.
            </small>
          </p>
          <ul>
            <li>Vercel</li>
            <li>Google Cloud</li>
            <li>PostgreSQL</li>
          </ul>
          <p>
            <strong>CMS</strong>
            <small>
              : Content Management Systems, similar to Wordpress but with more
              flexibility.
            </small>
          </p>
          <ul>
            <li>Prismic</li>
            <li>PayloadCMS</li>
            <li>Wagtail</li>
          </ul>
          <p>
            <strong>AI</strong>
          </p>
          <ul>
            <li>ChatGPT/OpenAI API</li>
            <li>Stable Diffusion</li>
          </ul>
          <p>
            <strong>Productivity</strong>
          </p>
          <ul>
            <li>
              Git
              <ul>
                <li>Github</li>
                <li>Gerrit</li>
              </ul>
            </li>
            <li>Jira</li>
            <li>Google Workspace</li>
          </ul>
        </details>
        <h2>Projects</h2>
        <p>
          Full case studies pending. In the meantime, check each project&apos;s{" "}
          <code>README.md</code> inside the Github <code>Code</code> links!
        </p>
        <Projects>
          <Project>
            <OGImageWrapper>
              <Image src="/getIntoGizz.png" alt="Get Into Gizz image" fill />
            </OGImageWrapper>
            <div>
              <h3>Get Into Gizz</h3>
              <p>
                A website to explore genreconfused Australian rock band, King
                Gizzard and the Lizard Wizard.
              </p>
              <p>
                <a href="https://www.get-into-gizz.com/" target="_blank">
                  Website
                </a>
                {" | "}
                <a
                  href="https://github.com/gloyens/gizz-next-remake"
                  target="_blank"
                >
                  Code
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <OGImageWrapper>
              <Image
                src="/movieBot.png"
                alt="MovieBot.app promotional image"
                fill
              />
            </OGImageWrapper>
            <div>
              <h3>MovieBot</h3>
              <p>An AI-powered movie recommendation app.</p>
              <p>
                <a href="https://www.moviebot.app/" target="_blank">
                  Website
                </a>
                {" | "}
                <a href="https://github.com/gloyens/movie-recs" target="_blank">
                  Code
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <OGImageWrapper>
              <Image
                src="/rmrkblty.png"
                alt="Rmrkblty.org promotional image"
                fill
              />
            </OGImageWrapper>
            <div>
              <h3>Rmrkblty</h3>
              <p>
                A website for Rmrkblty, a movement to empower people to
                celebrate their achievements in the workplace and beyond.
              </p>
              <p>
                <a href="https://rmrkblty.org" target="_blank">
                  Website
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <OGImageWrapper>
              <Image
                src="/og-image.png"
                alt="Gloyens.co.uk promotional image"
                fill
              />
            </OGImageWrapper>
            <div>
              <h3>Portfolio</h3>
              <p>The website you&apos;re looking at now!</p>
              <p>
                <a
                  href="https://github.com/gloyens/portfolio-2024"
                  target="_blank"
                >
                  Code
                </a>
              </p>
            </div>
          </Project>
        </Projects>
      </PageWrapper>
    </CodePage>
  );
};

export default Code;
