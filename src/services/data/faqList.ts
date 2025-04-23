export type FaqType = {
  id: number;
  question: string;
  answer: string;
};

export const faqList: FaqType[] = [
  {
    id: 1,
    question: "What is FSTA, and who can join?",
    answer:
      "FSTA (Frontier Science and Tech Alliance) is a community for science and technology enthusiasts. Anyone passionate about learning, experimenting, and innovating can join, regardless of their background.",
  },
  {
    id: 2,
    question: "How can I contact the executive team?",
    answer:
      "You can reach out to us via our website, email, or social media channels. We’re always here to answer your questions and support your journey in science and technology!",
  },
  {
    id: 3,
    question: "Do I need prior experience to join?",
    answer:
      "No! Whether you’re a beginner or an expert, FSTA welcomes everyone. Our events and activities cater to all skill levels, from curious learners to experienced innovators.",
  },
  {
    id: 4,
    question: "How can I contribute to the club?",
    answer:
      "You can participate in projects, volunteer for events, share ideas, and even take on leadership roles. We encourage members to be active and make an impact!",
  },
  {
    id: 5,
    question: "What is the club's mission?",
    answer:
      "Our mission is to promote science and technology education, foster innovation, and create a supportive community for like-minded individuals. We aim to inspire and guide our members in their scientific journey.",
  },
  {
    id: 6,
    question: "Are there any membership fees?",
    answer:
      "Our core activities are free to join, but some special events or competitions may have a registration fee. We always strive to keep opportunities accessible to everyone.",
  },
];
