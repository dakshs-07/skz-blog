import logo from "./logo.png";
import LeeKnow from "./lee-know.jpg";
import Maniac from "./maniac.jpg";
import SKZ1 from "./skz-2.jpg";
import SKZ2 from "./skz-3.jpg";
import DOIT from "./do-it.jpg";


export const assets = {
  logo,
  LeeKnow,
  Maniac,
  SKZ1,
  SKZ2,
  DOIT
};

export const blogdata = [
  {
    id: 1,
    title: "Stray Kids Through The Eras",
    description: "How the chaotic Stray Kids grew through the years.",
    date: Date.now(),
    category: "SKZ",
    image: SKZ1,
    slug:"stray-kids"
  },
  {
    id: 2,
    title: "Lee Know the Cat Butler",
    description: "How the chaotic Stray Kids grew through the years.",
    date: Date.now(),
    category: "Lee Know",
    image: LeeKnow,
    slug: "lee-know-cats"
  },
  {
    id:3,
    title: "Han Jisung the Ace of Kpop",
    description: "The cleanest bug in the world lol - know more about the rapper babygirl of SKZ",
    date: Date.now(),
    category: "Han Jisung",
    image: DOIT,
    slug: "han-jisung"
  },
  {
    id: 4,
    title: "Lee Know's Cats",
    description: "Soonie Dongie Dorui AUra",
    date: Date.now(),
    category: "Lee Know",
    image: LeeKnow,
    slug: "lee-know"
  }
];
