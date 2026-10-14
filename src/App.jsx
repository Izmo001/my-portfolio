import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Database, BrainCircuit, ShieldCheck, Briefcase, GraduationCap, Award } from 'lucide-react';

// --- DATA ---
const skillsData = {
  "AI & ML": ["RAG pipelines", "Document ingestion & chunking", "Embeddings", "Vector similarity search", "LLM prompting", "Tool/function calling", "Conversational memory", "Intent-based routing"],
  "Retrieval & Evaluation": ["Dense/vector retrieval", "BM25 hybrid search", "Reciprocal Rank Fusion (RRF)", "Cross-encoder reranking", "RAGAS evaluation concepts", "Faithfulness, Context precision/recall, Answer relevancy"],
  "Languages & Frameworks": ["Java 21", "Spring Boot", "Spring AI", "Python", "JavaScript/TypeScript", "Node.js", "React", "REST APIs"],
  "Data & AI Tooling": ["ChromaDB", "pgvector", "PostgreSQL", "H2/JDBC", "MongoDB", "SQL", "Pandas", "TensorFlow", "MLflow"],
  "Engineering & Delivery": ["Git/GitHub", "Maven", "Docker/Compose", "CI/CD", "FastAPI", "Streamlit", "LangGraph", "Linux"],
  "Security & Infrastructure": ["OAuth2", "RBAC", "OWASP", "TLS", "VLANs", "TCP/IP", "DNS", "Wireshark", "Nmap", "Server health checks"]
};

const projectsData = [
  {
    title: "Agentic RAG Knowledge Assistant",
    tech: "Python, RAG, Retrieval Engineering",
    status: "Baseline RAG implemented; advanced retrieval and agentic/MLOps stages planned",
    description: "Built the Week 1 baseline for a document question-answering workflow: document ingestion, chunking, embeddings, vector storage, semantic retrieval, and grounded answers with citations. Designed the end-to-end architecture around a document ingestion pipeline and retrieval-augmented generation, with pgvector/vector search and an LLM response layer.",
    highlights: [
      "Developed an improvement roadmap covering hybrid dense + BM25 retrieval, Reciprocal Rank Fusion, cross-encoder reranking, and a LangGraph agent.",
      "Specified an evaluation approach using a golden question set and RAGAS metrics to compare system versions rather than relying on subjective impressions.",
      "Planned production engineering layers including FastAPI, Streamlit, Langfuse tracing, Docker Compose, DVC/MLflow, and GitHub Actions CI/CD."
    ]
  },
  {
    title: "Commerce Copilot",
    tech: "Java 21, Spring Boot, Spring AI, ChromaDB",
    status: "Functional MVP / learning project",
    description: "Developed a Java-based conversational shopping assistant with a single POST /chat endpoint and an orchestration service using Spring AI.",
    highlights: [
      "Implemented an FAQ RAG path that retrieves relevant FAQ chunks from ChromaDB and supplies context for grounded policy responses.",
      "Implemented typed product-search tool calling using Spring AI @Tool methods to query a product database, limiting the model to explicitly exposed functions rather than arbitrary generated SQL.",
      "Added conversational continuity using MessageChatMemoryAdvisor and a conversation ID to retain a rolling window of prior messages."
    ]
  }
];

