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

// Regions: left hemisphere = LLM systems, right = machine learning and engineering.
// x/y are positions in the 1000 x 640 drawing.
export const regions = [
  { id: "post", label: "LLM Post-training", side: "left", x: 265, y: 175, color: "#e8294a" },
  { id: "agents", label: "AI Agents", side: "left", x: 420, y: 265, color: "#d97706" },
  { id: "rag", label: "RAG & Knowledge Graphs", side: "left", x: 235, y: 365, color: "#7c3aed" },
  { id: "eval", label: "LLM Evaluation", side: "left", x: 370, y: 470, color: "#db2777" },
  { id: "dl", label: "Deep Learning & CV", side: "right", x: 735, y: 175, color: "#0284c7" },
  { id: "ml", label: "Machine Learning", side: "right", x: 580, y: 265, color: "#2563eb" },
  { id: "mlops", label: "MLOps & Cloud", side: "right", x: 800, y: 370, color: "#059669" },
  { id: "backend", label: "Backend & Data", side: "right", x: 630, y: 475, color: "#475569" },
];

// Only skills a hiring team would list in a job post. short = label on the map,
// name = full name in the detail panel, uses = evidence (see the header comment).
export const skills = [
  // LLM post-training and inference
  { id: "sft", region: "post", short: "SFT", name: "Supervised fine-tuning (SFT)", uses: ["llm-engineering", "work"] },
  { id: "lora", region: "post", short: "LoRA / QLoRA", name: "LoRA and QLoRA (PEFT)", uses: ["llm-engineering", "work"] },
  { id: "dpo", region: "post", short: "DPO", name: "Direct Preference Optimization (implemented from scratch)", uses: ["llm-engineering", "work"] },
  { id: "rlhf", region: "post", short: "RLHF", name: "RLHF with reward models, PPO and RLOO", uses: ["llm-engineering"] },
  { id: "quant", region: "post", short: "Quantization", name: "4-bit quantization (GGUF, AWQ, GPTQ) for edge devices and small servers", uses: ["work"] },
  { id: "vllm", region: "post", short: "vLLM", name: "vLLM inference serving", uses: ["work"] },
  { id: "ollama", region: "post", short: "Ollama", name: "Ollama and llama.cpp for local open-weight models", uses: ["era-academy", "work", "tactiq"] },

  // Agents
  { id: "langgraph", region: "agents", short: "LangGraph", name: "LangGraph agent orchestration", uses: ["touchline", "portiq", "work"] },
  { id: "langchain", region: "agents", short: "LangChain", name: "LangChain", uses: ["work"] },
  { id: "multiagent", region: "agents", short: "Multi-agent", name: "Multi-agent systems (orchestrator, router, judge)", uses: ["portiq", "era-academy", "work"] },
  { id: "tools", region: "agents", short: "Tool calling", name: "Tool and function calling with schema validation", uses: ["touchline", "era-academy"] },
  { id: "mcp", region: "agents", short: "MCP", name: "Model Context Protocol (MCP)", uses: ["work"] },
  { id: "a2a", region: "agents", short: "A2A", name: "Agent-to-agent protocol (A2A)", uses: ["portiq"] },
  { id: "memory", region: "agents", short: "Agent memory", name: "Agent memory (persistent conversational memory)", uses: ["kotib"] },
  { id: "guardrails", region: "agents", short: "Guardrails", name: "Guardrails and prompt-injection defense", uses: ["era-academy"] },

  // RAG and vector databases
  { id: "hybrid", region: "rag", short: "Hybrid search", name: "Hybrid search (BM25 + dense, RRF)", uses: ["touchline"] },
  { id: "rerank", region: "rag", short: "Reranking", name: "Cross-encoder reranking", uses: ["work"] },
  { id: "graphrag", region: "rag", short: "GraphRAG", name: "GraphRAG (graph-based retrieval)", uses: ["kotib", "work"] },
  { id: "pgvector", region: "rag", short: "pgvector", name: "pgvector (PostgreSQL vector search)", uses: ["era-academy", "portiq", "work"] },
  { id: "qdrant", region: "rag", short: "Qdrant", name: "Qdrant vector database", uses: ["touchline", "tactiq", "work"] },
  { id: "milvus", region: "rag", short: "Milvus", name: "Milvus vector database", uses: ["work"] },
  { id: "neo4j", region: "rag", short: "Neo4j", name: "Neo4j graph database (Cypher)", uses: ["work"] },
  { id: "ontology", region: "rag", short: "Ontology", name: "Ontology modeling and knowledge graph construction", uses: ["work"] },
  { id: "docparse", region: "rag", short: "Doc parsing", name: "Document parsing and chunking pipelines (PDF, DOCX)", uses: ["tactiq", "era-academy"] },

  // LLM evaluation and observability
  { id: "langsmith", region: "eval", short: "LangSmith", name: "LangSmith tracing and experiments", uses: ["touchline", "work"] },
  { id: "phoenix", region: "eval", short: "Arize Phoenix", name: "Arize Phoenix (on-premise LLM observability)", uses: ["work"] },
  { id: "ragas", region: "eval", short: "Ragas", name: "Ragas (RAG evaluation)", uses: ["work"] },
  { id: "deepeval", region: "eval", short: "DeepEval", name: "DeepEval (LLM test framework)", uses: ["work"] },
  { id: "judge", region: "eval", short: "LLM-as-Judge", name: "LLM-as-a-Judge scoring", uses: ["portiq", "llm-engineering", "work"] },
  { id: "otel", region: "eval", short: "OpenTelemetry", name: "OpenTelemetry and Jaeger tracing", uses: ["portiq"] },

  // Deep learning and computer vision
  { id: "pytorch", region: "dl", short: "PyTorch", name: "PyTorch", uses: ["llm-from-scratch", "llm-engineering", "computer-vision"] },
  { id: "tensorflow", region: "dl", short: "TensorFlow", name: "TensorFlow / Keras", uses: ["teaching"] },
  { id: "hf", region: "dl", short: "Hugging Face", name: "Hugging Face Transformers, PEFT and Datasets", uses: ["llm-engineering", "llm-from-scratch", "tactiq"] },
  { id: "transformer", region: "dl", short: "Transformers", name: "Transformer architecture (GPT-style model written from scratch)", uses: ["llm-from-scratch"] },
  { id: "cnn", region: "dl", short: "CNNs", name: "Convolutional neural networks", uses: ["computer-vision", "teaching"] },
  { id: "yolo", region: "dl", short: "YOLO", name: "YOLO object detection (project coming soon)", uses: ["computer-vision", "teaching"] },
  { id: "opencv", region: "dl", short: "OpenCV", name: "OpenCV", uses: ["computer-vision", "teaching"] },

  // Machine learning
  { id: "sklearn", region: "ml", short: "Scikit-learn", name: "Scikit-learn", uses: ["supervised-ml", "unsupervised-ml", "research"] },
  { id: "boosting", region: "ml", short: "XGBoost", name: "Gradient boosting (XGBoost, LightGBM)", uses: ["supervised-ml", "research"] },
  { id: "ensembles", region: "ml", short: "Ensembles", name: "Stacking and voting ensembles", uses: ["supervised-ml"] },
  { id: "optuna", region: "ml", short: "Optuna", name: "Optuna hyperparameter optimization", uses: ["supervised-ml"] },
  { id: "shap", region: "ml", short: "SHAP", name: "SHAP explainability", uses: ["supervised-ml"] },
  { id: "features", region: "ml", short: "Feature eng.", name: "Feature engineering", uses: ["supervised-ml", "research"] },
  { id: "unsupervised", region: "ml", short: "Clustering", name: "Unsupervised learning (KMeans, DBSCAN, Gaussian Mixture)", uses: ["unsupervised-ml"] },
  { id: "pandas", region: "ml", short: "Pandas", name: "Pandas and NumPy", uses: ["supervised-ml", "unsupervised-ml", "research"] },

  // MLOps and cloud
  { id: "docker", region: "mlops", short: "Docker", name: "Docker", uses: ["portiq", "tactiq", "work"] },
  { id: "aws", region: "mlops", short: "AWS", name: "AWS", uses: ["work"] },
  { id: "s3", region: "mlops", short: "S3 / MinIO", name: "Object storage: AWS S3 and MinIO (S3-compatible, on-premise)", uses: ["work"] },
  { id: "mlflow", region: "mlops", short: "MLflow", name: "MLflow and Weights & Biases experiment tracking", uses: ["work"] },
  { id: "cicd", region: "mlops", short: "CI/CD", name: "CI/CD with GitHub Actions", uses: ["work"] },
  { id: "serving", region: "mlops", short: "Model serving", name: "Model deployment and serving (FastAPI, Gradio, Vercel, Render)", uses: ["supervised-ml", "unsupervised-ml", "llm-engineering", "era-academy"] },

  // Backend and data
  { id: "python", region: "backend", short: "Python", name: "Python", uses: ["supervised-ml", "llm-engineering", "touchline", "tactiq", "work"] },
  { id: "fastapi", region: "backend", short: "FastAPI", name: "FastAPI services", uses: ["touchline", "portiq", "llm-engineering", "tactiq"] },
  { id: "sql", region: "backend", short: "SQL", name: "SQL (PostgreSQL, DuckDB)", uses: ["era-academy", "touchline"] },
  { id: "postgres", region: "backend", short: "PostgreSQL", name: "PostgreSQL (Prisma, Supabase)", uses: ["era-academy", "touchline", "portiq", "hamyon"] },
  { id: "redis", region: "backend", short: "Redis", name: "Redis", uses: ["portiq"] },
  { id: "kafka", region: "backend", short: "Kafka", name: "Apache Kafka (event-driven agents)", uses: ["portiq"] },
  { id: "nextjs", region: "backend", short: "Next.js", name: "Next.js full-stack apps", uses: ["era-academy", "touchline", "portiq", "palov", "hamyon", "kotib", "tactiq"] },
];
