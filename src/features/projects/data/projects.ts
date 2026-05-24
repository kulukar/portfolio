export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;

  description: string;

  thumbnail: string;

  featured: boolean;

  // Case Study
  role: string;
  timeline: string;
  tools: {
    name: string;
    icon: string;
  }[];
  overview: string;
  overviewDesc: string;
  problem: string;
  goal: string;
  research: string;
  result: string;

  showcase: {
    image: string;
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Takumi Polytechnic",
    slug: "takumi-polytechnic",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/takumi/Thumbnail.png",

    description:
      "Redesigning the official website experience for Politeknik Takumi and its study programs to create a modern, trustworthy, and student-friendly digital platform.",
    featured: true,

    role: "UI/UX Designer",
    timeline: "7 Months",
    tools: [
      {
        name: "Figma",
        icon: "/tools/figma.svg",
      },
    ],
    overview:
      "Redesigning the Politeknik Takumi website to create a modern, accessible, and user-friendly digital experience for students and academic staff.",
    overviewDesc:
      "The existing campus website lacked visual consistency and clear information structure, making it difficult for users to access important academic and admission information efficiently. The institution needed a more modern digital presence that could better represent its identity and improve the overall user experience across desktop and mobile platforms.",
    problem:
      "The previous website experience felt outdated and difficult to navigate due to inconsistent layouts, weak visual hierarchy, and poorly organized information. Users often struggled to quickly access important sections such as admissions, study programs, and academic updates, especially on mobile devices.",
    goal: "The goal of this project was to redesign the website into a modern academic platform with better usability, clearer navigation, and a stronger visual identity. The redesign also aimed to improve accessibility, responsiveness, and overall user engagement across different devices.",
    research:
      "Research was conducted through competitor analysis, website audits, and information architecture reviews to better understand user behavior and navigation issues. The findings showed that users primarily needed faster access to admission information, study program pages, academic updates, and mobile-friendly browsing experiences.",
    result:
      "The redesign successfully transformed the website into a cleaner and more modern digital platform with improved navigation flow, stronger visual consistency, and better responsiveness across devices. The final experience feels more professional, accessible, and aligned with modern academic website standards while making information easier to explore and understand.",

    showcase: [
      {
        image: "/gallery/takumi/Galeri1.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/takumi/Galeri2.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/takumi/Galeri3.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/takumi/Galeri4.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
    ],
  },

  {
    title: "Kaigo Fukushishi",
    slug: "kaigo-fukushishi",
    category: "Mobile Design",
    year: "2025",
    thumbnail: "/gallery/kaigo/Thumbnail.png",

    description:
      "Kaigo Fukushishi is a mobile learning application designed to help Indonesian caregivers prepare for caregiving jobs and certification programs in Japan. Developed as part of the Learning Factory program in collaboration with PT Minori, the application provides structured learning materials, practice exams, and progress tracking to support users throughout their preparation process. The platform focuses on creating a more accessible, engaging, and flexible learning experience optimized for mobile devices.",
    featured: true,
    role: "UI/UX Designer",
    timeline: "5 months",
    tools: [
      {
        name: "Figma",
        icon: "/tools/figma.svg",
      },
    ],
    overview:
      "Designing a mobile learning application for Indonesian caregivers preparing for work and certification programs in Japan through the Learning Factory collaboration with PT Minori.",
    overviewDesc:
      "The Learning Factory program collaborated with PT Minori to prepare Indonesian participants for caregiving jobs in Japan. However, the learning process still relied heavily on manual materials and lacked an interactive digital platform that could support independent learning and exam preparation efficiently.",
    problem:
      "Participants often struggled to access structured learning materials, practice exams, and progress tracking in one place. The existing learning experience also lacked flexibility, making it difficult for users to study consistently and prepare effectively for Kaigo certification requirements in Japan.",
    goal: "The goal of this project was to create a modern and accessible mobile learning platform that helps Indonesian caregivers study more efficiently through interactive learning materials, practice tests, and progress tracking features while improving overall usability and engagement.",
    research:
      "Research was conducted by understanding the learning flow used in the Learning Factory program, analyzing similar educational applications, and identifying the main needs of caregiver trainees preparing for work in Japan. The findings showed that users needed a simpler learning experience, faster access to practice exams, and a more organized study structure that could be accessed anytime through mobile devices.",
    result:
      "The final design delivered a clean and user-friendly mobile learning experience with structured learning modules, practice examinations, progress tracking, and authentication flows optimized for mobile users. The application successfully created a more engaging and flexible learning environment for Indonesian caregiver trainees preparing for work and certification in Japan.",

    showcase: [
      {
        image: "/gallery/kaigo/Galeri1.png",
        title: "Kaigo Fukushishi - Mobile Learning App",
        description:
          "Kaigo Fukushishi is a mobile learning application designed to help Indonesian caregivers prepare for caregiving jobs and certification programs in Japan.",
      },
      {
        image: "/gallery/kaigo/Galeri2.png",
        title: "Kaigo Fukushishi - Mobile Learning App",
        description:
          "Kaigo Fukushishi is a mobile learning application designed to help Indonesian caregivers prepare for caregiving jobs and certification programs in Japan.",
      },
      {
        image: "/gallery/kaigo/Galeri3.png",
        title: "Kaigo Fukushishi - Mobile Learning App",
        description:
          "Kaigo Fukushishi is a mobile learning application designed to help Indonesian caregivers prepare for caregiving jobs and certification programs in Japan.",
      },
      {
        image: "/gallery/kaigo/Galeri4.png",
        title: "Kaigo Fukushishi - Mobile Learning App",
        description:
          "Kaigo Fukushishi is a mobile learning application designed to help Indonesian caregivers prepare for caregiving jobs and certification programs in Japan.",
      },
    ],
  },

  {
    title: "Ground Detector - KAI",
    slug: "ground-detector-kai",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/ground/Thumbnail.png",

    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
    role: "UI/UX Designer",
    timeline: "7 months",
    tools: [
      {
        name: "Figma",
        icon: "/tools/figma.svg",
      },
    ],
    overview:
      "Developing a web-based ground detection system for KAI, focusing on creating an intuitive interface that provides real-time feedback and actionable insights. The project aimed to enhance user experience and improve the accuracy of ground detection capabilities.",
    overviewDesc:
      "A comprehensive web-based ground detection system for KAI, focusing on creating an intuitive interface that provides real-time feedback and actionable insights.",
    goal: "To create a reliable and user-friendly web application that delivers accurate ground detection results in real-time.",
    research:
      "Conducted user research to understand the specific needs and pain points of KAI's target users. Analyzed existing ground detection technologies to identify gaps and opportunities for improvement.",
    problem:
      "The previous ground detection system lacked real-time capabilities and provided limited actionable insights, leading to inefficiencies in operational decision-making.",
    result:
      "The developed web application successfully met the requirements for real-time ground detection, receiving positive feedback from users for its accuracy and ease of use. The system contributed to improved operational efficiency and decision-making capabilities for KAI.",
    showcase: [
      {
        image: "/gallery/ground/Galeri1.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ground/Galeri2.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ground/Galeri3.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ground/Galeri4.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
    ],
  },
  {
    title: "Ride Index - KAI",
    slug: "ride-index",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/ride/Thumbnail.png",

    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
    role: "UI/UX Designer",
    timeline: "6 months",
    tools: [
      {
        name: "Figma",
        icon: "/tools/figma.svg",
      },
    ],
    overview:
      "Creating a comprehensive ride index for KAI, focusing on providing users with real-time information and seamless navigation. The project aimed to enhance the overall user experience and improve accessibility.",
    overviewDesc:
      "A comprehensive ride index for KAI, focusing on providing users with real-time information and seamless navigation.",
    goal: "To develop a user-friendly platform that provides accurate and timely information about available rides, improving the overall travel experience for users.",
    research:
      "Conducted user research to understand the specific needs and pain points of KAI's target users. Analyzed existing ride-sharing platforms to identify gaps and opportunities for improvement.",
    result:
      "The developed ride index successfully met the requirements for real-time information delivery, receiving positive feedback from users for its accuracy and ease of use. The platform contributed to improved user satisfaction and operational efficiency for KAI.",
    problem:
      "The previous ride index lacked real-time capabilities and provided limited actionable insights, leading to inefficiencies in operational decision-making.",
    showcase: [
      {
        image: "/gallery/ride/Galeri1.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ride/Galeri2.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ride/Galeri3.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/ride/Galeri4.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
    ],
  },
  {
    title: "Smart Classroom",
    slug: "smart-classroom",
    category: "Web Design",
    year: "2024",
    thumbnail: "/gallery/smart/Thumbnail.png",

    description:
      "A clean and immersive web experience crafted for performance, usability, and visual consistency.",
    featured: true,
    role: "UI/UX Designer",
    timeline: "8 months",
    tools: [
      {
        name: "Figma",
        icon: "/tools/figma.svg",
      },
    ],
    overview:
      "Designing a smart classroom solution for KAI, focusing on creating an engaging and interactive learning environment. The project aimed to enhance student engagement and improve the overall educational experience.",
    overviewDesc:
      "A comprehensive smart classroom solution for KAI, focusing on creating an engaging and interactive learning environment.",
    goal: "To develop a user-friendly platform that facilitates effective learning and collaboration in a digital environment.",
    research:
      "Conducted user research to understand the specific needs and pain points of KAI's target users. Analyzed existing educational technologies to identify gaps and opportunities for improvement.",
    problem:
      "The previous smart classroom solution lacked the necessary features to support modern interactive learning and failed to provide an engaging user experience for both students and educators.",
    result:
      "The developed smart classroom solution successfully met the requirements for interactive learning, receiving positive feedback from users for its effectiveness and ease of use. The platform contributed to improved student engagement and learning outcomes for KAI.",
    showcase: [
      {
        image: "/gallery/smart/Galeri1.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/smart/Galeri2.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/smart/Galeri3.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
      {
        image: "/gallery/smart/Galeri4.png",
        title: "The new Takumi Polytechnic website",
        description:
          "The new Takumi Polytechnic website is now more modern and user-friendly.",
      },
    ],
  },
];
