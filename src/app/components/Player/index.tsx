"use client";

import Image from "next/image";
import { PlayerWrapper, AlbumWrapper, ImageContainer, PlayBar } from "./styles";
import { useState } from "react";

interface Props {
  albums: {
    artist: string;
    name: string;
    src: string;
  }[];
}

const Player = ({ albums }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateAlbum = (direction: "next" | "prev") => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === albums.length - 1 ? 0 : prevIndex + 1;
      } else if (direction === "prev") {
        return prevIndex === 0 ? albums.length - 1 : prevIndex - 1;
      }
      return prevIndex;
    });
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
        <button onClick={() => navigateAlbum("next")}>Prev</button>
        <button>Play</button>
        <button onClick={() => navigateAlbum("prev")}>Next</button>
      </PlayBar>
    </PlayerWrapper>
  );
};

export default Player;
