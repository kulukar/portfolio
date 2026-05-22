type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;

  thumbnail: string;

  gallery: string[];
};

export const projects: Project[] = [
  {
    title: "Takumi Polytechnic",
    slug: "takumi-polytechnic",
    category: "UI/UX Design",
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
  },

  {
    title: "Kaigo Fukushishi",
    slug: "kaigo-fukushishi",
    category: "UI/UX Design",
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
  },

  {
    title: "Nova",
    slug: "nova",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/nova/Thumbnail.png",
    gallery: [
      "/gallery/nova/Galeri1.png",
      "/gallery/nova/Galeri2.png",
      "/gallery/nova/Galeri3.png",
    ],
    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
  },
  {
    title: "Novas",
    slug: "novas",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/novas/Thumbnail.png",
    gallery: [
      "/gallery/novas/Galeri1.png",
      "/gallery/novas/Galeri2.png",
      "/gallery/novas/Galeri3.png",
    ],
    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
  },
];
