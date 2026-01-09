import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const sections = [
    { path: "/", name: "Introduction" },
    { path: "/skills", name: "Skills" },
    { path: "/experience", name: "Experience" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar slides={sections} />
        
        {/* Left Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-screen w-32 bg-white/80 backdrop-blur-md border-r border-gray-200 z-50 flex flex-col items-center justify-center shadow-lg">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <a
                key={index}
                href={section.path}
                className="group relative w-full flex items-center justify-center"
              >
                <div className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                  {section.name}
                </div>
              </a>
            ))}
          </div>
        </div>
        <Introduction />
        {/* Main Content */}
        <div className="ml-32">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <Footer sections={sections} />
      </div>
    </Router>
  );
}

export default App;