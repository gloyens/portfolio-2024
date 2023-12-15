import PageWrapper from "@/app/components/PageWrapper";
import { CodePage, ImageWrapper, Projects } from "./styles";
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
          </p>
          <ul>
            <li>Vercel</li>
            <li>Google Cloud</li>
          </ul>
          <p>
            <strong>CMS</strong> - Content Management Systems, similar to
            Wordpress but with more flexibility
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
        <Projects>
          <Project>
            <ImageWrapper>
              <Image src="/icons.png" alt="aaa" fill />
            </ImageWrapper>
            <div>
              <h3>Get Into Gizz</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                sed magni deleniti dignissimos.
              </p>
              <p>
                <a href="https://example.com" target="_blank">
                  Website
                </a>
                {" | "}
                <a href="https://github.com" target="_blank">
                  Code
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <ImageWrapper>
              <Image src="/icons.png" alt="aaa" fill />
            </ImageWrapper>
            <div>
              <h3>MovieBot</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                sed magni deleniti dignissimos.
              </p>
              <p>
                <a href="https://example.com" target="_blank">
                  Website
                </a>
                {" | "}
                <a href="https://github.com" target="_blank">
                  Code
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <ImageWrapper>
              <Image src="/icons.png" alt="aaa" fill />
            </ImageWrapper>
            <div>
              <h3>Rmrkblty</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                sed magni deleniti dignissimos.
              </p>
              <p>
                <a href="https://example.com" target="_blank">
                  Website
                </a>
                {" | "}
                <a href="https://github.com" target="_blank">
                  Code
                </a>
              </p>
            </div>
          </Project>

          <Project>
            <ImageWrapper>
              <Image src="/icons.png" alt="aaa" fill />
            </ImageWrapper>
            <div>
              <h3>Portfolio</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                sed magni deleniti dignissimos.
              </p>
              <p>
                <a href="https://example.com" target="_blank">
                  Website
                </a>
                {" | "}
                <a href="https://github.com" target="_blank">
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
