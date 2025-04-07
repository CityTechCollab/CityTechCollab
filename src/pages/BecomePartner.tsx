import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';

function BecomePartner() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Partner</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our network of innovators and help shape the future of urban technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Partnership Benefits</h2>
            <ul className="space-y-4">
              {[
                'Access to our network of city leaders and tech innovators',
                'Participation in pilot programs and real-world testing',
                'Co-development opportunities with leading tech firms',
                'Regular technology briefings and market insights',
                'Priority access to City Tech events and workshops'
              ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Partnership Application</h2>
            <form
                action="https://formspree.io/f/xjkyprpo"
                method="POST"
                className="space-y-4"
            >
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
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
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                <select
                    id="type"
                    name="organization_type"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                  <option value="">Select an option</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Technology Company">Technology Company</option>
                  <option value="Academic Institution">Academic Institution</option>
                  <option value="Non-Profit Organization">Non-Profit Organization</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                    required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default BecomePartner;