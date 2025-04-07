import React from 'react';
import { Wrench, Target, Clock, Users } from 'lucide-react';

function ProposeProject() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Propose a Project</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have an innovative idea for improving urban life? Submit your project proposal and let's work together to make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Define Goals</h3>
            <p className="text-gray-600">Clearly outline your project objectives and expected outcomes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Timeline</h3>
            <p className="text-gray-600">Set realistic milestones and implementation schedule</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-600">Work with our network of experts and partners</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Project Proposal Form</h2>
          <form
              action="https://formspree.io/f/xjkyprpo"
              method="POST"
              className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input
                    type="text"
                    id="project-title"
                    name="project_title"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>
              <div>
                <label htmlFor="project-category" className="block text-sm font-medium text-gray-700 mb-1">Project Category</label>
                <select
                    id="project-category"
                    name="project_category"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                  <option value="">Select a category</option>
                  <option value="Smart Infrastructure">Smart Infrastructure</option>
                  <option value="Urban Mobility">Urban Mobility</option>
                  <option value="Public Safety">Public Safety</option>
                  <option value="Environmental Sustainability">Environmental Sustainability</option>
                  <option value="Civic Engagement">Civic Engagement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="project-summary" className="block text-sm font-medium text-gray-700 mb-1">Project Summary</label>
              <textarea
                  id="project-summary"
                  name="project_summary"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                  required
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Expected Timeline</label>
                <select
                    id="timeline"
                    name="expected_timeline"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                  <option value="">Select timeline</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2+ years">2+ years</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget Range</label>
                <select
                    id="budget"
                    name="budget_range"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                  <option value="">Select budget range</option>
                  <option value="Under $50,000">Under $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="tech-requirements" className="block text-sm font-medium text-gray-700 mb-1">Technical Requirements</label>
              <textarea
                  id="tech-requirements"
                  name="technical_requirements"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              ></textarea>
            </div>

            <div>
              <label htmlFor="expected-impact" className="block text-sm font-medium text-gray-700 mb-1">Expected Impact</label>
              <textarea
                  id="expected-impact"
                  name="expected_impact"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                  required
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
  );
}

export default ProposeProject;