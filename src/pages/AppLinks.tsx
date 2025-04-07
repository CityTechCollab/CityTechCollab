import React from 'react';
import { Smartphone, ExternalLink } from 'lucide-react';

function AppLinks() {
  const apps = [
    {
      name: "CityWatch",
      description: "Real-time urban surveillance and safety monitoring platform",
      category: "Public Safety",
      platform: "Web & Mobile",
      url: "#"
    },
    {
      name: "SmartTransit",
      description: "Intelligent public transportation routing and scheduling",
      category: "Urban Mobility",
      platform: "Mobile",
      url: "#"
    },
    {
      name: "CivicEngage",
      description: "Community feedback and participation platform",
      category: "Civic Engagement",
      platform: "Web",
      url: "#"
    },
    {
      name: "InfraAlert",
      description: "Infrastructure monitoring and maintenance reporting",
      category: "Infrastructure",
      platform: "Mobile",
      url: "#"
    },
    {
      name: "DataViz City",
      description: "Urban data visualization and analytics dashboard",
      category: "Data Intelligence",
      platform: "Web",
      url: "#"
    },
    {
      name: "GreenCity",
      description: "Environmental monitoring and sustainability tracking",
      category: "Sustainability",
      platform: "Web & Mobile",
      url: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">City Tech Apps</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access our suite of smart city applications designed to enhance urban living and city operations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
              <a
                href={app.url}
                className="text-blue-600 hover:text-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 mb-4">{app.description}</p>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {app.category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {app.platform}
              </span>
            </div>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Launch App <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppLinks;