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
} from "lucide-react";

import { Analytics } from "@vercel/analytics/react";

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
          className="text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)] transition-colors"
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
          className="text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)] transition-colors"
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
          className="text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)] transition-colors"
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
          className="text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)] transition-colors"
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
      image: "",
      fallbackText: "Dual Calendar System Switcher UI",
      repoLink: "https://github.com/isra-w",
      icon: (
        <Calendar
          size={14}
          className="text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)] transition-colors"
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
          className="text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)] transition-colors"
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
          className="text-[var(--clr-muted)] group-hover:text-[var(--clr-accent)] transition-colors"
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
    <div className="min-h-screen font-sans antialiased bg-[var(--clr-bg)] text-[var(--clr-primary)] selection:bg-[var(--clr-accent)] selection:text-[var(--clr-bg)]">
      <Analytics />

      {/* Background Ambient Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(251,176,45,0.08) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(3,104,102,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md px-6 py-4 border-b bg-[var(--clr-bg)]/75 border-[var(--clr-secondary)]/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded border flex items-center justify-center font-serif font-bold text-sm tracking-wider border-[var(--clr-accent)]/60 text-[var(--clr-accent)] group-hover:bg-[var(--clr-accent)]/5 transition-all duration-300">
              EW
            </div>
            <span className="font-serif text-sm tracking-widest uppercase font-medium text-[var(--clr-muted)] group-hover:text-[var(--clr-primary)] transition-colors duration-300">
              Esrael W.
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
            {["About", "Projects", "Creative", "Skills", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[var(--clr-primary)] hover:text-[var(--clr-accent)] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--clr-accent)]"
                >
                  {item}
                </button>
              ),
            )}

            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded tracking-widest transition-all duration-300 border-[var(--clr-accent)]/40 text-[var(--clr-accent)] hover:bg-[var(--clr-accent)] hover:text-[var(--clr-bg)]"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
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
        <div className="fixed inset-0 z-40 backdrop-blur-lg flex flex-col justify-center p-8 space-y-6 text-xl uppercase tracking-widest border-b bg-[var(--clr-bg)]/95 border-[var(--clr-secondary)]/50">
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
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left font-serif transition-colors text-[var(--clr-muted)] hover:text-[var(--clr-accent)]"
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono border bg-[var(--clr-secondary)]/20 border-[var(--clr-secondary)]/40 text-[var(--clr-accent)]">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[var(--clr-accent)]" />
            <span className="font-mono text-1.5xl tracking-widest text-[var(--clr-primary)]">
              Available for Fullstack & Systems Roles
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none text-[var(--clr-primary)]">
            Full-Stack Developer &{" "}
            <span className="italic font-normal text-[var(--clr-accent)]">
              Software Engineer
            </span>
            .
          </h1>
          <p className="text-lg md:text-1xl font-light max-w-2xl leading-relaxed text-[var(--clr-primary)]">
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
              className="px-6 py-3 border text-xs tracking-widest uppercase rounded flex items-center space-x-2 group transition-all duration-300 shadow-lg bg-gradient-to-r from-[var(--clr-secondary)] to-[var(--clr-emerald)] border-[var(--clr-accent)]/30 hover:border-[var(--clr-accent)] text-[var(--clr-primary)] shadow-[var(--clr-secondary)]/40 hover:shadow-[var(--clr-secondary)]/20"
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
        className="relative z-10 border-y py-24 px-6 bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium text-[var(--clr-accent)]">
              <User size={12} className="mr-2" /> Biography
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-[var(--clr-primary)]">
              My Background
            </h3>
          </div>
          <div className="md:col-span-2 space-y-6 font-light leading-relaxed text-base md:text-lg text-[var(--clr-primary)]">
            <h3 className="font-serif text-2xl font-light tracking-tight mb-2 text-[var(--clr-accent)]">
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
            <h2 className="font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium text-[var(--clr-accent)]">
              <Folder size={12} className="mr-2" /> Selected Works
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-[var(--clr-primary)]">
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
                    ? "bg-[var(--clr-accent)] text-[var(--clr-bg)] font-semibold border border-[var(--clr-accent)]"
                    : "bg-[var(--clr-bg)] text-[var(--clr-muted)] border border-[var(--clr-secondary)]/30 hover:border-[var(--clr-accent)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group border rounded overflow-hidden transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 hover:border-[var(--clr-accent)]/35 hover:shadow-[var(--clr-secondary)]/50"
            >
              <div>
                {/* Visual Frame Section */}
                <div className="relative w-full h-32 sm:h-48 border-b overflow-hidden flex items-center justify-center bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain p-2 scale-100 group-hover:scale-105 transition-all duration-700 z-10 opacity-70 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 z-20 from-[var(--clr-bg)]" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <span className="text-[8px] sm:text-[9px] tracking-widest font-mono uppercase px-1.5 sm:px-2 py-0.5 rounded border bg-[var(--clr-bg)] text-[var(--clr-muted)] border-[var(--clr-secondary)]/40">
                      {project.type}
                    </span>
                    {project.icon}
                  </div>
                  <h4 className="font-serif text-sm sm:text-lg font-normal mb-1 sm:mb-2 transition-colors duration-300 text-[var(--clr-primary)] group-hover:text-[var(--clr-accent)]">
                    {project.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-light leading-relaxed mb-3 sm:mb-4 text-[var(--clr-muted)] line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>
                  {project.repoLink && (
                    <div className="mb-2 sm:mb-4">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 bg-[var(--clr-accent)] text-[var(--clr-bg)] hover:bg-[var(--clr-accent)]/90"
                      >
                        Repository
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Tag Architecture Footer */}
              <div className="p-4 sm:p-6 pt-0 hidden sm:block">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border transition-colors duration-300 text-[var(--clr-accent)]/90 bg-[var(--clr-emerald)]/20 border-[var(--clr-secondary)]/20 group-hover:border-[var(--clr-accent)]/20"
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
        className="relative z-10 border-y py-24 px-6 bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-xs uppercase tracking-widest mb-2 flex items-center font-medium text-[var(--clr-accent)]">
              <Camera size={12} className="mr-2" /> Creative Appendix
            </h2>
            <h3 className="font-serif text-3xl font-light tracking-tight text-[var(--clr-primary)]">
              Visual Photography Journal
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {photographyHighlights.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[3/2] bg-[var(--clr-bg)] border rounded overflow-hidden flex items-center justify-center p-4 sm:p-6 text-center shadow-lg transition-all duration-500 border-[var(--clr-secondary)]/30 hover:border-[var(--clr-accent)]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--clr-bg)]/90 via-[var(--clr-bg)]/40 to-transparent z-10 group-hover:via-[var(--clr-secondary)]/20 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[var(--clr-secondary)]/40 m-2 sm:m-3 rounded opacity-40 group-hover:border-[var(--clr-secondary)]/60 transition-colors">
                  <Compass
                    size={18}
                    className="text-[var(--clr-mutedalt)] group-hover:rotate-45 transition-transform duration-1000 ease-out sm:w-[22px] sm:h-[22px]"
                  />
                </div>

                <div className="relative z-20 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-mono text-[var(--clr-accent)] border border-[var(--clr-accent)]/30 px-1.5 sm:px-2 py-0.5 rounded bg-[var(--clr-bg)]/60 shadow-sm">
                    {photo.tag}
                  </span>
                  <h4 className="font-serif text-xs sm:text-base text-[var(--clr-primary)] mt-2 sm:mt-3 mb-0.5 sm:mb-1 font-normal tracking-wide transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-[var(--clr-muted)] text-[10px] sm:text-xs font-light transition-colors">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-b border-[var(--clr-secondary)]/20"
      >
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--clr-accent)] justify-center">
            <SlidersHorizontal size={12} />
            <span>Operational Matrix</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-[var(--clr-primary)]">
            Technical Capability & Tooling
          </h2>
        </div>

        {/* 3-Column Tooling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Web & Frontend */}
          <div className="p-8 border rounded bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 flex flex-col space-y-4">
            <div className="w-8 h-8 rounded border flex items-center justify-center border-[var(--clr-accent)]/30 bg-[var(--clr-secondary)]/10 text-[var(--clr-accent)]">
              <Code size={16} />
            </div>
            <h3 className="font-serif text-lg font-normal text-[var(--clr-primary)]">
              Web & Frontend
            </h3>
            <ul className="space-y-2 text-xs font-light text-[var(--clr-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>React & TypeScript Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>Tailwind CSS UI Systems</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Backend & Systems */}
          <div className="p-8 border rounded bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 flex flex-col space-y-4">
            <div className="w-8 h-8 rounded border flex items-center justify-center border-[var(--clr-accent)]/30 bg-[var(--clr-secondary)]/10 text-[var(--clr-accent)]">
              <Briefcase size={16} />
            </div>
            <h3 className="font-serif text-lg font-normal text-[var(--clr-primary)]">
              Backend & Systems
            </h3>
            <ul className="space-y-2 text-xs font-light text-[var(--clr-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>Node.js Platforms & Prisma ORM</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>C# / .NET Game & Client Apps</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Architecture */}
          <div className="p-8 border rounded bg-[var(--clr-bg)] border-[var(--clr-secondary)]/20 flex flex-col space-y-4">
            <div className="w-8 h-8 rounded border flex items-center justify-center border-[var(--clr-accent)]/30 bg-[var(--clr-secondary)]/10 text-[var(--clr-accent)]">
              <Calendar size={16} />
            </div>
            <h3 className="font-serif text-lg font-normal text-[var(--clr-primary)]">
              Data Architecture
            </h3>
            <ul className="space-y-2 text-xs font-light text-[var(--clr-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>Microsoft SQL Server Relational Layouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--clr-accent)] mr-2 font-mono">
                  ›
                </span>
                <span>Core Algorithmic Data Mappings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center flex flex-col items-center justify-center"
      >
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--clr-accent)]">
            <Mail size={12} />
            <span>Let's Connect</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[var(--clr-primary)] mb-8">
            Initiate a Project Conversation
          </h2>

          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-accent)] bg-[var(--clr-accent)] px-3 py-2 text-[var(--clr-bg)] shadow-md transition-all duration-300 hover:bg-[var(--clr-accent)]/90"
            >
              <Mail size={24} />
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-widest">
                Email
              </span>
            </a>

            <a
              href="https://t.me/Iesra_w"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-secondary)]/40 bg-[var(--clr-bg)] px-3 py-2 text-[var(--clr-muted)] transition-colors duration-300 hover:border-[var(--clr-accent)]/50 hover:text-[var(--clr-accent)]"
              aria-label="Telegram"
              title="Telegram"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#26A5E4"
                aria-hidden="true"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
                Telegram
              </span>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~016a980be28ea3f8b0?mp_source=share"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-secondary)]/40 bg-[var(--clr-bg)] px-3 py-2 text-[var(--clr-muted)] transition-colors duration-300 hover:border-[var(--clr-accent)]/50 hover:text-[var(--clr-accent)]"
              aria-label="Upwork Profile"
              title="Upwork Profile"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#14a800"
                aria-hidden="true"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.182 1.484-3.176 2.838-3.176 1.092 0 1.988.808 1.988 2.215.001 1.825-1.085 3.306-1.98 3.306zm0-7.838c-2.822 0-4.88 2.008-5.596 4.401-1.222-1.782-2.131-4.221-2.512-6.173H7.575v8.528c0 1.548-.826 2.709-2.101 2.709-1.277 0-2.101-1.161-2.101-2.709V3.548H.497v8.528c0 3.272 2.116 5.688 5.011 5.688 2.896 0 4.981-2.416 4.981-5.688v-1.61c.421 1.884 1.341 3.882 2.502 5.385l-1.583 7.561h2.952l1.093-5.218c.954.67 2.052 1.053 3.108 1.053 3.011 0 5.039-2.503 5.039-5.918 0-3.416-2.028-5.918-5.039-5.918z" />
              </svg>
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
                Upwork
              </span>
            </a>

            <a
              href="https://github.com/isra-w"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-secondary)]/40 bg-[var(--clr-bg)] px-3 py-2 text-[var(--clr-muted)] transition-colors duration-300 hover:border-[var(--clr-accent)]/50 hover:text-[var(--clr-accent)]"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/isra-w"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-secondary)]/40 bg-[var(--clr-bg)] px-3 py-2 text-[var(--clr-muted)] transition-colors duration-300 hover:border-[var(--clr-accent)]/50 hover:text-[var(--clr-accent)]"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#0A66C2"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
                LinkedIn
              </span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded border border-[var(--clr-secondary)]/40 bg-[var(--clr-bg)] px-3 py-2 text-[var(--clr-muted)] transition-colors duration-300 hover:border-[var(--clr-accent)]/50 hover:text-[var(--clr-accent)]"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient
                    id="instagram-gradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instagram-gradient)"
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
              <span className="hidden sm:block whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