const experienceData = [
  {
    role: "IT Intern — Information Technology Department",
    company: "Kwetu Nairobi, Curio Collection by Hilton",
    type: "Industrial Attachment",
    points: [
      "Supported user troubleshooting and technology services in a hotel IT environment.",
      "Assisted with OPERA and MC installation and user account/password administration; gained exposure to MICROS/POS, Onity, SunSystems, and Z-Fiscal.",
      "Supported server health checks, backups, application availability, PBX telephones, keycards, digital signage, and meeting/conference audiovisual systems.",
      "Built practical awareness of access management, authentication, network segmentation, and secure use of enterprise applications."
    ]
  },
  {
    role: "Software & Security Engineering Attachee",
    company: "Kenya Department of Agriculture",
    type: "June 2024 - December 2024",
    points: [
      "Developed REST APIs using Node.js and Azure SQL for a logistics platform.",
      "Implemented OAuth2 authentication and role-based access control to support data separation.",
      "Worked with network-security practices including firewall rules, VLAN segmentation, and TLS configuration.",
      "Built Python ETL pipelines for data ingestion and analytics workflows; applied threat-modelling concepts and OWASP guidance.",
      "Deployed containerized applications using Docker and Azure services."
    ]
  },
  {
    role: "Full-Stack Developer (Contract)",
    company: "Freelance / Remote",
    type: "January 2024 - Present",
    points: [
      "Developed web and cross-platform mobile applications for small-business use cases.",
      "Worked with APIs, databases, authentication, cloud deployment, and interactive dashboards.",
      "Integrated payment services and real-time application features while applying secure development practices."
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-tighter">David Momanyi</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>
          <a href="mailto:mutindadavid682@gmail.com" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
            Contact Me
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-sm font-medium mb-4">
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Hi, I'm <span className="text-cyan-400">David Momanyi Isaya</span>
            </h1>
            <h2 className="text-2xl text-slate-400 font-medium">
              AI/ML Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Computer Science graduate with hands-on project experience building AI-enabled applications and practical experience supporting enterprise IT. Developing applied skills in Retrieval-Augmented Generation (RAG), vector search, LLM tool/function calling, Java/Spring AI, and Python-based AI pipelines.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/lzmo001" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg font-medium transition-all">
                <Github size={20} /> GitHub
              </a>
              <a href="mailto:mutindadavid682@gmail.com" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-lg font-medium transition-all">
                <Mail size={20} /> Email Me
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-slate-500">
              <span className="flex items-center gap-2"><MapPin size={16} /> Nairobi, Kenya</span>
              <span className="flex items-center gap-2"><Phone size={16} /> 0704932291</span>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shrink-0">
            {/* Make sure to save your image as profile.jpg in the public folder */}
            <img src="/profile.jpg" alt="David Momanyi Isaya" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BrainCircuit className="text-cyan-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-900 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700">
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-cyan-400" size={28} />
          <h2 className="text-3xl font-bold text-white">Selected AI/ML Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-cyan-900/50 transition-all shadow-lg">
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                  {project.tech}
                </div>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-slate-950/50 border-t border-slate-800 text-xs text-slate-500">
                <strong>Status:</strong> {project.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-cyan-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-cyan-400" size={28} />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500 pl-6">
                <h3 className="text-lg font-bold text-white">BSc in Computer Science & Engineering</h3>
                <p className="text-cyan-400">Catholic University of Science & Technology, Kenya</p>
                <p className="text-sm text-slate-500 mt-1">2022 - 2026</p>
                <p className="text-sm text-slate-400 mt-2">Specialization: Software Engineering, Cybersecurity & Enterprise Systems</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-6">
                <h3 className="text-lg font-bold text-white">Kenya Certificate of Secondary Education</h3>
                <p className="text-slate-400">St. Charles Lwanga National Secondary High School, Kitui</p>
                <p className="text-sm text-slate-500 mt-1">2017 - 2021</p>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-cyan-400" size={28} />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="space-y-4">
              {[
                "Microsoft Certified: Azure Solutions Architect Expert",
                "Microsoft Certified: DevOps Engineer Expert",
                "CompTIA Security+",
                "Cisco CCNA — In Progress"
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <ShieldCheck className="text-cyan-500 shrink-0" size={20} />
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} David Momanyi Isaya. All rights reserved.</p>
          <p>Referee: Crawford Ndeywa — IT Manager, Kwetu Nairobi | crawford.ndeewa@hilton.com</p>
        </div>
      </footer>
    </div>
  );
}