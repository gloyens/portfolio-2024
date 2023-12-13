import Player from "@/app/components/Player";
import { MusicPage } from "./styles";

const albumData = [
  {
    artist: "Sweet Trip",
    name: "Velocity : Design : Comfort",
    src: "/albums/velocityDesignComfort.jpg",
  },
  {
    artist: "Stereolab",
    name: "Dots and Loops",
    src: "/albums/dotsAndLoops.png",
  },
  {
    artist: "King Gizzard and the Lizard Wizard",
    name: "I'm In Your Mind Fuzz",
    src: "/albums/imInYourMindFuzz.jpg",
  },
  { artist: "Steely Dan", name: "Aja", src: "/albums/aja.jpg" },
];

const Music = () => {
  return (
    <MusicPage>
      <p>Here are some albums I like.</p>
      <Player albums={albumData} />
    </MusicPage>
  );
};

export default Music;
