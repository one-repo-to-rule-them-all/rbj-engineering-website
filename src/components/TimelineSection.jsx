// src/components/TimelineSection.jsx
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025 - Present",
    title: "Software Engineer",
    company: "RBJ Engineering Services",
    description: "Building scalable full-stack apps with React, Node.js, and GraphQL.",
  },
  {
    year: "2023 - Present",
    title: "Technical Consultant",
    company: "Freelance",
    description: "Helping businesses modernize tech stacks and automate operations.",
  },
  {
    year: "2021 - 2023",
    title: "IoT Developer (Side Projects)",
    company: "Self-driven",
    description: "Built automation systems using Arduino, PLC, Java, and Python.",
  },
  {
    year: "2018 - 2021",
    title: "Student | Computer Science",
    company: "University Name",
    description: "Studied software engineering, systems architecture, and AI fundamentals.",
  },
];

const TimelineSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Professional Timeline</h2>
      <div className="relative border-l border-gray-300 pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="absolute left-[-8px] top-1.5 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-500">{item.company} &mdash; {item.duration}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;