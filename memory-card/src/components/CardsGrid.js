import React, { useState, useEffect } from "react";
import Card from "./Card";
import kaneda from "../images/Kaneda.jpeg";
import kei from "../images/Kei.jpeg";
import tetsuo from "../images/Tetsuo.jpeg";
import kaori from "../images/Kaori.webp";
import kiyoko from "../images/Kiyoko.webp";
import masaru from "../images/Masaru.webp";
import mitsuru from "../images/Mitsuru.webp";
import eiichi from "../images/Eiichi.webp";
import onishi from "../images/Onishi.webp";
import shikishima from "../images/Shikishima.webp";
import takashi from "../images/Takashi.webp";
import yamagata from "../images/Yamagata.jpeg";
import yuji from "../images/Yuji.webp";

function CardsGrid(props) {
  const { handleGame } = props;

  let images = [
    { src: kaneda, name: "Kaneda" },
    { src: kei, name: "Kei" },
    { src: tetsuo, name: "Tetsuo" },
    { src: kaori, name: "Kaori" },
    { src: kiyoko, name: "Kiyoko" },
    { src: masaru, name: "Masaru" },
    { src: mitsuru, name: "Mitsuru" },
    { src: eiichi, name: "Eiichi" },
    { src: onishi, name: "Onishi" },
    { src: shikishima, name: "Shikishima" },
    { src: takashi, name: "Takashi" },
    { src: yamagata, name: "Yamagata" },
    { src: yuji, name: "Yuji" },
  ];

  const [cards] = useState(images);

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
    shuffle(cards);
  });

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.name} handleGame={handleGame} />
      ))}
    </>
  );
}

export default CardsGrid;
