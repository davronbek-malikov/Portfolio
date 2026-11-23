// ============================================================================
//  BRAIN MAP DATA: skills grouped into brain "regions", each linked to evidence.
//  Evidence ids are project ids from data/projects.js, or one of the special
//  sources below ("work", "research", "teaching"). Only link a skill to a
//  project that really uses it: the map is meant to be checkable.
// ============================================================================

// Special evidence sources that are not projects.
export const sources = {
  work: {
    title: "AI Engineer & Team Lead, TripleH",
    note: "Enterprise work (confidential, described in general terms)",
    href: "#experience",
  },
  research: {
    title: "Ph.D. research and 5 first-author papers",
    note: "Machine learning for soccer analytics; mathematics",
    href: "#publications",
  },
  teaching: {
    title: "AI Educator (2020 – 2025)",
    note: "Taught ML, deep learning, computer vision and LLM courses",
    href: "#experience",
  },
};

// Regions: left hemisphere = language and LLM systems, right = analytics and research.
// x/y are positions in the 1000 x 640 drawing.
export const regions = [
  { id: "post", label: "LLM Post-training", side: "left", x: 265, y: 175, color: "#e8294a" },
  { id: "agents", label: "AI Agents", side: "left", x: 420, y: 265, color: "#d97706" },
  { id: "rag", label: "RAG & Retrieval", side: "left", x: 205, y: 365, color: "#7c3aed" },
  { id: "eval", label: "Evaluation", side: "left", x: 370, y: 470, color: "#db2777" },
  { id: "dl", label: "Deep Learning & CV", side: "right", x: 735, y: 175, color: "#0284c7" },
  { id: "ml", label: "Machine Learning", side: "right", x: 580, y: 265, color: "#2563eb" },
  { id: "research", label: "Research", side: "right", x: 795, y: 365, color: "#059669" },
  { id: "eng", label: "Engineering", side: "right", x: 630, y: 470, color: "#475569" },
];

