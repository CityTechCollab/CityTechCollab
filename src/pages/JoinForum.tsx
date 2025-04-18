import React from 'react';
import { Users, MessageSquare, Calendar, Globe } from 'lucide-react';

function JoinForum() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Forum</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with urban tech leaders, share insights, and participate in meaningful discussions about the future of smart cities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Discussion Boards</h3>
            <p className="text-gray-600">Engage in threaded discussions on various urban tech topics</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Virtual Events</h3>
            <p className="text-gray-600">Join webinars, workshops, and networking sessions</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Network</h3>
            <p className="text-gray-600">Connect with members from cities worldwide</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Forum Registration</h2>
          <form
              action="https://formspree.io/f/xjkyprpo"
              method="POST"
              className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Smart Infrastructure',
                  'Urban Mobility',
                  'Public Safety',
                  'Data Analytics',
                  'Civic Tech',
                  'Sustainability'
                ].map((interest, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                          type="checkbox"
                          name="interests[]"
                          value={interest}
                          className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>{interest}</span>
                    </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join Forum
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default JoinForum;