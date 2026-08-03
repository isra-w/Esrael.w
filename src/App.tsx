import workforceImg from "./assets/workforce.png";
import digitalLibraryImg from "./assets/digital-library.png";
import bookstoreImg from "./assets/bookstore.png";
import guessingGameImg from "./assets/guessing-game.png";
import jjBookShoppingImg from "./assets/jj-book-shopping.jpeg";
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
  Tv,
  Camera,
  Compass,
  SlidersHorizontal,
  Sun,
  Moon,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

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
      image: workforceImg,
      fallbackText: "Workforce Planning Dashboard & Role Matrix",
      repoLink: "https://github.com/isra-w/workforce_plan",
      icon: (
        <Briefcase
          size={14}
          className={`${darkMode ? "text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-primary)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      image: digitalLibraryImg,
      fallbackText: "D_LAB Library & Assistant UI",
      repoLink:
        "https://github.com/isra-w/A-C-sharp-digital-library-Mng-t-desktop-app",
      icon: (
        <Folder
          size={14}
          className={`${darkMode ? "text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-mutedalt)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      image: bookstoreImg,
      fallbackText: "Book Store Frontend & Backend Architecture",
      repoLink: "https://github.com/isra-w/book-store-web-backend",
      icon: (
        <Code
          size={14}
          className={`${darkMode ? "text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-primary)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
        />
      ),
    },
    {
      title: "JJ Book Shopping Website",
      description:
        "A bookstore landing page and product browsing website showcasing categories, featured collections, and responsive shopping UI.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Application",
      category: "Web Application",
      image: jjBookShoppingImg,
      fallbackText: "JJ Book Shopping Homepage UI",
      repoLink: "https://github.com/isra-w/jj-book-store-web",
      icon: (
        <BookOpen
          size={14}
          className={`${darkMode ? "text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-primary)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      image: "", // Provide fallback image or keep structural placeholder if asset missing
      fallbackText: "Dual Calendar System Switcher UI",
      repoLink: "https://github.com/isra-w",
      icon: (
        <Calendar
          size={14}
          className={`${darkMode ? "text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-mutedalt)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      image: "",
      fallbackText: "Car Rental Console Interface",
      repoLink: "https://github.com/isra-w/car-rental-system-c-class-project",
      icon: (
        <Layers
          size={14}
          className={`${darkMode ? "text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-mutedalt)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      image: guessingGameImg,
      fallbackText: "Java Core Interactive Game",
      repoLink: "https://github.com/isra-w/guessing-game",
      icon: (
        <Tv
          size={14}
          className={`${darkMode ? "text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)]" : "text-[var(--clr-mutedalt)] group-hover:text-[var(--clr-secondary)]"} transition-colors`}
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
      className={`min-h-screen font-sans antialiased transition-colors duration-500 selection:bg-[var(--clr-accent)] selection:text-[var(--clr-bg)] ${
        darkMode
          ? "bg-[var(--clr-bg)] text-[var(--clr-primary)]"
          : "bg-[var(--clr-primary)] text-[var(--clr-bg)]"
      }`}
    >
      <Analytics />

      {/* Dynamic Background Gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: darkMode
            ? "radial-gradient(circle at top right, rgba(251,176,45,0.08) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(3,104,102,0.08) 0%, transparent 60%)"
            : "radial-gradient(circle at top right, rgba(3,104,102,0.08) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(251,176,45,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Navigation Header */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md px-6 py-4 border-b transition-all duration-300 ${
          darkMode
            ? "bg-[var(--clr-bg)]/75 border-[var(--clr-secondary)]/20"
            : "bg-[var(--clr-bg)]/75 border-[var(--clr-secondary)]/10"
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
                  ? "border-[var(--clr-accent)]/60 text-[var(--clr-accent)] group-hover:bg-[var(--clr-accent)]/5"
                  : "border-[var(--clr-secondary)]/60 text-[var(--clr-secondary)] group-hover:bg-[var(--clr-secondary)]/5"
              }`}
            >
              EW
            </div>
            <span
              className={`font-serif text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                darkMode
                  ? "text-[var(--clr-muted)] group-hover:text-[var(--clr-primary)]"
                  : "text-[var(--clr-mutedalt)] group-hover:text-[var(--clr-bg)]"
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
                      ? "text-[var(--clr-primary)] hover:text-[var(--clr-accent)] after:bg-[var(--clr-accent)]"
                      : "text-[var(--clr-primary)] hover:text-[var(--clr-secondary)] after:bg-[var(--clr-secondary)]"
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
                  ? "border-[var(--clr-secondary)]/40 text-[var(--clr-accent)] hover:bg-[var(--clr-secondary)]/20"
                  : "border-[var(--clr-accent)]/40 text-[var(--clr-secondary)] hover:bg-[var(--clr-accent)]/20"
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
                  ? "border-[var(--clr-accent)]/40 text-[var(--clr-accent)] hover:bg-[var(--clr-accent)] hover:text-[var(--clr-bg)]"
                  : "border-[var(--clr-secondary)]/40 text-[var(--clr-secondary)] hover:bg-[var(--clr-secondary)] hover:text-[var(--clr-primary)]"
              }`}
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 ${
                darkMode
                  ? "border-[var(--clr-secondary)]/40 text-[var(--clr-accent)]"
                  : "border-[var(--clr-accent)]/40 text-[var(--clr-secondary)]"
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="text-[var(--clr-muted)] hover:text-[var(--clr-accent)] transition-colors"
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
          className={`fixed inset-0 z-40 backdrop-blur-lg flex flex-col justify-center p-8 space-y-6 text-xl uppercase tracking-widest border-b ${
            darkMode
              ? "bg-[var(--clr-bg)]/95 border-[var(--clr-secondary)]/50"
              : "bg-[var(--clr-bg)]/95 border-[var(--clr-secondary)]/20"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-[var(--clr-muted)] hover:text-[var(--clr-accent)]"
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
                    ? "text-[var(--clr-muted)] hover:text-[var(--clr-accent)]"
                    : "text-[var(--clr-mutedalt)] hover:text-[var(--clr-secondary)]"
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
                ? "bg-[var(--clr-secondary)]/20 border-[var(--clr-secondary)]/40 text-[var(--clr-accent)]"
                : "bg-[var(--clr-secondary)]/10 border-[var(--clr-secondary)]/20 text-[var(--clr-secondary)]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${darkMode ? "bg-[var(--clr-accent)]" : "bg-[var(--clr-muted)]"}`}
            />
            <span
              className={`font-mono text-1.5xl tracking-widest ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
            >
              Available for Fullstack & Systems Roles
            </span>
          </div>
          <h1
            className={`font-serif text-5xl md:text-7xl font-light tracking-tight leading-none ${
              darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-bg)]"
            }`}
          >
            Architecting clean web frameworks &{" "}
            <span
              className={`italic font-normal ${darkMode ? "text-[var(--clr-accent)]" : "text-[var(--clr-secondary)]"}`}
            >
              visual narratives
            </span>
            .
          </h1>
          <p
            className={`text-lg md:text-1xl font-light max-w-2xl leading-relaxed ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
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
                  ? "bg-gradient-to-r from-[var(--clr-secondary)] to-[var(--clr-emerald)] border-[var(--clr-accent)]/30 hover:border-[var(--clr-accent)] text-[var(--clr-primary)] shadow-[var(--clr-secondary)]/40 hover:shadow-[var(--clr-secondary)]/20"
                  : "bg-gradient-to-r from-[var(--clr-secondary)] to-[var(--clr-emerald)] border-[var(--clr-secondary)]/30 hover:border-[var(--clr-secondary)] text-[var(--clr-primary)] shadow-[var(--clr-secondary)]/10"
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
            ? "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
            : "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2
              className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium ${
                darkMode
                  ? "text-[var(--clr-accent)]"
                  : "text-[var(--clr-secondary)]"
              }`}
            >
              <User size={12} className="mr-2" /> Biography
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
            >
              My Background
            </h3>
          </div>
          <div
            className={`md:col-span-2 space-y-6 font-light leading-relaxed text-base md:text-lg ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
          >
            <h3
              className={`font-serif text-2xl font-light tracking-tight mb-2 ${darkMode ? "text-[var(--clr-accent)]" : "text-[var(--clr-secondary)]"}`}
            >
              About Me
            </h3>
            <p>
              Hi, I am a Fullstack Software Engineer, Designer, and Photographer
              currently completing my Bachelor of Computer Science (Class of
              2027). I’ve always believed that the best digital products require
              a balance of rigid logic and creative intuition, and I thrive on
              bridging the gap between robust backend architecture and sleek,
              intuitive user experiences.
            </p>
            <p>
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
                darkMode
                  ? "text-[var(--clr-accent)]"
                  : "text-[var(--clr-secondary)]"
              }`}
            >
              <Folder size={12} className="mr-2" /> Selected Works
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
            >
              My Projects
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 items-center text-[11px] font-mono">
            <SlidersHorizontal
              size={11}
              className="text-[var(--clr-mutedalt)] mr-2 hidden sm:inline"
            />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? darkMode
                      ? "bg-[var(--clr-accent)] text-[var(--clr-bg)] font-semibold border border-[var(--clr-accent)]"
                      : "bg-[var(--clr-secondary)] text-[var(--clr-primary)] font-semibold border border-[var(--clr-secondary)]"
                    : darkMode
                      ? "bg-[var(--clr-bg)] text-[var(--clr-muted)] border border-[var(--clr-secondary)]/30 hover:border-[var(--clr-accent)]/40"
                      : "bg-[var(--clr-bg)] text-[var(--clr-mutedalt)] border border-[var(--clr-secondary)]/20 hover:border-[var(--clr-secondary)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group border rounded overflow-hidden transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 hover:border-[var(--clr-accent)]/35 hover:shadow-[var(--clr-secondary)]/50"
                  : "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 hover:border-[var(--clr-secondary)]/35 hover:shadow-[var(--clr-secondary)]/15"
              }`}
            >
              <div>
                {/* Visual Asset Loader Frame */}
                <div
                  className={`relative w-full h-48 border-b overflow-hidden flex items-center justify-center transition-colors duration-300 ${
                    darkMode
                      ? "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
                      : "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
                  }`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 z-10 opacity-70 group-hover:opacity-100"
                    />
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 z-20 ${
                      darkMode
                        ? "from-[var(--clr-bg)]"
                        : "from-[var(--clr-primary)]"
                    }`}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`text-[9px] tracking-widest font-mono uppercase px-2 py-0.5 rounded border ${
                        darkMode
                          ? "bg-[var(--clr-bg)] text-[var(--clr-muted)] border-[var(--clr-secondary)]/40"
                          : "bg-[var(--clr-bg)] text-[var(--clr-mutedalt)] border-[var(--clr-secondary)]/20"
                      }`}
                    >
                      {project.type}
                    </span>
                    {project.icon}
                  </div>
                  <h4
                    className={`font-serif text-lg font-normal mb-2 transition-colors duration-300 ${
                      darkMode
                        ? "text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)]"
                        : "text-[var(--clr-primary)] group-hover:text-[var(--clr-secondary)]"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-xs font-light leading-relaxed mb-4 ${darkMode ? "text-[var(--clr-muted)]" : "text-[var(--clr-mutedalt)]"}`}
                  >
                    {project.description}
                  </p>
                  {project.repoLink && (
                    <div className="mb-4">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 ${
                          darkMode
                            ? "bg-[var(--clr-accent)] text-[var(--clr-bg)] hover:bg-[var(--clr-accent)]/90"
                            : "bg-[var(--clr-secondary)] text-[var(--clr-primary)] hover:bg-[var(--clr-secondary)]/90"
                        }`}
                      >
                        View Repository
                      </a>
                    </div>
                  )}
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
                          ? "text-[var(--clr-accent)]/90 bg-[var(--clr-emerald)]/20 border-[var(--clr-secondary)]/20 group-hover:border-[var(--clr-accent)]/20"
                          : "text-[var(--clr-secondary)] bg-[var(--clr-secondary)]/5 border-[var(--clr-secondary)]/10 group-hover:border-[var(--clr-secondary)]/30"
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
            ? "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
            : "bg-[var(--clr-bg)] border-[var(--clr-secondary)]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2
              className={`font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium ${
                darkMode
                  ? "text-[var(--clr-accent)]"
                  : "text-[var(--clr-secondary)]"
              }`}
            >
              <Camera size={12} className="mr-2" /> Creative Appendix
            </h2>
            <h3
              className={`font-serif text-3xl font-light tracking-tight ${darkMode ? "text-[var(--clr-primary)]" : "text-[var(--clr-primary)]"}`}
            >
              Visual Photography Journal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyHighlights.map((photo) => (
              <div
                key={photo.id}
                className={`group relative aspect-[3/2] bg-[var(--clr-bg)] border rounded overflow-hidden flex items-center justify-center p-6 text-center shadow-lg transition-all duration-500 ${
                  darkMode
                    ? "border-[var(--clr-secondary)]/30 hover:border-[var(--clr-accent)]/30"
                    : "border-[var(--clr-secondary)]/20 hover:border-[var(--clr-secondary)]/40"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--clr-bg)]/90 via-[var(--clr-bg)]/40 to-transparent z-10 group-hover:via-[var(--clr-secondary)]/20 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[var(--clr-secondary)]/40 m-3 rounded opacity-40 group-hover:border-[var(--clr-secondary)]/60 transition-colors">
                  <Compass
                    size={22}
                    className="text-[var(--clr-mutedalt)] group-hover:rotate-45 transition-transform duration-1000 ease-out"
                  />
                </div>

                <div className="relative z-20 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[var(--clr-accent)] border border-[var(--clr-accent)]/30 px-2 py-0.5 rounded bg-[var(--clr-bg)]/60 shadow-sm">
                    {photo.tag}
                  </span>
                  <h4 className="font-serif text-base text-[var(--clr-primary)] mt-3 mb-1 font-normal tracking-wide transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-[var(--clr-muted)] text-xs font-light transition-colors">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
