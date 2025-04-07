import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BecomePartner from './pages/BecomePartner';
import JoinForum from './pages/JoinForum';
import ProposeProject from './pages/ProposeProject';
import AppLinks from './pages/AppLinks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-blue-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl font-bold">City Tech Collab</Link>
              <div className="flex gap-6">
                <Link to="/become-partner" className="hover:text-blue-200 transition-colors">Partner</Link>
                <Link to="/join-forum" className="hover:text-blue-200 transition-colors">Forum</Link>
                <Link to="/propose-project" className="hover:text-blue-200 transition-colors">Projects</Link>
                <Link to="/app-links" className="hover:text-blue-200 transition-colors">Apps</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/join-forum" element={<JoinForum />} />
          <Route path="/propose-project" element={<ProposeProject />} />
          <Route path="/app-links" element={<AppLinks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;