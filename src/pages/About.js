import TimelineSection from '../components/TimelineSection';

function About() {
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

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">

      {/* Intro */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I’m Rodolfo Baez Jr — a software engineer and consultant focused on building reliable, scalable systems that solve real-world problems. I specialize in web development, automation, and IoT, and thrive in the space where business needs meet technical solutions.
        </p>
      </section>



      <TimelineSection />

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          <li>
            <p className="font-semibold">B.S. in Computer Science</p>
            <p className="text-gray-600">University Name – Year Graduated</p>
          </li>
          <li>
            <p className="font-semibold">AWS Certified Solutions Architect</p>
            <p className="text-gray-600">Amazon Web Services – 2025</p>
          </li>
          <li>
            <p className="font-semibold">PLC Programming & Automation (Arduino Opta)</p>
            <p className="text-gray-600">Self-Paced, Project-Based – Ongoing</p>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">Software Engineer – RBJ Engineering Services (2025–Present)</h3>
            <p className="text-gray-600">
              Building scalable full-stack applications using React, Node.js, GraphQL, and cloud-native services.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Technical Consultant – Freelance (Ongoing)</h3>
            <p className="text-gray-600">
              Helping startups and small businesses modernize their software stacks, automate operations, and deploy cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Craftsmanship:</strong> I believe in building systems that are efficient, maintainable, and elegant.</li>
          <li><strong>Learning:</strong> I’m constantly improving through certifications, hands-on projects, and real-world problem solving.</li>
          <li><strong>Impact:</strong> I love seeing code translate into real business value or physical-world automation.</li>
        </ul>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beyond Coding</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🏋️ Training for the <strong>SPARTAN Race Trifecta</strong></li>
          <li>🌱 Gardening: <strong>watermelons, strawberries, peaches</strong></li>
          <li>💰 Learning about <strong>crypto, precious metals, and smart investing</strong></li>
          <li>✈️ Traveling to new places for adventure and inspiration</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Let’s Connect</h2>
        <p className="mb-4 text-gray-600">Want to collaborate or chat? I’m always open to new ideas and partnerships.</p>
        <ul className="space-y-1 text-gray-800">
          <li><strong>Email:</strong> rodolfo@example.com</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-600">github.com/yourusername</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" className="text-blue-600">linkedin.com/in/yourprofile</a></li>
        </ul>
        <a
  href="/resume.pdf"
  download
  className="inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition"
>
  Download Résumé (PDF)
</a>

      </section>
    </div>
  );
}

export default About;
