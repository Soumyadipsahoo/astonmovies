import youth from "@/assets/movies/youth.jpg";
import withLove from "@/assets/movies/with-love.jpg";
import dhurandhar from "@/assets/movies/dhurandhar.jpg";
import dhurandharRevenge from "@/assets/movies/dhurandhar-revenge.jpg";
import toxic from "@/assets/movies/toxic.jpg";
import apex from "@/assets/movies/apex.jpg";
import hailMary from "@/assets/movies/hail-mary.jpg";

export type Movie = {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  duration: string;
  year: number;
  description: string;
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "Project Hail Mary",
    poster: hailMary,
    rating: 8.2,
    genre: "Sci-Fi / Adventure",
    duration: "2h 37m",
    year: 2026,
    description:
      "Science teacher Ryland Grace wakes up on a spaceship light years from home with no memory of his mission — to solve the riddle of a mysterious substance killing the sun and save Earth from extinction.",
  },
  {
    id: "2",
    title: "Dhurandhar",
    poster: dhurandhar,
    rating: 7.1,
    genre: "Action / Crime",
    duration: "3h 32m",
    year: 2025,
    description:
      "A mysterious traveler slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within.",
  },
  {
    id: "3",
    title: "Dhurandhar: The Revenge",
    poster: dhurandharRevenge,
    rating: 7.6,
    genre: "Action / Crime",
    duration: "3h 49m",
    year: 2026,
    description:
      "As rival gangs, corrupt officials and a ruthless Major Iqbal close in, Hamza's mission for his country spirals into a bloody personal war on the streets of Lyari.",
  },
  {
    id: "4",
    title: "Toxic",
    poster: toxic,
    rating: 7.5,
    genre: "Action / Thriller",
    duration: "3h 15m",
    year: 2026,
    description:
      "Set in a bygone era, this gripping tale unfolds in the coastal paradise of Goa — where a powerful drug cartel pulls the strings behind a facade of sun-soaked beaches and vibrant culture.",
  },
  {
    id: "5",
    title: "Apex",
    poster: apex,
    rating: 6.4,
    genre: "Thriller / Action",
    duration: "1h 36m",
    year: 2026,
    description:
      "A grieving woman pushing her limits on a solo adventure in the Australian wild is ensnared in a twisted game with a cunning killer who thinks she's prey.",
  },
  {
    id: "6",
    title: "Youth",
    poster: youth,
    rating: 7.3,
    genre: "Comedy / Romance",
    duration: "2h 21m",
    year: 2026,
    description:
      "Praveen, a 15-year-old boy, enters adolescence determined to find true love before school ends. Through heartbreaks and friendships he slowly discovers what love really means.",
  },
  {
    id: "7",
    title: "With Love",
    poster: withLove,
    rating: 6.7,
    genre: "Romance / Comedy",
    duration: "2h 21m",
    year: 2026,
    description:
      "Sathya reluctantly agrees to a blind date arranged by his sister and meets Monisha. They discover they attended the same school years ago, bonding over shared memories and old crushes.",
  },
];
