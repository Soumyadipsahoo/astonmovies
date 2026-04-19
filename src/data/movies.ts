import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";
import poster7 from "@/assets/poster-7.jpg";
import poster8 from "@/assets/poster-8.jpg";

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
    title: "Ember of Dawn",
    poster: poster1,
    rating: 8.7,
    genre: "Action / Thriller",
    duration: "2h 18m",
    year: 2024,
    description:
      "A lone warrior rises from the ashes to reclaim a forgotten kingdom in a fiery battle of fate and vengeance.",
  },
  {
    id: "2",
    title: "Orbit Zero",
    poster: poster2,
    rating: 9.1,
    genre: "Sci-Fi / Adventure",
    duration: "2h 32m",
    year: 2024,
    description:
      "An astronaut stranded beyond the edge of the solar system must outwit an unknown intelligence to find his way home.",
  },
  {
    id: "3",
    title: "Neon Verdict",
    poster: poster3,
    rating: 8.4,
    genre: "Crime / Cyberpunk",
    duration: "1h 58m",
    year: 2024,
    description:
      "In a rain-soaked city of gold and neon, a hacker uncovers a conspiracy that could reshape the future.",
  },
  {
    id: "4",
    title: "Blade of Eternity",
    poster: poster4,
    rating: 8.9,
    genre: "Fantasy / Epic",
    duration: "2h 45m",
    year: 2024,
    description:
      "A chosen warrior wields the legendary blade to defend his people from an ancient awakening.",
  },
  {
    id: "5",
    title: "Golden Hour",
    poster: poster5,
    rating: 8.2,
    genre: "Romance / Drama",
    duration: "1h 52m",
    year: 2024,
    description:
      "Two souls collide one perfect summer evening — a love story written in the colors of the setting sun.",
  },
  {
    id: "6",
    title: "Midnight Lantern",
    poster: poster6,
    rating: 8.5,
    genre: "Noir / Mystery",
    duration: "2h 04m",
    year: 2024,
    description:
      "A weary detective walks the foggy streets searching for a truth no one wants found.",
  },
  {
    id: "7",
    title: "The Hollow Forest",
    poster: poster7,
    rating: 7.9,
    genre: "Horror / Suspense",
    duration: "1h 46m",
    year: 2024,
    description:
      "A traveler ventures into a forest where light bleeds gold and nothing that enters returns the same.",
  },
  {
    id: "8",
    title: "Toxic Reign",
    poster: poster8,
    rating: 9.3,
    genre: "Action / Bollywood Epic",
    duration: "2h 56m",
    year: 2024,
    description:
      "From the dust of a forgotten gold mine rises a legend who will burn empires to take the throne.",
  },
];
