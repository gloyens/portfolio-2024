"use client";

import Image from "next/image";
import {
  PlayerWrapper,
  AlbumWrapper,
  ImageContainer,
  PlayBar,
  Marquee,
} from "./styles";
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
    img: string;
    track: string;
    trackName: string;
  }[];
}

const Player = ({ albums }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const albumWrapperRef = useRef<HTMLDivElement>(null);

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

    setIsPlaying(false);

    if (audio) {
      audio.src = albums[activeIndex].track;
    }
  };

  return (
    <PlayerWrapper>
      {albums.map((album, i) => (
        <AlbumWrapper key={i} active={activeIndex === i} ref={albumWrapperRef}>
          <ImageContainer>
            <Image src={album.img} alt={`${album.name} album cover`} fill />
          </ImageContainer>
          {album.name.length >= 16 ? (
            <Marquee>
              <h3>
                {Array.from({ length: 4 }, (_, i) => (
                  <span key={i}>{album.name}</span>
                ))}
              </h3>
            </Marquee>
          ) : (
            <h3>{album.name}</h3>
          )}
          {album.artist.length >= 16 ? (
            <Marquee>
              <p>
                {Array.from({ length: 4 }, (_, i) => (
                  <span key={i}>{album.artist}</span>
                ))}
              </p>
            </Marquee>
          ) : (
            <p>{album.artist}</p>
          )}
        </AlbumWrapper>
      ))}
      <PlayBar>
        <button title="Previous album" onClick={() => navigateAlbum("next")}>
          <IoIosSkipBackward />
        </button>
        <button
          title={`Play ${albums[activeIndex].trackName} by ${albums[activeIndex].artist}`}
          onClick={() => handlePlay()}
        >
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button title="Next album" onClick={() => navigateAlbum("prev")}>
          <IoIosSkipForward />
        </button>
      </PlayBar>

      <audio ref={audioRef} src={albums[activeIndex].track} />
    </PlayerWrapper>
  );
};

export default Player;
