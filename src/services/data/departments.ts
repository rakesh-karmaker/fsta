export type DepartmentType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const departments: DepartmentType[] = [
  {
    id: 1,
    title: "Information Technology",
    description:
      "This department focuses on managing and implementing technological systems and solutions within an organization. It deals with hardware, software, networks, databases, and cybersecurity to support the company's operations and goals.",
    image: "information.webp",
  },
  {
    id: 2,
    title: "General Science",
    description:
      "This department covers a broad range of scientific disciplines, including biology, chemistry, physics, earth science, and environmental science. It involves research, experimentation, analysis, and the dissemination of scientific knowledge.",
    image: "science.webp",
  },
  {
    id: 3,
    title: "Astronomy",
    description:
      "Astronomy is the study of celestial objects such as stars, planets, galaxies, and the universe as a whole. It involves observation, theoretical modeling, and analysis to understand the origin, evolution, and behavior of these objects.",
    image: "astronomy.webp",
  },
  {
    id: 4,
    title: "Publications and Content writing",
    description:
      "This department is responsible for creating, editing, and publishing written content for various purposes, such as books, articles, reports, marketing materials, and online platforms. It may also involve managing content strategy, SEO, and digital publishing.",
    image: "writing.webp",
  },
  {
    id: 5,
    title: "Publicity and Management",
    description:
      "This department handles the promotion and marketing of products, services, or ideas to the public or targeted audiences. It involves developing advertising campaigns, managing public relations, organizing events, and overseeing brand image and reputation management.",
    image: "management.webp",
  },
];
