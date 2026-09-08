import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  Brain,
  Database,
  Globe,
  GraduationCap,
  MapPin,
  ExternalLink,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    {
      name: "Python",
      icon: Code2,
      description: "Programming and AI development",
    },
    {
      name: "React",
      icon: Globe,
      description: "Modern frontend development",
    },
    {
      name: "AI / ML",
      icon: Brain,
      description: "Machine learning and LLM applications",
    },
    {
      name: "FastAPI",
      icon: Code2,
      description: "High-performance backend APIs",
    },
    {
      name: "SQL",
      icon: Database,
      description: "Database design and management",
    },
    {
      name: "Git / GitHub",
      icon: Code2,
      description: "Version control and collaboration",
    },
  ];

  const projects = [
    {
      title: "AI Document Search",
      category: "AI / RAG",
      description:
        "An AI-powered chatbot that allows users to upload PDF documents and ask questions using semantic search and large language models.",
      technologies: [
        "React",
        "FastAPI",
        "OpenAI",
        "LangChain",
        "FAISS",
      ],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects, education and experience.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Future Project",
      category: "Coming Soon",
      description:
        "A new project is currently under development. More details will be added soon.",
      technologies: ["React", "Python", "AI"],
      github: "https://github.com/",
      demo: "#",
    },
  ];

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            DEEPAK<span className="text-gray-500">.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">

              {navItems.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 transition hover:text-white"
                >
                  {name}
                </a>
              ))}

            </div>
          </div>
        )}
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >

        {/* Background Glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
              Hello, I'm
            </p>

            <h1 className="max-w-5xl text-6xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              Deepak<span className="text-gray-600">.</span>
            </h1>

            <h2 className="mt-8 max-w-3xl text-2xl font-medium text-gray-300 md:text-4xl">
              I build things with{" "}
              <span className="text-white">code & AI.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
              Computer Science student passionate about software development,
              artificial intelligence and building useful digital products.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                View My Work

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:bg-white hover:text-black"
              >
                Contact Me
              </a>

            </div>


            {/* Social Links */}

            <div className="mt-12 flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-white/30 hover:text-white"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition hover:border-white/30 hover:text-white"
              >
                in
              </a>

              <a
                href="mailto:deepumdeepak4@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-white/30 hover:text-white"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={18} />
                  +91 9620317887
              </a>

            </div>

          </motion.div>


          {/* Scroll Indicator */}

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-500 md:block"
          >
            <ArrowDown size={20} />
          </a>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            number="01"
            title="About Me"
          />

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Turning ideas into{" "}
                <span className="text-gray-500">
                  real-world solutions.
                </span>
              </h3>

            </div>


            <div className="space-y-6 text-gray-400 leading-7">

              <p>
                I'm a Computer Science student interested in software
                development, artificial intelligence and modern web
                technologies.
              </p>

              <p>
                I enjoy learning new technologies and using them to build
                projects that solve real problems. My current focus is on
                full-stack development and AI-powered applications.
              </p>

              <p>
                I'm always looking for opportunities to learn, collaborate
                and build something meaningful.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            number="02"
            title="Skills"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((skill, index) => {

              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.04]"
                >

                  <Icon
                    size={28}
                    className="mb-6 text-gray-400 transition group-hover:text-white"
                  />

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {skill.description}
                  </p>

                </motion.div>
              );

            })}

          </div>
        </div>
      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            number="03"
            title="Projects"
          />

          <div className="grid gap-6 lg:grid-cols-3">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/30"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs uppercase tracking-widest text-gray-500">
                    {project.category}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:text-white"
                  />

                </div>


                <h3 className="mt-8 text-2xl font-semibold">
                  {project.title}
                </h3>


                <p className="mt-4 flex-grow text-sm leading-7 text-gray-500">
                  {project.description}
                </p>


                <div className="mt-7 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                <div className="mt-8 flex gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >
                    <span className="font-bold">
                      GH
                    </span>

                    GitHub
                  </a>


                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >
                    <ExternalLink size={17} />

                    Live Demo
                  </a>

                </div>

              </motion.article>

            ))}

          </div>
        </div>
      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            number="04"
            title="Education"
          />

          <div className="max-w-3xl">

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

              <div className="flex gap-6">

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 sm:flex">
                  <GraduationCap size={26} />
                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    2022 — Present
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Bachelor of Engineering / Technology
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Computer Science & Engineering
                  </p>

                  <p className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            05 — Contact
          </p>


          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Let's build something
            <span className="text-gray-600">
              {" "}great.
            </span>
          </h2>


          <p className="mx-auto mt-7 max-w-xl text-gray-500">
            Have an idea, project or opportunity? Feel free to reach out.
          </p>


          <a
            href="mailto:your@email.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-gray-200"
          >
            <Mail size={18} />
            Get In Touch
          </a>


          <div className="mt-12 flex justify-center gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-500 transition hover:border-white/30 hover:text-white"
            >
              GH
            </a>


            <a
              href="https://linkedin.com/in/deepakm2006"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-500 transition hover:border-white/30 hover:text-white"
            >
              in
            </a>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">

          <p>
            © {new Date().getFullYear()} Deepak. All rights reserved.
          </p>


          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-white"
          >
            Back to top

            <ArrowUpRight size={15} />
          </a>

        </div>

      </footer>

    </div>
  );
}


/* ================= SECTION TITLE ================= */

function SectionTitle({ number, title }) {
  return (
    <div className="mb-16 flex items-center gap-5">

      <span className="font-mono text-sm text-gray-600">
        {number}
      </span>

      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>

      <div className="h-px flex-1 bg-white/10" />

    </div>
  );
}


export default App;