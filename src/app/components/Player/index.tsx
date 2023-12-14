"use client";

import Image from "next/image";
import { PlayerWrapper, AlbumWrapper, ImageContainer, PlayBar } from "./styles";
import { useRef, useState } from "react";

import {
  IoIosSkipBackward,
  IoIosSkipForward,
  IoIosPlay,
  IoIosPause,
} from "react-icons/io";

interface Props {
  albums: {
    artist: string;
    name: string;
    src: string;
  }[];
}

const Player = ({ albums }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const trackNames = ["/dsco.mp3", "/dsco.mp3", "/dsco.mp3", "/dsco.mp3"];

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      setIsPlaying(!audio.paused);
    }
  };

  const navigateAlbum = (direction: "next" | "prev") => {
    const audio = audioRef.current;

    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === albums.length - 1 ? 0 : prevIndex + 1;
      } else if (direction === "prev") {
        return prevIndex === 0 ? albums.length - 1 : prevIndex - 1;
      }
      return prevIndex;
    });

    if (audio) {
      audio.src = `/audio/${trackNames[activeIndex]}`;
    }
  };

  return (
    <PlayerWrapper>
      {albums.map((album, i) => (
        <AlbumWrapper key={i} active={activeIndex === i}>
          <ImageContainer>
            <Image src={album.src} alt={`${album.name} album cover`} fill />
          </ImageContainer>
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
        </AlbumWrapper>
      ))}
      <PlayBar>
        <button title="Next album" onClick={() => navigateAlbum("next")}>
          <IoIosSkipBackward />
        </button>
        <button title="Play sample" onClick={() => handlePlay()}>
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button title="Previous album" onClick={() => navigateAlbum("prev")}>
          <IoIosSkipForward />
        </button>
      </PlayBar>

      <audio ref={audioRef} src={`/audio/${trackNames[activeIndex]}`} />
    </PlayerWrapper>
  );
};

export default Player;
