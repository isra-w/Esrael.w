import React, { useState } from "react";
import {
  Mail,
  Folder,
  Layers,
  Calendar,
  Code,
  BookOpen,
  User,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Image as ImageIcon,
  Tv,
  Camera,
  Compass,
  SlidersHorizontal,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    "All",
    "Web Application",
    "Desktop Application",
    "Systems & Logic",
  ];

  const projects = [
    {
      title: "Workforce Planning Web App",
      description:
        "An enterprise-grade workforce architecture featuring a dedicated role management component, operational layout structures, and real-time planning matrices.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma"],
      type: "Web Application",
      category: "Web Application",
      image: "/src/assets/workforce.png",
      fallbackText: "Workforce Planning Dashboard & Role Matrix",
      icon: (
        <Briefcase
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
    {
      title: "Digital Library System & Study Assistant",
      description:
        "A digital library management system desktop application built with an integrated study assistant feature specifically optimized for student workflows.",
      tags: ["C#", ".NET Architecture", "WinForms", "Database Integration"],
      type: "Desktop Application",
      category: "Desktop Application",
      image: "/src/assets/digital-library.png",
      fallbackText: "Digital Library & Assistant UI",
      icon: (
        <Folder
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
    {
      title: "Book Store Web Platform",
      description:
        "A full-stack e-commerce marketplace featuring an HTML-rendered frontend storefront tightly coupled with a modular custom PHP API management backend.",
      tags: ["HTML", "CSS", "PHP", "API Architecture", "Backend Utilities"],
      type: "Fullstack Web App",
      category: "Web Application",
      image: "/src/assets/bookstore.png",
      fallbackText: "Book Store Frontend & Backend Architecture",
      icon: (
        <Code
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
    {
      title: "Dual-System Calendar Engine",
      description:
        "A specialized conversion platform computing programmatic date transformations between the Gregorian and Ethiopian calendar paradigms with integrated task scheduling.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      type: "Algorithmic Engine",
      category: "Web Application",
      image: "/src/assets/calendar.png",
      fallbackText: "Dual Calendar System Switcher UI",
      icon: (
        <Calendar
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
    {
      title: "Car Rental Management System",
      description:
        "A structural system built to manage vehicle inventories, compute structural booking logic, and process custom object-oriented data streams.",
      tags: ["C++", "Object-Oriented Programming", "System Logic"],
      type: "Console System",
      category: "Systems & Logic",
      image: "/src/assets/car-rental.png",
      fallbackText: "Car Rental Console Interface",
      icon: (
        <Layers
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
    {
      title: "Interactive Guessing Game",
      description:
        "A logic-driven application built using strict functional validation, state loops, and interactive user console controls.",
      tags: ["Java", "Algorithmic Logic", "State Validation"],
      type: "Interactive Logic",
      category: "Systems & Logic",
      image: "/src/assets/guessing-game.png",
      fallbackText: "Java Core Interactive Game",
      icon: (
        <Tv
          size={14}
          className="text-gray-400 group-hover:text-[#C5A880] transition-colors"
        />
      ),
    },
  ];

  const photographyHighlights = [
    {
      id: 1,
      title: "High-Contrast Monochrome",
      description: "Shadow geometries & structural forms.",
      tag: "Street",
    },
    {
      id: 2,
      title: "Chromatic Luminescence",
      description: "Low-light exposure tracking.",
      tag: "Night",
    },
    {
      id: 3,
      title: "Visual Minimal Lodging",
      description: "Framing isolated conceptual space.",
      tag: "Editorial",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0A0D0A] text-gray-100 font-sans selection:bg-[#C5A880] selection:text-black antialiased">
      {/* Dynamic Background Gradients with UX Depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.04),transparent_50%)] bg-[radial-gradient(circle_at_bottom_left,rgba(34,76,56,0.06),transparent_60%)]" />

      {/* Sticky High-End Glassmorphism Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0D0A]/75 border-b border-[#224C38]/20 px-6 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded border border-[#C5A880]/60 flex items-center justify-center font-serif text-[#C5A880] font-bold text-sm tracking-wider group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/5 transition-all duration-300">
              IW
            </div>
            <span className="font-serif text-sm tracking-widest text-gray-300 group-hover:text-white transition-colors duration-300 uppercase font-medium">
              Israel W.
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            {["about", "projects", "creative", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-400 hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </button>
              ),
            )}
            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-[#C5A880]/40 text-[#C5A880] hover:bg-[#C5A880] hover:text-black rounded tracking-widest transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-[#C5A880] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0D0A]/95 backdrop-blur-lg flex flex-col justify-center p-8 space-y-6 text-xl uppercase tracking-widest border-b border-[#224C38]/50 animate-fadeIn">
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-[#C5A880]"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={26} />
          </button>
          {["about", "projects", "creative", "skills", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left font-serif text-gray-300 hover:text-[#C5A880] transition-colors"
              >
                {item}
              </button>
            ),
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#224C38]/20 border border-[#224C38]/40 text-[#C5A880] rounded-full text-[10px] uppercase tracking-widest font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <span>Available for Fullstack & Systems Roles</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none text-gray-50">
            Architecting clean web frameworks &{" "}
            <span className="italic font-normal text-[#C5A880]">
              visual narratives
            </span>
            .
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            I am a Software Engineer, Fullstack Developer, and Photographer
            specializing in structural UI architectures, highly integrated
            relational databases, and premium digital designs.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-gradient-to-r from-[#1c3e2e] to-[#122b20] border border-[#C5A880]/30 hover:border-[#C5A880] text-gray-100 text-xs tracking-widest uppercase rounded flex items-center space-x-2 group transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-[#224C38]/20"
            >
              <span>Explore Projects</span>
              <ChevronRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 bg-[#0D120D] border-y border-[#224C38]/20 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-serif text-xs uppercase tracking-widest text-[#C5A880] mb-2 flex items-center tracking-widest font-medium">
              <User size={12} className="mr-2" /> Biography
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-gray-200">
              My Background
            </h3>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-400 font-light leading-relaxed text-base md:text-lg">
            <p>
              Currently accelerating through a Computer Science degree, I split
              my operational hours between building production web applications
              as a software freelancer, working within modern stack environments
              during internships, and composing high-contrast compositions
              behind a camera lens.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Optimized Filtering Card Layouts */}
      <section
        id="projects"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-xs uppercase tracking-widest text-[#C5A880] mb-2 flex items-center tracking-widest font-medium">
              <Folder size={12} className="mr-2" /> Selected Works
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-gray-200">
              Engineering Portfolio
            </h3>
          </div>

          {/* Dynamic Filter Tab Controllers */}
          <div className="flex flex-wrap gap-1.5 items-center text-[11px] font-mono">
            <SlidersHorizontal
              size={11}
              className="text-gray-600 mr-2 hidden sm:inline"
            />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#C5A880] text-black font-semibold shadow-md shadow-[#C5A880]/10 border border-[#C5A880]"
                    : "bg-[#0D120D] text-gray-400 border border-[#224C38]/30 hover:border-[#C5A880]/40 hover:text-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Visual Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#0D120D] border border-[#224C38]/20 hover:border-[#C5A880]/35 rounded overflow-hidden transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Visual Asset Loader Frame */}
                <div className="relative w-full h-48 bg-[#070A07] border-b border-[#224C38]/20 overflow-hidden flex items-center justify-center transition-colors duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-1.5 bg-gradient-to-b from-[#0A0D0A] to-[#111812] group-hover:to-[#141d15] transition-all duration-300 z-0">
                    <ImageIcon className="w-7 h-7 text-[#C5A880]/30 group-hover:text-[#C5A880]/50 transition-colors" />
                    <span className="text-xs font-mono text-gray-400">
                      {project.fallbackText}
                    </span>
                    <span className="text-[10px] text-gray-600 italic">
                      src/assets/ placeholder frame
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 group-hover:scale-105 transition-all duration-700 z-10"
                    onLoad={(e) => {
                      e.currentTarget.classList.add(
                        "opacity-70",
                        "group-hover:opacity-100",
                      );
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D120D] via-transparent to-transparent opacity-60 z-20" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] tracking-widest font-mono uppercase px-2 py-0.5 rounded bg-[#0A0D0A] text-gray-400 border border-[#224C38]/40">
                      {project.type}
                    </span>
                    {project.icon}
                  </div>
                  <h4 className="font-serif text-lg font-normal text-gray-200 mb-2 group-hover:text-[#C5A880] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tag Architecture Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] text-[#C5A880]/90 font-mono bg-[#163325]/20 px-2 py-0.5 rounded border border-[#224C38]/20 group-hover:border-[#C5A880]/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Creative Media Drawer (Photography Showcase) */}
      <section
        id="creative"
        className="relative z-10 bg-[#0D120D] border-y border-[#224C38]/20 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-xs uppercase tracking-widest text-[#C5A880] mb-2 flex items-center tracking-widest font-medium">
              <Camera size={12} className="mr-2" /> Creative Appendix
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-gray-200">
              Visual Photography Journal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyHighlights.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[3/2] bg-[#070A07] border border-[#224C38]/30 rounded overflow-hidden flex items-center justify-center p-6 text-center shadow-lg transition-all duration-500 hover:border-[#C5A880]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:via-black/20 transition-all duration-500" />

                {/* Structural Alignment Box Frame */}
                <div className="absolute inset-0 flex items-center justify-center border border-dashed border-gray-900 m-3 rounded opacity-40 group-hover:border-gray-800 transition-colors">
                  <Compass
                    size={22}
                    className="text-gray-700 group-hover:rotate-45 transition-transform duration-1000 ease-out"
                  />
                </div>

                <div className="relative z-20 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#C5A880] border border-[#C5A880]/30 px-2 py-0.5 rounded bg-black/60 shadow-sm">
                    {photo.tag}
                  </span>
                  <h4 className="font-serif text-base text-gray-200 mt-3 mb-1 font-normal tracking-wide group-hover:text-white transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-light group-hover:text-gray-400 transition-colors">
                    {photo.description}
                  </p>
                </div>

                <img
                  src={`/src/assets/photo-${photo.id}.jpg`}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100 group-hover:scale-102 transition-all duration-700 z-0"
                  onLoad={(e) =>
                    e.currentTarget.classList.add(
                      "opacity-40",
                      "group-hover:opacity-65",
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Framework Section */}
      <section
        id="skills"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="mb-16 text-center">
          <h2 className="font-serif text-xs uppercase tracking-widest text-[#C5A880] mb-2 flex items-center justify-center tracking-widest font-medium">
            <Layers size={12} className="mr-2" /> Operational Matrix
          </h2>
          <h3 className="font-serif text-3xl font-light tracking-tight text-gray-200">
            Technical Capability & Tooling
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0D120D] border border-[#224C38]/15 p-6 rounded hover:border-[#224C38]/40 transition-colors duration-300">
            <div className="w-10 h-10 bg-[#224C38]/20 rounded border border-[#224C38]/40 flex items-center justify-center text-[#C5A880] mb-4">
              <Code size={18} />
            </div>
            <h4 className="font-serif text-lg text-gray-200 mb-3 font-normal">
              Web & Frontend
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" />{" "}
                React & TypeScript Architecture
              </li>
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" />{" "}
                Tailwind CSS UI Systems
              </li>
            </ul>
          </div>
          <div className="bg-[#0D120D] border border-[#224C38]/15 p-6 rounded hover:border-[#224C38]/40 transition-colors duration-300">
            <div className="w-10 h-10 bg-[#224C38]/20 rounded border border-[#224C38]/40 flex items-center justify-center text-[#C5A880] mb-4">
              <Briefcase size={18} />
            </div>
            <h4 className="font-serif text-lg text-gray-200 mb-3 font-normal">
              Backend & Systems
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" />{" "}
                Node.js Platforms & Prisma ORM
              </li>
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" /> C#
                / .NET Game & Client Apps
              </li>
            </ul>
          </div>
          <div className="bg-[#0D120D] border border-[#224C38]/15 p-6 rounded hover:border-[#224C38]/40 transition-colors duration-300">
            <div className="w-10 h-10 bg-[#224C38]/20 rounded border border-[#224C38]/40 flex items-center justify-center text-[#C5A880] mb-4">
              <Calendar size={18} />
            </div>
            <h4 className="font-serif text-lg text-gray-200 mb-3 font-normal">
              Data Architecture
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" />{" "}
                Microsoft SQL Server Relational Layouts
              </li>
              <li className="flex items-center">
                <ChevronRight size={12} className="text-[#C5A880]/70 mr-2" />{" "}
                Core Algorithmic Data Mappings
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Action / Contact Frame */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-xs uppercase tracking-widest text-[#C5A880] mb-2 flex items-center justify-center tracking-widest font-medium">
          <BookOpen size={12} className="mr-2" /> Let's Connect
        </h2>
        <h3 className="font-serif text-4xl font-light tracking-tight text-gray-100 mb-6">
          Initiate a Project Conversation
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:isra.w@example.com"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] hover:bg-[#d6bc94] text-black font-semibold tracking-widest uppercase text-xs rounded flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-98 shadow-md hover:shadow-[#C5A880]/10"
          >
            <Mail size={14} />
            <span>Send Email</span>
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-gray-800 hover:border-[#C5A880]/50 rounded text-gray-400 hover:text-[#C5A880] bg-[#0D120D]/40 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/israel.w_/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-gray-800 hover:border-[#C5A880]/50 rounded text-gray-400 hover:text-[#C5A880] bg-[#0D120D]/40 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#224C38]/15 bg-[#070A07] py-8 text-xs text-gray-600 text-center">
        <p>
          © {new Date().getFullYear()} Israel W. Engineered via React,
          TypeScript & Tailwind v4.
        </p>
      </footer>
    </div>
  );
}
