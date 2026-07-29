import { useState } from "react";
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
  Sun,
  Moon,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

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
    "React Apps",
    "Desktop Application",
    "Systems & Logic",
  ];

  const projects = [
    {
      title: "Workforce Planning Web App",
      description:
        "An enterprise-grade workforce architecture featuring a dedicated role management component, operational layout structures, and real-time planning matrices.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma"],
      type: "React Apps",
      category: "React Apps",
      image: "/src/assets/workforce.png",
      fallbackText: "Workforce Planning Dashboard & Role Matrix",
      icon: (
        <Briefcase
          size={14}
          className={`${darkMode ? "text-gray-200 group-hover:text-[#C5A880]" : "text-gray-900 group-hover:text-[#224C38]"} transition-colors`}
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
      fallbackText: "D_LAB Library & Assistant UI",
      icon: (
        <Folder
          size={14}
          className={`${darkMode ? "text-gray-400 group-hover:text-[#C5A880]" : "text-gray-500 group-hover:text-[#224C38]"} transition-colors`}
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
          className={`${darkMode ? "text-gray-200 group-hover:text-[#C5A880]" : "text-gray-900 group-hover:text-[#224C38]"} transition-colors`}
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
          className={`${darkMode ? "text-gray-400 group-hover:text-[#C5A880]" : "text-gray-500 group-hover:text-[#224C38]"} transition-colors`}
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
          className={`${darkMode ? "text-gray-400 group-hover:text-[#C5A880]" : "text-gray-500 group-hover:text-[#224C38]"} transition-colors`}
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
          className={`${darkMode ? "text-gray-400 group-hover:text-[#C5A880]" : "text-gray-500 group-hover:text-[#224C38]"} transition-colors`}
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
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-500 selection:bg-[#C5A880] selection:text-black ${
        darkMode ? "bg-[#0A0D0A] text-gray-100" : "bg-[#F9F9F7] text-gray-800"
      }`}
    >
      {/* Dynamic Background Gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: darkMode
            ? "radial-gradient(circle at top right, rgba(197,168,128,0.04) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(34,76,56,0.06) 0%, transparent 60%)"
            : "radial-gradient(circle at top right, rgba(34,76,56,0.03) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(197,168,128,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Navigation Header */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md px-6 py-4 border-b transition-all duration-300 ${
          darkMode
            ? "bg-[#0A0D0A]/75 border-[#224C38]/20"
            : "bg-[#F9F9F7]/75 border-[#224C38]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              className={`w-8 h-8 rounded border flex items-center justify-center font-serif font-bold text-sm tracking-wider transition-all duration-300 ${
                darkMode
                  ? "border-[#C5A880]/60 text-[#C5A880] group-hover:bg-[#C5A880]/5"
                  : "border-[#224C38]/60 text-[#224C38] group-hover:bg-[#224C38]/5"
              }`}
            >
              EW
            </div>
            <span
              className={`font-serif text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                darkMode
                  ? "text-gray-300 group-hover:text-white"
                  : "text-gray-700 group-hover:text-black"
              }`}
            >
              Esrael W.
            </span>
          </div>

          {/* Nav Items & Mode Switcher */}
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            {["About", "Projects", "Creative", "Skills", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300 ${
                    darkMode
                      ? "text-gray-001 hover:text-[#C5A880] after:bg-[#C5A880]"
                      : "text-gray-900 hover:text-[#224C38] after:bg-[#224C38]"
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                darkMode
                  ? "border-[#224C38]/40 text-[#C5A880] hover:bg-[#224C38]/20"
                  : "border-[#C5A880]/40 text-[#224C38] hover:bg-[#C5A880]/20"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2 border rounded tracking-widest transition-all duration-300 ${
                darkMode
                  ? "border-[#C5A880]/40 text-[#C5A880] hover:bg-[#C5A880] hover:text-black"
                  : "border-[#224C38]/40 text-[#224C38] hover:bg-[#224C38] hover:text-white"
              }`}
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 ${
                darkMode
                  ? "border-[#224C38]/40 text-[#C5A880]"
                  : "border-[#C5A880]/40 text-[#224C38]"
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="text-gray-400 hover:text-[#C5A880] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-lg flex flex-col justify-center p-8 space-y-6 text-xl uppercase tracking-widest border-b animate-fadeIn ${
            darkMode
              ? "bg-[#0A0D0A]/95 border-[#224C38]/50"
              : "bg-[#F9F9F7]/95 border-[#224C38]/20"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-[#C5A880]"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={26} />
          </button>
          {["About", "Projects", "Creative", "Skills", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left font-serif transition-colors ${
                  darkMode
                    ? "text-gray-300 hover:text-[#C5A880]"
                    : "text-gray-700 hover:text-[#224C38]"
                }`}
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
          <div
            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono border ${
              darkMode
                ? "bg-[#224C38]/20 border-[#224C38]/40 text-[#C5A880]"
                : "bg-[#224C38]/10 border-[#224C38]/20 text-[#224C38]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full  animate-pulse ${darkMode ? "bg-[#C5A880]" : "bg-[#878d79]"}`}
            />
            <span
              className={`font-mono text-1.5xl tracking-widest ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              Available for Fullstack & Systems Roles
            </span>
          </div>
          <h1
            className={`font-serif text-5xl md:text-7xl font-light tracking-tight leading-none ${
              darkMode ? "text-gray-50" : "text-[#000b00]"
            }`}
          >
            Architecting clean web frameworks &{" "}
            <span
              className={`italic font-normal ${darkMode ? "text-[#C5A880]" : "text-[#224C38]"}`}
            >
              visual narratives
            </span>
            .
          </h1>
          <p
            className={`text-lg md:text-1xl font-light max-w-2xl leading-relaxed ${darkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            I am a Software Engineer, Fullstack Developer, Designer &
            Photographer. I build high-performance web applications and craft
            compelling visual experiences. Currently completing my Computer
            Science degree (Class of 2027) while freelancing globally, I
            specialize in turning complex ideas into clean code and beautiful
            design.
          </p>
          <div className="pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-6 py-3 border text-xs tracking-widest uppercase rounded flex items-center space-x-2 group transition-all duration-300 shadow-lg ${
                darkMode
                  ? "bg-gradient-to-r from-[#1c3e2e] to-[#122b20] border-[#C5A880]/30 hover:border-[#C5A880] text-gray-100 shadow-black/40 hover:shadow-[#224C38]/20"
                  : "bg-gradient-to-r from-[#224C38] to-[#163325] border-[#224C38]/30 hover:border-[#224C38] text-white shadow-[#224C38]/10"
              }`}
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
        className={`relative z-10 border-y py-24 px-6 transition-colors duration-500 ${
          darkMode
            ? "bg-[#0D120D] border-[#224C38]/20"
            : "bg-[#F3F3EF] border-[#224C38]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2
              className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium ${
                darkMode ? "text-[#C5A880]" : "text-[#224C38]"
              }`}
            >
              <User size={12} className="mr-2" /> Biography
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-gray-200" : "text-gray-900"}`}
            >
              My Background
            </h3>
          </div>
          <div
            className={`md:col-span-2 space-y-6 font-light leading-relaxed text-base md:text-lg ${darkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            <h3
              className={`font-serif text-2xl font-light tracking-tight mb-2 ${darkMode ? "text-[#C5A880]" : "text-[#224C38]"}`}
            >
              About Me
            </h3>
            <p
              className={`text-lg md:text-1xl font-light max-w-2xl leading-relaxed ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              Hi, I am a Fullstack Software Engineer, Designer, and Photographer
              currently completing my Bachelor of Computer Science (Class of
              2027). I’ve always believed that the best digital products require
              a balance of rigid logic and creative intuition, and I thrive on
              bridging the gap between robust backend architecture and sleek,
              intuitive user experiences.
            </p>
            <p
              className={`text-lg md:text-1xl font-light max-w-2xl leading-relaxed ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              As a freelancer, I collaborate with clients to build tailored
              digital solutions from the ground up. Whether I'm architecting
              databases in SQL Server, writing clean fullstack code in React,
              TypeScript, and Node.js, or building desktop systems in C#, I
              bring a meticulous approach to every line of code. But my work
              doesn't stop at the terminal. My background as a designer and
              photographer allows me to view software through a visual lens. I
              don't just build applications that work; I design experiences that
              feel premium and look intentional.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium ${
                darkMode ? "text-[#C5A880]" : "text-[#224C38]"
              }`}
            >
              <Folder size={12} className="mr-2" /> Selected Works
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-gray-200" : "text-gray-800"}`}
            >
              My Projects
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 items-center text-[11px] font-mono">
            <SlidersHorizontal
              size={11}
              className="text-gray-500 mr-2 hidden sm:inline"
            />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? darkMode
                      ? "bg-[#C5A880] text-black font-semibold border border-[#C5A880]"
                      : "bg-[#224C38] text-white font-semibold border border-[#224C38]"
                    : darkMode
                      ? "bg-[#0D120D] text-gray-400 border border-[#224C38]/30 hover:border-[#C5A880]/40"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#224C38]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group border rounded overflow-hidden transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "bg-[#0D120D] border-[#224C38]/20 hover:border-[#C5A880]/35 hover:shadow-black/50"
                  : "bg-white border-gray-200/80 hover:border-[#224C38]/35 hover:shadow-gray-200/50"
              }`}
            >
              <div>
                {/* Visual Asset Loader Frame */}
                <div
                  className={`relative w-full h-48 border-b overflow-hidden flex items-center justify-center transition-colors duration-300 ${
                    darkMode
                      ? "bg-[#070A07] border-[#224C38]/20"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-1.5 transition-all duration-300 z-0 ${
                      darkMode
                        ? "bg-gradient-to-b from-[#0A0D0A] to-[#111812] group-hover:to-[#141d15]"
                        : "bg-gradient-to-b from-gray-50 to-gray-100 group-hover:to-gray-200/60"
                    }`}
                  >
                    <ImageIcon
                      className={`w-7 h-7 transition-colors ${
                        darkMode
                          ? "text-[#C5A880]/30 group-hover:text-[#C5A880]/50"
                          : "text-[#224C38]/20 group-hover:text-[#224C38]/40"
                      }`}
                    />
                    <span
                      className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {project.fallbackText}
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 z-20 ${
                      darkMode ? "from-[#0D120D]" : "from-white"
                    }`}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`text-[9px] tracking-widest font-mono uppercase px-2 py-0.5 rounded border ${
                        darkMode
                          ? "bg-[#0A0D0A] text-gray-400 border-[#224C38]/40"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {project.type}
                    </span>
                    {project.icon}
                  </div>
                  <h4
                    className={`font-serif text-lg font-normal mb-2 transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-200 group-hover:text-[#C5A880]"
                        : "text-gray-800 group-hover:text-[#224C38]"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-xs font-light leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
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
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors duration-300 ${
                        darkMode
                          ? "text-[#C5A880]/90 bg-[#163325]/20 border-[#224C38]/20 group-hover:border-[#C5A880]/20"
                          : "text-[#224C38] bg-[#224C38]/5 border-[#224C38]/10 group-hover:border-[#224C38]/30"
                      }`}
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

      {/* Photography Section */}
      <section
        id="creative"
        className={`relative z-10 border-y py-24 px-6 transition-colors duration-500 ${
          darkMode
            ? "bg-[#0D120D] border-[#224C38]/20"
            : "bg-[#F3F3EF] border-[#224C38]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2
              className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium ${
                darkMode ? "text-[#C5A880]" : "text-[#224C38]"
              }`}
            >
              <Camera size={12} className="mr-2" /> Creative Appendix
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-gray-200" : "text-gray-800"}`}
            >
              Visual Photography Journal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyHighlights.map((photo) => (
              <div
                key={photo.id}
                className={`group relative aspect-3/2 bg-[#070A07] border rounded overflow-hidden flex items-center justify-center p-6 text-center shadow-lg transition-all duration-500 ${
                  darkMode
                    ? "border-[#224C38]/30 hover:border-[#C5A880]/30"
                    : "border-gray-200 hover:border-[#224C38]/40"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:via-black/20 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center border border-dashed border-gray-900/40 m-3 rounded opacity-40 group-hover:border-gray-800 transition-colors">
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
                  <p className="text-gray-400 text-xs font-light transition-colors">
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
          <h2
            className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center justify-center font-medium ${
              darkMode ? "text-[#C5A880]" : "text-[#224C38]"
            }`}
          >
            <Layers size={12} className="mr-2" /> Operational Matrix
          </h2>
          <h3
            className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-gray-200" : "text-gray-900"}`}
          >
            Technical Capability & Tooling
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web & Frontend",
              icon: <Code size={18} />,
              skills: [
                "React & TypeScript Architecture",
                "Tailwind CSS UI Systems",
              ],
            },
            {
              title: "Backend & Systems",
              icon: <Briefcase size={18} />,
              skills: [
                "Node.js Platforms & Prisma ORM",
                "C# / .NET Game & Client Apps",
              ],
            },
            {
              title: "Data Architecture",
              icon: <Calendar size={18} />,
              skills: [
                "Microsoft SQL Server Relational Layouts",
                "Core Algorithmic Data Mappings",
              ],
            },
          ].map((box, bIdx) => (
            <div
              key={bIdx}
              className={`p-6 rounded border transition-colors duration-300 ${
                darkMode
                  ? "bg-[#0D120D] border-[#224C38]/15 hover:border-[#224C38]/40"
                  : "bg-white border-gray-200 hover:border-[#224C38]/30 shadow-sm"
              }`}
            >
              <div
                className={`w-10 h-10 rounded border flex items-center justify-center mb-4 ${
                  darkMode
                    ? "bg-[#224C38]/20 border-[#224C38]/40 text-[#C5A880]"
                    : "bg-[#224C38]/10 border-[#224C38]/30 text-[#224C38]"
                }`}
              >
                {box.icon}
              </div>
              <h4
                className={`font-serif text-lg mb-3 font-normal ${darkMode ? "text-gray-200" : "text-gray-900"}`}
              >
                {box.title}
              </h4>
              <ul
                className={`space-y-2.5 text-sm font-light ${darkMode ? "text-gray-400" : "text-gray-700"}`}
              >
                {box.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center">
                    <ChevronRight
                      size={12}
                      className={`mr-2 ${darkMode ? "text-[#C5A880]/70" : "text-[#224C38]"}`}
                    />{" "}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center"
      >
        <h2
          className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center justify-center font-medium ${
            darkMode ? "text-[#C5A880]" : "text-[#224C38]"
          }`}
        >
          <BookOpen size={12} className="mr-2" /> Let's Connect
        </h2>
        <h3
          className={`font-serif text-4xl font-light tracking-tight mb-6 ${darkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          Initiate a Project Conversation
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:isra.w@example.com"
            className={`w-full sm:w-auto px-8 py-3.5 font-semibold tracking-widest uppercase text-xs rounded flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-98 shadow-md ${
              darkMode
                ? "bg-[#C5A880] hover:bg-[#d6bc94] text-black shadow-[#C5A880]/10"
                : "bg-[#224C38] hover:bg-[#2e664b] text-white shadow-[#224C38]/10"
            }`}
          >
            <Mail size={14} />
            <span>Send Email</span>
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className={`p-3 border rounded transition-all duration-300 ${
                darkMode
                  ? "border-gray-800 hover:border-[#C5A880]/50 text-gray-900 hover:text-[#C5A880] bg-[#0D120D]/40"
                  : "border-gray-300 hover:border-[#224C38]/50 text-gray-900 hover:text-[#224C38] bg-[#f0fbff]"
              }`}
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
              className={`p-3 border rounded transition-all duration-300 ${
                darkMode
                  ? "border-gray-800 hover:border-[#C5A880]/50 text-gray-900 hover:text-[#C5A880] bg-[#0D120D]/40"
                  : "border-gray-300 hover:border-[#224C38]/50 text-gray-900 hover:text-[#224C38] bg-[#f0fbff]"
              }`}
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

      <footer
        className={`border-t py-8 text-xs text-center relative z-10 ${
          darkMode
            ? "border-[#224C38]/15 bg-[#070A07] text-gray-600"
            : "border-gray-200 bg-gray-50 text-gray-500"
        }`}
      >
        <p>© {new Date().getFullYear()} Esrael W.</p>
      </footer>
    </div>
  );
}
