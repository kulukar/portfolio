type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;

  description: string;

  thumbnail: string;

  gallery: string[];

  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Takumi Polytechnic",
    slug: "takumi-polytechnic",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/takumi/Thumbnail.png",
    gallery: [
      "/gallery/takumi/Galeri1.png",
      "/gallery/takumi/Galeri2.png",
      "/gallery/takumi/Galeri3.png",
      "/gallery/takumi/Galeri4.png",
    ],
    description:
      "A modern digital experience focused on interaction, visual clarity, and premium usability.",
    featured: true,
  },

  {
    title: "Kaigo Fukushishi",
    slug: "kaigo-fukushishi",
    category: "Mobile Design",
    year: "2025",
    thumbnail: "/gallery/kaigo/Thumbnail.png",
    gallery: [
      "/gallery/kaigo/Galeri1.png",
      "/gallery/kaigo/Galeri2.png",
      "/gallery/kaigo/Galeri3.png",
      "/gallery/kaigo/Galeri4.png",
    ],
    description:
      "A premium branding system designed with clarity, modern aesthetics, and strategic storytelling.",
    featured: true,
  },

  {
    title: "Ground Detector - KAI",
    slug: "ground-detector-kai",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/ground/Thumbnail.png",
    gallery: [
      "/gallery/ground/Galeri1.png",
      "/gallery/ground/Galeri2.png",
      "/gallery/ground/Galeri3.png",
      "/gallery/ground/Galeri4.png",
    ],
    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
  },
  {
    title: "Ride Index - KAI",
    slug: "ride-index",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/ride/Thumbnail.png",
    gallery: [
      "/gallery/ride/Galeri1.png",
      "/gallery/ride/Galeri2.png",
      "/gallery/ride/Galeri3.png",
      "/gallery/ride/Galeri4.png",
    ],
    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
  },
  {
    title: "Smart Classroom",
    slug: "smart-classroom",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/smart/Thumbnail.png",
    gallery: [
      "/gallery/smart/Galeri1.png",
      "/gallery/smart/Galeri2.png",
      "/gallery/smart/Galeri3.png",
      "/gallery/smart/Galeri4.png",
    ],
    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
  },
];
