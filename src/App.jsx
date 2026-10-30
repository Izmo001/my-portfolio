import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Code2, Database, BrainCircuit, 
  ShieldCheck, Briefcase, GraduationCap, Award, 
  ExternalLink, ArrowRight, Server, Terminal, Globe,
  MessageCircle, X, Monitor
} from 'lucide-react';

// --- DATA ---
const skillsData = {
  "AI & ML": ["RAG pipelines", "Document ingestion & chunking", "Embeddings", "Vector similarity search", "LLM prompting", "Tool/function calling", "Conversational memory"],
  "Languages & Frameworks": ["Java 21", "Spring Boot", "Spring AI", "Python", "JavaScript/TypeScript", "React", "Next.js", "Node.js", "C#", "Kotlin", "Dart", "Flutter", "ASP.NET Core", "REST APIs"],
  "Data & AI Tooling": ["ChromaDB", "pgvector", "PostgreSQL", "SQL Server", "MongoDB", "SQL", "Pandas", "TensorFlow", "MLflow", "Power BI"],
  "Engineering & Delivery": ["Git/GitHub", "Maven", "Docker/Compose", "Kubernetes", "CI/CD", "Azure", "FastAPI", "Streamlit", "LangGraph", "Linux"],
  "Security & Infrastructure": ["OAuth2", "RBAC", "OWASP", "NIST", "TLS", "VPNs", "pfSense", "VLANs", "TCP/IP", "Wireshark", "Nmap"],
  "IT Support & Hotel Systems": ["OPERA PMS", "MC", "MICROS/POS", "Onity", "SunSystems", "Z-Fiscal", "PBX", "Digital Signage", "Conference AV", "Help desk", "User support", "Software installation", "Server health monitoring", "Backups"]
};

const projectsData = [
  {
    title: "Agentic RAG Knowledge Assistant",
    tech: "Python, RAG, Retrieval Engineering",
    status: "Baseline RAG implemented; advanced retrieval planned",
    description: "Built a document question-answering workflow: document ingestion, chunking, embeddings, vector storage, semantic retrieval, and grounded answers with citations.",
    highlights: [
      "Developed an improvement roadmap covering hybrid dense + BM25 retrieval, Reciprocal Rank Fusion, and a LangGraph agent.",
      "Specified an evaluation approach using RAGAS metrics to compare system versions rather than relying on subjective impressions.",
      "Planned production layers including FastAPI, Streamlit, Langfuse tracing, Docker Compose, and GitHub Actions CI/CD."
    ],
    color: "bg-blue-600 text-white",
    link: "https://github.com/Izmo001",
    linkLabel: "View on GitHub",
    icon: "server"
  },
  {
    title: "Commerce Copilot",
    tech: "Java 21, Spring Boot, Spring AI, ChromaDB",
    status: "Functional MVP / learning project",
    description: "Developed a Java-based conversational shopping assistant with a single POST /chat endpoint and an orchestration service using Spring AI.",
    highlights: [
      "Implemented an FAQ RAG path that retrieves relevant FAQ chunks from ChromaDB for grounded policy responses.",
      "Implemented typed product-search tool calling using Spring AI @Tool methods, limiting the model to exposed functions.",
      "Added conversational continuity using MessageChatMemoryAdvisor and a conversation ID."
    ],
    color: "bg-gray-50 text-gray-900",
    link: "https://github.com/Izmo001",
    linkLabel: "View on GitHub",
    icon: "server"
  },
  {
    title: "GoTech",
    tech: "Full-Stack Web · Live in Production",
    status: "Live · gotech.co.ke",
    description: "A production web platform deployed at gotech.co.ke — designed, built, and shipped end-to-end from backend APIs to the customer-facing frontend.",
    highlights: [
      "Designed and shipped a publicly accessible web application on a live domain.",
      "Built responsive UI, API integration, and database-backed features.",
      "Owned deployment, hosting, and ongoing maintenance for the production site."
    ],
    color: "bg-gray-900 text-white",
    link: "https://gotech.co.ke",
    linkLabel: "View Live",
    icon: "globe"
  }
];

const experienceData = [
  {
    role: "IT Intern — Information Technology Department",
    company: "Kwetu Nairobi, Curio Collection by Hilton",
    type: "Industrial Attachment",
    points: [
      "Provided IT support and troubleshooting assistance for users and technology services in a hospitality environment.",
      "Supported OPERA and MC application installation and user account/password administration.",
      "Gained practical exposure to MICROS/POS, Onity access-control systems, SunSystems and Z-Fiscal in hotel operations.",
      "Supported server health checks, backups, application availability and basic administration procedures.",
      "Assisted with POS/PMS environments, PBX telephone systems, digital signage, meeting/conference audiovisual systems and keycard support.",
      "Built practical awareness of network segmentation, authentication, user privileges and secure enterprise application use."
    ]
  },
  {
    role: "Software & Security Engineering Attachee",
    company: "Kenya Department of Agriculture",
    type: "June 2024 - December 2024",
    points: [
      "Developed REST APIs using Node.js and Azure SQL for a logistics platform.",
      "Implemented OAuth2 authentication and role-based access control for data separation.",
      "Worked on network security practices, firewall rules, VLAN segmentation and TLS configuration.",
      "Built Python ETL pipelines and supported data ingestion for analytics and anomaly-detection workflows.",
      "Applied threat-modelling concepts and addressed web security issues using OWASP guidance.",
      "Deployed containerized applications using Docker and Azure services."
    ]
  },
  {
    role: "Full-Stack Developer (Contract)",
    company: "Freelance / Remote",
    type: "January 2024 - Present",
    points: [
      "Developed web and cross-platform mobile applications for small-business use cases.",
      "Worked with cloud deployments, APIs, databases, authentication and interactive dashboards.",
      "Integrated payment services and real-time application features while applying secure development practices."
    ]
  }
];

