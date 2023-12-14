import Player from "@/app/components/Player";
import { MusicPage } from "./styles";

const albumData = [
  {
    artist: "Sweet Trip",
    name: "Velocity : Design : Comfort",
    img: "/albums/velocityDesignComfort.jpg",
    track: "/audio/dsco.mp3",
    trackName: "Dsco",
  },
  {
    artist: "Stereolab",
    name: "Dots and Loops",
    img: "/albums/dotsAndLoops.png",
    track: "/audio/brakhage.mp3",
    trackName: "Brakhage",
  },
  {
    artist: "King Gizzard and the Lizard Wizard",
    name: "I'm In Your Mind Fuzz",
    img: "/albums/imInYourMindFuzz.jpg",
    track: "/audio/amIInHeaven.mp3",
    trackName: "Am I In Heaven?",
  },
  {
    artist: "Steely Dan",
    name: "Aja",
    img: "/albums/aja.jpg",
    track: "/audio/peg.mp3",
    trackName: "Peg",
  },
];

const Music = () => {
  return (
    <MusicPage>
      <Player albums={albumData} />
    </MusicPage>
  );
};

export default Music;
