import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-6">

      {/* Hero Section */}
      <section className="text-center py-24 bg-gray-900 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Helping You Build Reliable, Scalable Software Solutions </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Hi, I’m Rodolfo Baez Jr — a Software Engineer and Consultant who helps businesses turn ideas into technology solutions that scale.
        </p>
        <Link to="/contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
          Let's Work Together →
        </Link>
      </section>

      {/* Services / Expertise */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-10">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
            <p>Modern web and mobile apps using React, Node.js, GraphQL, and more.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Tech Strategy & Consulting</h3>
            <p>Advising startups and businesses on building scalable, maintainable systems.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">IoT & Automation Projects</h3>
            <p>Bringing ideas to life using microcontrollers, automation, and AI tools.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold">GraphQL Weather Service</h3>
            <p className="mb-2">Live weather data through a GraphQL API for scalable frontend apps.</p>
            <Link to="/projects" className="text-blue-600 font-semibold">See More →</Link>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Android Expense Manager</h3>
            <p className="mb-2">Track, categorize, and visualize expenses on mobile with full offline support.</p>
            <Link to="/projects" className="text-blue-600 font-semibold">See More →</Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold">From the Blog</h2>
        <p className="mt-2 text-lg text-gray-700">Insights on software, consulting, and digital tools.</p>
        <Link
          to="/blog"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
        >
          Read the Blog →
        </Link>
      </section>

    </div>
  );
}

export default Home;