export default function App() {
  const [isWaOpen, setIsWaOpen] = useState(false);

  // WhatsApp Configuration
  const phoneNumber = "254704932291"; // 0704932291 converted to international format
  const defaultMessage = "Hey David, I would like to know more info about your projects.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">David<span className="text-blue-600">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          </div>
          <a href="mailto:mutindadavid682@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-200">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Hey, I'm <span className="text-blue-600">David Momanyi</span>
            </h1>
            <h2 className="text-2xl text-gray-600 font-medium">
              I build secure, scalable applications & provide enterprise IT solutions.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Computer Science professional with practical experience in enterprise IT support, hospitality information systems, networking, server infrastructure, cybersecurity, software development, and cloud technologies. I bring a security-minded, service-oriented approach to system reliability and AI-driven application development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-200">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="https://github.com/Izmo001" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-medium transition-all">
                <Code2 size={18} /> GitHub
              </a>
              <a href="https://gotech.co.ke" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-medium transition-all">
                <ExternalLink size={18} /> Live Project
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><MapPin size={16} /> Nairobi, Kenya</span>
              <span className="flex items-center gap-2"><Phone size={16} /> 0704932291</span>
            </div>
          </div>
          
          {/* Right side: Styled Code Block */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm text-green-400 font-mono">
                <code>
{`class ITProfessional {
  constructor() {
    this.name = "David";
    this.skills = ["Enterprise IT", "RAG", "Spring AI"];
    this.mindset = "Security-First";
  }

  solveProblem() {
    return "Scalable & Secure";
  }
}`}
                </code>
              </pre>
            </div>
            {/* Profile Image overlay */}
            <div className="mt-8 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 -mt-24">
                <img src="/profile.jpg" alt="David Momanyi" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical & Domain Skills</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A comprehensive toolkit bridging modern AI software engineering with enterprise infrastructure and hospitality systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">AI/ML systems and full-stack applications — from prototype to production.</p>
        </div>
        
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <div key={idx} className={`rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${project.color}`}>
              <div className="p-10 md:w-3/5">
                <div className="inline-block px-4 py-1.5 bg-black/10 rounded-full text-sm font-semibold mb-6">
                  {project.tech}
                </div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg opacity-90 mb-8">{project.description}</p>
                <ul className="space-y-4 mb-8">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 text-blue-500">▹</span>
                      <span className="opacity-80">{point}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
                >
                  {project.linkLabel} <ExternalLink size={18} />
                </a>
              </div>
              <div className="md:w-2/5 p-10 flex items-center justify-center bg-black/5">
                <div className="text-center">
                  {project.icon === "globe" ? (
                    <Globe size={64} className="mx-auto mb-4 opacity-50" />
                  ) : (
                    <Server size={64} className="mx-auto mb-4 opacity-50" />
                  )}
                  <p className="text-sm font-medium opacity-60">Status: {project.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Where I've applied my skills across IT infrastructure, security, and software engineering.</p>
          </div>
          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                  <span className="inline-block mt-3 px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 text-blue-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION, CERTIFICATIONS & REFEREES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-blue-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900">BSc in Computer Science & Engineering</h3>
                <p className="text-blue-600 font-medium">Catholic University of Science & Technology</p>
                <p className="text-sm text-gray-500 mt-1">2022 - 2026</p>
                <p className="text-sm text-gray-500 mt-3">Specialization: Software Engineering, Cybersecurity & Enterprise Systems</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-lg font-bold text-gray-900">Kenya Certificate of Secondary Education</h3>
                <p className="text-gray-600 font-medium">St. Charles Lwanga National Secondary High School, Kitui</p>
                <p className="text-sm text-gray-500 mt-1">2017 - 2021</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-lg font-bold text-gray-900">Kenya Certificate of Primary Education</h3>
                <p className="text-gray-600 font-medium">Enzai Primary School</p>
                <p className="text-sm text-gray-500 mt-1">2011 - 2017</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Certifications & Referees */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Award className="text-blue-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Microsoft Certified: Azure Solutions Architect Expert",
                  "Microsoft Certified: DevOps Engineer Expert",
                  "CompTIA Security+",
                  "Cisco CCNA — In Progress"
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <ShieldCheck className="text-blue-600 shrink-0" size={22} />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Referee</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">Crawford Ndegwa</h3>
                <p className="text-gray-600 font-medium">IT Manager, Kwetu Nairobi, Curio Collection by Hilton</p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p className="flex items-center gap-2"><Mail size={16} /> crawford.ndeqwa@hilton.com</p>
                  <p className="flex items-center gap-2"><Phone size={16} /> +254 718 689360</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="bg-gray-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Let's build something amazing together.</h2>
          <p className="text-gray-400 mb-8">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!</p>
          <a href="mailto:mutindadavid682@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-900/50 mb-12">
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <a href="https://github.com/Izmo001" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Terminal size={24} />
            </a>
            <a href="mailto:mutindadavid682@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://gotech.co.ke" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GoTech live site">
              <ExternalLink size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} David Momanyi Isaya. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING WIDGET --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* The Popup Chat Card */}
        <div 
          className={`mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-72 transition-all duration-300 origin-bottom-right ${
            isWaOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <button 
            onClick={() => setIsWaOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-gray-900">Need help? Chat with us!</h4>
            <p className="text-sm text-gray-500">I'm online and ready to help you with your projects.</p>
            <a 
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition-colors mt-2"
            >
              <MessageCircle size={18} />
              Start Chat
            </a>
          </div>
        </div>

        {/* The Floating Button */}
        <button
          onClick={() => setIsWaOpen(!isWaOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>

    </div>
  );
}