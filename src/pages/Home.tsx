import React, { useState } from 'react';
import { ArrowRight, Building2, Brain, Car, Cpu, Users, Shield, Rocket, HandshakeIcon, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-12">
              <div className={`absolute inset-0 bg-blue-200/50 backdrop-blur-sm rounded-full animate-pulse ${imageLoaded ? 'hidden' : 'block'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full animate-ping"></div>
              </div>
              <img
                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                alt="City Tech Collab"
                className={`w-full h-full object-contain transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Smarter Cities Through Technology-Driven Collaboration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Where innovators, technologists, and civic leaders unite to shape the urban future.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/become-partner" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            City Tech Collab is a next-generation technology forum committed to driving civic innovation. We unite government bodies, private tech partners, academic institutions, and social organizations to co-develop, test, and scale cutting-edge software and AI systems designed for real-world urban challenges.
          </p>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Core Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FocusCard
              icon={<Shield className="w-8 h-8" />}
              title="Smart Surveillance"
              description="AI-integrated CCTV networks and public safety software."
            />
            <FocusCard
              icon={<Car className="w-8 h-8" />}
              title="Urban Mobility"
              description="Traffic analytics, autonomous transit frameworks, and data-driven routing."
            />
            <FocusCard
              icon={<Building2 className="w-8 h-8" />}
              title="Public Infrastructure"
              description="IoT-based monitoring systems and automated fault detection."
            />
            <FocusCard
              icon={<Users className="w-8 h-8" />}
              title="Civic Engagement"
              description="Platforms for public feedback, digital ID, and community reporting."
            />
            <FocusCard
              icon={<Brain className="w-8 h-8" />}
              title="AI & Data Intelligence"
              description="Real-time data processing, ML-driven governance models."
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ApproachCard
            icon={<Users className="w-8 h-8" />}
            title="Collaborative Innovation"
            description="Co-create tech with public agencies and civic stakeholders."
          />
          <ApproachCard
            icon={<Cpu className="w-8 h-8" />}
            title="Pilot-Driven Development"
            description="Launch scalable, testable prototypes in live city environments."
          />
          <ApproachCard
            icon={<Shield className="w-8 h-8" />}
            title="Ethical AI & Privacy"
            description="Ensure all systems are secure, transparent, and rights-respecting."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join the Movement</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Whether you're a developer, policymaker, or visionary entrepreneur—City Tech Collab invites you to redefine how cities operate and serve their citizens.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/become-partner" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <Rocket /> Become a Partner
            </Link>
            <Link to="/join-forum" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <HandshakeIcon /> Join Our Forum
            </Link>
            <Link to="/propose-project" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <Wrench /> Propose a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FocusCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ApproachCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;