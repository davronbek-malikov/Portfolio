// ============================================================================
//  CAREER DATA: experience, education, skills and facts.
//  Used by the About page, the homepage timeline and the "Ask my AI" assistant.
//  Keep employer work generic: no internal product, client or market names.
// ============================================================================

export const education = [
  {
    degree: "Ph.D. in AI Convergence Engineering",
    school: "Gyeongsang National University, South Korea",
    period: "2020 – 2025",
    note: "Thesis: Advancements in Soccer Analytics: Players' Goals and Salary Prediction Models with Machine Learning",
  },
  {
    degree: "Master of Informatics",
    school: "Gyeongsang National University, South Korea",
    period: "2018 – 2020",
  },
  {
    degree: "Bachelor of Mathematics",
    school: "Fergana State University, Uzbekistan",
    period: "2014 – 2018",
  },
];

export const experience = [
  {
    role: "AI Engineer & Team Lead",
    org: "TripleH",
    period: "Dec 2025 – Present",
    bullets: [
      "Lead the AI engineering team building autonomous agent systems and enterprise AI products.",
      "Architect and ship production-grade AI agents for enterprise clients: multi-agent orchestration, legal research, meeting intelligence, and per-employee assistants.",
      "Drive end-to-end development from research and prototyping to deployment on cloud and on-prem infrastructure.",
    ],
  },
  {
    role: "Independent Researcher in Sports Analytics",
    org: "Self-directed Research",
    period: "2020 – 2025",
    bullets: [
      "Research on machine learning, deep learning and LLMs applied to soccer analytics.",
      "Models for performance evaluation, salary prediction, and tactical analysis.",
      "Preparing submissions to SCIE and AI-focused journals.",
    ],
  },
  {
    role: "Independent AI Educator",
    org: "Online & Private Instruction",
    period: "2020 – 2025",
    bullets: [
      "Design and deliver advanced courses in machine learning, deep learning, computer vision and LLMs.",
      "Mentor students and professionals on building end-to-end AI systems.",
      "Focus on practical applications of AI in industry and academia.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "Big Data Systems Software Lab, Gyeongsang National University",
    period: "2022 – 2025",
    bullets: [
      "ML for soccer analytics, covering salary prediction with traditional ML and AutoML, a dual expected/actual-goals model, and injury-type prediction.",
      "Published 4 first-author papers in SCIE and international conference proceedings.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "Distributed Systems Lab, Gyeongsang National University",
    period: "2018 – 2021",
    bullets: [
      "Applied advanced mathematical concepts to distributed systems.",
      "Published on lattice-group structures in Cartesian product spaces.",
    ],
  },
  {
    role: "Mathematics Instructor",
    org: "University Preparation, SAT & International Math Exams · Fergana, Uzbekistan",
    period: "2014 – 2017",
    bullets: [
      "Taught advanced mathematics and analytical reasoning for university entrance exams, the SAT, and other international mathematics exams.",
      "Developed customized teaching materials to strengthen students' problem-solving and logical thinking skills.",
    ],
  },
];

// Short version for the homepage timeline.
export const timeline = [
  {
    role: "AI Engineer & Team Lead",
    org: "TripleH, Seoul",
    period: "Dec 2025 – Present",
    text: "Lead the team building on-premise multi-agent LLM systems for enterprise clients: agents, RAG, post-training, quantized deployment on small servers, and observability with LangSmith and Arize Phoenix.",
  },
  {
    role: "Graduate Researcher",
    org: "Gyeongsang National University",
    period: "2018 – 2025",
    text: "Machine learning for soccer analytics (salary, performance and injury prediction) and mathematics for distributed systems. 5 first-author papers, including 2 in SCIE journals.",
  },
  {
    role: "AI Educator",
    org: "Online, Uzbek-speaking students",
    period: "2020 – 2025",
    text: "Taught machine learning, deep learning, computer vision and LLM courses; mentored students through end-to-end AI projects.",
  },
  {
    role: "Ph.D. in AI Convergence Engineering",
    org: "Gyeongsang National University",
    period: "2020 – 2025",
    text: "Thesis: Advancements in Soccer Analytics: Players' Goals and Salary Prediction Models with Machine Learning. Also a Master of Informatics (2018 – 2020) and a Bachelor of Mathematics (2014 – 2018).",
  },
];

export const skills = [
  { group: "LLM Engineering", items: "prompt and context engineering, structured outputs and tool calling with schema validation, SSE streaming, multi-provider LLM gateways (Claude, OpenAI, Ollama) with cost and rate limits, guardrails and prompt-injection defense" },
  { group: "Post-training & Inference", items: "SFT, LoRA, QLoRA, DPO, RLHF (reward models, PPO, RLOO), Hugging Face Transformers and PEFT, vLLM, Ollama, llama.cpp, 4-bit quantization (GGUF, AWQ, GPTQ), on-premise serving on small servers" },
  { group: "RAG & Retrieval", items: "chunking and embedding strategies, hybrid search (BM25 + dense, RRF), cross-encoder reranking, GraphRAG, permission-aware retrieval, cited answers, pgvector, Qdrant, Milvus" },
  { group: "Agents", items: "LangGraph, LangChain, multi-agent orchestration (planner, router, judge), human-in-the-loop approval, MCP, A2A, event-driven agents on Kafka" },
  { group: "Evaluation & Observability", items: "LangSmith, Arize Phoenix, OpenTelemetry and Jaeger, Ragas, DeepEval, LLM-as-a-Judge, golden-set experiments, precision/recall@k, grounding and hallucination checks" },
  { group: "Machine Learning", items: "supervised regression and classification, feature engineering, leakage-safe validation, XGBoost, LightGBM, stacking ensembles, AutoML, Optuna, SHAP, clustering (KMeans, DBSCAN, Gaussian Mixture)" },
  { group: "Deep Learning & Computer Vision", items: "PyTorch, TensorFlow/Keras, CNNs, Transformer architectures (including a GPT-style model written from scratch), YOLO, OpenCV" },
  { group: "Engineering", items: "Python, SQL, FastAPI, PostgreSQL, Redis, Kafka, Docker, GitHub Actions, MLflow, Weights & Biases, Next.js" },
];

export const facts = {
  location: "Seoul, South Korea (living in Korea since 2018)",
  visa: "Holds a valid E-7-1 professional work visa in Korea",
  languages: "English (fluent), Uzbek (native), Turkish (advanced), Russian (intermediate), Korean (conversational)",
  lookingFor: "Open to LLM, RAG, AI Agent, AI Research, Machine Learning, Deep Learning and Computer Vision engineering roles",
  confidentiality: "Work at the current employer is confidential; only general descriptions are public, and details can be discussed at interview",
};

// Classic "Technical Skills" list shown next to the brain map. `region` links a
// group to a region in data/brain.js, so clicking the group highlights it there.
export const technicalSkills = [
  { group: "Machine Learning", region: "ml", items: ["Scikit-learn", "XGBoost", "LightGBM", "Stacking ensembles", "AutoML", "Optuna", "SHAP", "Clustering", "Feature engineering", "Leakage-safe validation"] },
  { group: "Deep Learning & Computer Vision", region: "dl", items: ["PyTorch", "TensorFlow / Keras", "Hugging Face", "CNNs", "Transformers", "YOLO", "OpenCV"] },
  { group: "LLM Post-training & Inference", region: "post", items: ["SFT", "LoRA / QLoRA", "DPO", "RLHF (PPO, RLOO)", "4-bit quantization (GGUF, AWQ, GPTQ)", "vLLM", "Ollama", "llama.cpp"] },
  { group: "RAG & Retrieval", region: "rag", items: ["Hybrid search (BM25 + dense, RRF)", "Cross-encoder reranking", "GraphRAG", "pgvector", "Qdrant", "Milvus"] },
  { group: "AI Agents", region: "agents", items: ["LangGraph", "LangChain", "Multi-agent systems", "Tool calling", "Human-in-the-loop", "MCP", "A2A"] },
  { group: "Evaluation & Observability", region: "eval", items: ["LangSmith", "Arize Phoenix", "OpenTelemetry", "Ragas", "DeepEval", "LLM-as-a-Judge"] },
  { group: "Engineering & MLOps", region: "eng", items: ["Python", "SQL", "FastAPI", "Docker", "GitHub Actions", "MLflow", "Weights & Biases", "PostgreSQL", "Redis", "Kafka", "Next.js"] },
];
