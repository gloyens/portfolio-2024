import PageWrapper from "@/app/(portfolio)/components/PageWrapper";
import { IconsPage, Widgets } from "./styles";
import { Project } from "@/app/(portfolio)/components/Project";

const Icons = () => {
  return (
    <IconsPage>
      <PageWrapper>
        <h2>Icons</h2>
        <p>
          Below are all the main icon packs I&apos;m selling on{" "}
          <a href="https://rhosgfx.itch.io" target="_blank">
            itch.io
          </a>
          . Not included is the{" "}
          <a
            href="https://itch.io/s/103025/rhosgfx-icon-bundle"
            target="_blank"
          >
            Icon Bundle
          </a>
          , which contains all my icon packs at a discounted price.
        </p>
        <p>
          Follow me on{" "}
          <a href="https://www.x.com/rhosgfx" target="_blank">
            Twitter
          </a>{" "}
          for updates!
        </p>
        <Widgets>
          <Project>
            <iframe
              src="https://itch.io/embed/1463774"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-icon-pack">
                Vector Icon Pack by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector Icon Pack</h3>
              <p>
                The pack that started it all. A bestseller with over 1000 unique
                icons.
              </p>
              <a
                href="https://rhosgfx.itch.io/vector-icon-pack"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/2043033"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/cartoony-ui-pack">
                Cartoony UI Pack by Rhos
              </a>
            </iframe>
            <div>
              <h3>Cartoony UI Pack</h3>
              <p>A UI pack designed to work with my icons.</p>
              <a
                href="https://rhosgfx.itch.io/cartoony-ui-pack"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/2064382"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-food-pack">
                Vector Food Pack by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector Food Pack</h3>
              <p>A crowd favouite with a lot of potential for updates.</p>
              <a
                href="https://rhosgfx.itch.io/vector-food-pack"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/1679559"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-item-tiers">
                Vector Item Tiers by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector Item Tiers</h3>
              <p>
                Progressively larger groups of currency items, for use in shops
                and rewards.
              </p>
              <a
                href="https://rhosgfx.itch.io/vector-item-tiers"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/2024966"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-animals-pack">
                Vector Animals Pack by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector Animals Pack</h3>
              <p>A newer pack with lots of updates planned.</p>
              <a
                href="https://rhosgfx.itch.io/vector-animals-pack"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/1555273"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-gamepasses">
                Vector Gamepasses by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector Gamepasses</h3>
              <p>Another bestseller, particularly in the Roblox community.</p>
              <a
                href="https://rhosgfx.itch.io/vector-gamepasses"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
          <Project>
            <iframe
              src="https://itch.io/embed/2309615"
              width="208"
              height="167"
            >
              <a href="https://rhosgfx.itch.io/vector-people-pack">
                Vector People Pack by Rhos
              </a>
            </iframe>
            <div>
              <h3>Vector People Pack</h3>
              <p>Another recent pack with lost more updates planned.</p>
              <a
                href="https://rhosgfx.itch.io/vector-people-pack"
                target="_blank"
              >
                View pack
              </a>
            </div>
          </Project>
        </Widgets>
      </PageWrapper>
    </IconsPage>
  );
};

export default Icons;
