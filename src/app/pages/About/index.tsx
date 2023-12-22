import PageWrapper from "@/app/components/PageWrapper";
import { AboutPage, ProfilePicWrapper, ImageWrapper } from "./styles";
import Image from "next/image";

const About = () => {
  return (
    <AboutPage>
      <PageWrapper>
        <ProfilePicWrapper>
          <Image
            src="/profilePic.jpg"
            alt="George Gloyens profile picture"
            fill
          />
        </ProfilePicWrapper>
        <h2>Hi, I&apos;m George!</h2>
        <p>
          I&apos;m a web developer at{" "}
          <a href="https://www.phantom.land">Phantom</a> 👻. In my spare time I
          make <a href="https://rhosgfx.itch.io">icons</a>.
        </p>
        <p>
          I love to learn, and I&apos;m always picking up new things. Have a
          look through this website to see what I&apos;ve been up to!
        </p>
        <p>Keep reading for a little info about how I got to where I am. 👇</p>
        <div>
          <h3>University of Exeter</h3>
          <small>2015-2019</small>
        </div>
        <p>
          At Exeter, I took Business and Management with proficiency in advanced
          French, where I received a 2:1.
        </p>
        <p>
          It was at Exeter where I would learn the skills that would direct the
          course of the next few years: Japanese, Adobe Illustrator, and some
          (very basic!) web development.
        </p>
        <ImageWrapper>
          <Image src="/japan.webp" alt="Teaching in Japan" fill />
        </ImageWrapper>
        <div>
          <h3>Teaching in Japan</h3>
          <small>2019-2021</small>
        </div>
        <p>
          In Japan, I taught English at a high school in Ibaraki. I spent a lot
          of time in{" "}
          <a
            href="https://www.google.com/search?q=mito+ibaraki"
            target="_blank"
          >
            Mito
          </a>{" "}
          and the mountains around Iwama, and of course in Tokyo, which was
          nearby.
        </p>
        <p>
          I also started selling some of my designs online, which would later
          evolve into a full freelance business.
        </p>
        <div>
          <h3>Graphic Design</h3>
          <small>2021-2022</small>
        </div>
        <p>
          Immediately after leaving Japan I was hired full-time by a large
          client. I worked with them for a year, simultaneously building my{" "}
          <a href="https://x.com/rhosgfx" target="_blank">
            public profile
          </a>{" "}
          on Twitter.
        </p>
        <p>
          After leaving that job I began selling bespoke UI and miscellaneous
          graphics. After receiving enough commissions for similar icons that I
          was unable to keep up with demand, I decided to release my first{" "}
          <a href="https://rhosgfx.itch.io/vector-icon-pack" target="_blank">
            icon pack
          </a>
          .
        </p>
        <ImageWrapper style={{ aspectRatio: "5 / 4" }}>
          <Image src="/icons.png" alt="Icons" fill />
        </ImageWrapper>
        <p>
          That icon pack has since sold over 1,000 copies, and is instantly
          recognisable to anyone in the Roblox space.
        </p>
        <div>
          <h3>Web Development</h3>
          <small>2022-present</small>
        </div>
        <p>
          Despite the success, I knew that graphic design wasn&apos;t something
          I wanted to do long-term. You&apos;ve probably guessed from the above
          that I love to learn new things, and so I decided to pursue a career
          that I knew would always give me new challenges and opportunities to
          grow: web development.
        </p>
        <p>
          After playing around with basic HTML/CSS/Javascript to make sure I
          actually enjoyed coding, I took{" "}
          <a href="https://www.lewagon.com/" target="_blank">
            Le Wagon&apos;s
          </a>{" "}
          Web Development bootcamp in late 2022 (and had a blast!).
        </p>
        <ImageWrapper>
          <Image src="/leWagon.jpg" alt="Le Wagon" fill />
        </ImageWrapper>
        <p>
          I joined Phantom shortly after in February 2023, and I&apos;ve been
          there ever since. I&apos;ve learned a frankly insane amount in a
          really short time, and I&apos;ve helped bring to life some extremely
          cool projects.
        </p>
        <p>I&apos;m excited to see where I end up next!</p>
        <ImageWrapper>
          <Image src="/xmas.png" alt="Bonus christmas image" fill />
        </ImageWrapper>
        <small>
          <em>(Bonus AI christmas image 🎅)</em>
        </small>
      </PageWrapper>
    </AboutPage>
  );
};

export default About;