// short = label on the map; name = full name in the detail panel.
export const skills = [
  // LLM post-training and inference
  { id: "sft", region: "post", short: "SFT", name: "Supervised fine-tuning (SFT)", uses: ["llm-engineering", "work"] },
  { id: "lora", region: "post", short: "LoRA / QLoRA", name: "LoRA and QLoRA (parameter-efficient fine-tuning)", uses: ["llm-engineering", "work"] },
  { id: "dpo", region: "post", short: "DPO", name: "Direct Preference Optimization (implemented from scratch)", uses: ["llm-engineering", "work"] },
  { id: "rlhf", region: "post", short: "RLHF", name: "RLHF with reward models, PPO and RLOO", uses: ["llm-engineering"] },
  { id: "quant", region: "post", short: "Quantization", name: "4-bit quantization (GGUF, AWQ, GPTQ) for small servers", uses: ["work"] },
  { id: "serving", region: "post", short: "Local serving", name: "Local LLM serving (Ollama, vLLM, open-weight models)", uses: ["era-academy", "work"] },

  // Agents
  { id: "langgraph", region: "agents", short: "LangGraph", name: "LangGraph agent orchestration", uses: ["touchline", "portiq", "work"] },
  { id: "multiagent", region: "agents", short: "Multi-agent", name: "Multi-agent systems (orchestrator, router, sub-agents)", uses: ["portiq", "era-academy", "work"] },
  { id: "tools", region: "agents", short: "Tool calling", name: "Tool calling with schema-validated tools", uses: ["touchline"] },
  { id: "hitl", region: "agents", short: "Human-in-loop", name: "Human-in-the-loop approval steps", uses: ["touchline"] },
  { id: "a2a", region: "agents", short: "A2A + Kafka", name: "Agent-to-agent messaging over A2A and Kafka", uses: ["portiq"] },
  { id: "gateway", region: "agents", short: "LLM gateway", name: "Multi-provider LLM gateway (Claude, OpenAI, Ollama) with cost and rate limits", uses: ["era-academy"] },

  // RAG
  { id: "hybrid", region: "rag", short: "Hybrid search", name: "Hybrid search (BM25 + dense, RRF)", uses: ["touchline"] },
  { id: "pgvector", region: "rag", short: "pgvector", name: "pgvector (PostgreSQL vector search)", uses: ["era-academy", "portiq", "work"] },
  { id: "qdrant", region: "rag", short: "Qdrant", name: "Qdrant vector database", uses: ["touchline", "tactiq", "work"] },
  { id: "graphrag", region: "rag", short: "GraphRAG", name: "GraphRAG (graph-based retrieval)", uses: ["kotib", "work"] },
  { id: "acl", region: "rag", short: "Access control", name: "Permission-aware retrieval (access rules inside the query)", uses: ["era-academy"] },
  { id: "chunking", region: "rag", short: "Chunk + embed", name: "Document parsing, chunking and embeddings", uses: ["era-academy", "tactiq"] },
  { id: "rag-apps", region: "rag", short: "RAG chatbots", name: "RAG chatbots in live products", uses: ["palov", "hamyon", "kotib"] },

  // Evaluation and observability
  { id: "langsmith", region: "eval", short: "LangSmith", name: "LangSmith tracing and experiments", uses: ["touchline", "work"] },
  { id: "phoenix", region: "eval", short: "Phoenix", name: "Arize Phoenix (on-premise LLM observability)", uses: ["work"] },
  { id: "golden", region: "eval", short: "Golden sets", name: "Golden-set and held-out evaluation", uses: ["touchline", "llm-engineering"] },
  { id: "judge", region: "eval", short: "LLM-as-Judge", name: "LLM-as-a-Judge scoring", uses: ["portiq", "llm-engineering", "work"] },
  { id: "otel", region: "eval", short: "OpenTelemetry", name: "OpenTelemetry and Jaeger tracing", uses: ["portiq"] },
  { id: "tests", region: "eval", short: "Test suites", name: "Automated test suites (206 and 102 tests)", uses: ["era-academy", "touchline"] },

  // Deep learning and computer vision
  { id: "pytorch", region: "dl", short: "PyTorch", name: "PyTorch", uses: ["llm-from-scratch", "llm-engineering", "computer-vision"] },
  { id: "transformer", region: "dl", short: "Transformers", name: "Transformer architecture written from scratch", uses: ["llm-from-scratch"] },
  { id: "tokenizer", region: "dl", short: "BPE tokenizer", name: "BPE tokenizer and pretraining data pipeline", uses: ["llm-from-scratch"] },
  { id: "training", region: "dl", short: "Training loops", name: "Training loops: mixed precision, gradient accumulation, LR schedules", uses: ["llm-from-scratch"] },
  { id: "hf", region: "dl", short: "Hugging Face", name: "Hugging Face Transformers, PEFT and Datasets", uses: ["llm-engineering", "llm-from-scratch", "tactiq"] },
  { id: "cv", region: "dl", short: "YOLO / OpenCV", name: "Computer vision with YOLO and OpenCV (project coming soon)", uses: ["computer-vision", "teaching"] },

  // Machine learning
  { id: "boosting", region: "ml", short: "XGBoost", name: "Gradient boosting (XGBoost, LightGBM)", uses: ["supervised-ml", "research"] },
  { id: "stacking", region: "ml", short: "Stacking", name: "Stacking and voting ensembles", uses: ["supervised-ml"] },
  { id: "optuna", region: "ml", short: "Optuna", name: "Optuna hyperparameter tuning", uses: ["supervised-ml"] },
  { id: "shap", region: "ml", short: "SHAP", name: "SHAP explainability", uses: ["supervised-ml"] },
  { id: "features", region: "ml", short: "Features", name: "Feature engineering and leakage-safe validation", uses: ["supervised-ml", "research"] },
  { id: "clustering", region: "ml", short: "Clustering", name: "Clustering (KMeans, DBSCAN, Gaussian Mixture)", uses: ["unsupervised-ml"] },
  { id: "automl", region: "ml", short: "AutoML", name: "AutoML", uses: ["research"] },

  // Research
  { id: "papers", region: "research", short: "5 papers", name: "5 first-author papers (2 SCIE)", uses: ["research"] },
  { id: "sports", region: "research", short: "Soccer data", name: "Soccer analytics (salaries, performance, injuries, scouting)", uses: ["research", "supervised-ml", "unsupervised-ml", "touchline", "tactiq"] },
  { id: "math", region: "research", short: "Mathematics", name: "Mathematics (B.Sc.; lattice-group structures paper)", uses: ["research"] },
  { id: "teach", region: "research", short: "Teaching", name: "Teaching ML, DL, CV and LLM courses", uses: ["teaching"] },

  // Engineering and product
  { id: "fastapi", region: "eng", short: "FastAPI", name: "FastAPI services", uses: ["touchline", "portiq", "llm-engineering"] },
  { id: "nextjs", region: "eng", short: "Next.js", name: "Next.js full-stack apps", uses: ["era-academy", "touchline", "portiq", "palov", "hamyon", "kotib"] },
  { id: "postgres", region: "eng", short: "PostgreSQL", name: "PostgreSQL (Prisma, Supabase)", uses: ["era-academy", "touchline", "portiq", "hamyon"] },
  { id: "docker", region: "eng", short: "Docker", name: "Docker", uses: ["portiq", "tactiq"] },
  { id: "deploy", region: "eng", short: "Deployment", name: "Deployment and monitoring (Vercel, Render, uptime checks)", uses: ["era-academy", "supervised-ml", "unsupervised-ml", "palov", "hamyon", "kotib"] },
  { id: "lead", region: "eng", short: "Team lead", name: "Team leadership, code review and mentoring", uses: ["work", "teaching"] },
];
