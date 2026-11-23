// ============================================================================
//  PROJECTS DATA: single source of truth for the whole portfolio.
//  To add a new card (e.g. a Machine Learning Engineering project) just append
//  a new object to the `projects` array below. Everything renders automatically.
//
//  Field guide:
//    id        unique slug (used for anchors / keys)
//    n         card number shown on the card (e.g. "01")
//    title     project name
//    rarity    one of: "mythic" | "legendary" | "epic" | "rare" | "common"
//    cls       class line, e.g. "Orchestrator / Command Hub"
//    flavor    one-line italic tagline
//    motif     short keyword that picks the hero illustration ("hub","module",
//              "quant","twin","law","meeting","forge","enterprise","ml","custom")
//    metrics   [{ value, label }]  1-2 real results shown on the card
//    stats     (legacy, no longer shown)
//    extraStat optional { label, value } shown as a 6th highlighted meter
//    abilities array of strings (bullet points)
//    stack     array of tech chips
//    status    { state: "live"|"beta"|"rnd"|"proven", label }
//    deploy    { mode, text }  where/how it runs: Cloud | Hybrid | Local | Training | Planned
//    links     { demo, github }  (either may be omitted)
//    group     used for the future "category" filter ("agent","platform","rnd","ml")
// ============================================================================

export const RARITY_ORDER = ["mythic", "legendary", "epic", "rare", "common"];

// ----------------------------------------------------------------------------
//  LLM & RAG PROJECTS: LLM systems: agents, retrieval, post-training, evaluation.
//  Rendered first on the homepage.
// ----------------------------------------------------------------------------
export const llmProjects = [
  {
    id: "era-academy",
    n: "09",
    title: "ERA Academy",
    rarity: "mythic",
    cls: "AI EdTech Platform · Multi-Agent Engine · RAG · pgvector",
    flavor: "One AI engine, three assistants (student tutor, teacher and admin), and each one only ever sees what its user is allowed to see.",
    motif: "learn",
    group: "llm",
    stats: { PWR: 90, SCL: 88, AUT: 82, INT: 90, PLH: 92 },
    abilities: [
      "Multi-role AI learning platform for students, teachers and admins: courses, progress tracking, onboarding and an admin CMS",
      "One provider-agnostic agent engine serves three role-based assistants, with streaming answers, usage tracking and cost limits across Claude, OpenAI and local open-weight models",
      "Permission-aware RAG over course documents: access control is enforced in the database query, so users only retrieve what they are allowed to see, and every answer cites its sources",
      "Security by design: prompt-injection defense, with authorization handled in code rather than in the prompt",
      "Production quality: 206 automated tests across authorization, security, the AI engine and RAG, all passing",
    ],
    metrics: [{ value: "206", label: "automated tests passing" }, { value: "3", label: "role-based AI assistants" }],
    deploy: { mode: "Cloud", text: "Next.js on Vercel; PostgreSQL + pgvector and private file storage on Supabase; Claude API, with local Ollama models supported for on-premise use." },
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL + pgvector", "Supabase", "Claude API", "Ollama", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: {
      demo: "https://era-academy.vercel.app",
      github: "https://github.com/malikov-davronbek/ERA/tree/phase-1-foundation",
    },
  },
  {
    id: "tactiq",
    n: "10",
    title: "TACTIQ",
    rarity: "legendary",
    cls: "Football Intelligence · RAG · Qdrant · On-Premise LLMs",
    flavor: "Ask football questions. Get evidence, not guesses.",
    motif: "tactics",
    group: "llm",
    stats: { PWR: 84, SCL: 78, AUT: 76, INT: 88, PLH: 84 },
    abilities: [
      "Evidence-first football intelligence for coaches, scouts and analysts: every answer cites its sources and states what the evidence cannot support",
      "End-to-end RAG application: an indexing pipeline (loading, chunking, embeddings, Qdrant) and a retrieval-and-generation pipeline with clickable evidence links",
      "Investigation UI (Next.js + FastAPI): uploaded documents are indexed automatically, answers can be filtered by topic, and an LLM-only mode shows how much RAG grounding changes the answer",
      "Three LLM providers with automatic fallback (local Qwen2.5 via Ollama, Groq, Gemini); an offline mode switches off every cloud call",
      "Connectors for professional football data (StatsBomb, Wyscout, SkillCorner); every pipeline step is tested and built without heavy frameworks",
    ],
    metrics: [{ value: "3", label: "LLM providers with fallback" }, { value: "0", label: "cloud calls in offline mode" }],
    deploy: { mode: "On-premise", text: "Runs fully on-premise: Qdrant in Docker, local Qwen2.5 via Ollama, FastAPI and Next.js. Cloud LLMs (Groq, Gemini) are optional and switched off in offline mode." },
    stack: ["Python", "Qdrant", "Sentence Transformers", "FastAPI", "Next.js", "Ollama (Qwen2.5)", "Groq", "Gemini", "Docker", "pytest"],
    status: { state: "beta", label: "IN DEVELOPMENT · WORKING PROTOTYPE" },
    links: { github: "https://github.com/davronbek-malikov/TACTIQ" },
  },
  {
    id: "touchline",
    n: "11",
    title: "Touchline",
    rarity: "mythic",
    cls: "AI Scouting Copilot · Agentic RAG · LangGraph · LangSmith",
    flavor: "Describe the player you need. Get a ranked shortlist and a cited report. The AI never makes a number up.",
    motif: "pitch",
    group: "llm",
    stats: { PWR: 90, SCL: 84, AUT: 88, INT: 94, PLH: 86 },
    abilities: [
      "AI scouting copilot: a scout describes the player they need in plain language and gets a ranked shortlist and a cited scouting report",
      "LangGraph agent with structured tool calling: the model fills validated inputs and code builds every database query, preventing invented numbers and unsafe SQL",
      "Human-in-the-loop review: the agent pauses for shortlist approval and resumes from a saved checkpoint, even after a restart",
      "Hybrid RAG (dense + BM25) with citations, so every claim in a report links to its source",
      "Data warehouse of 50,149 players and 297 matches; quality measured in LangSmith on a 120-question benchmark (accuracy, precision/recall, grounding, hallucination checks); 102 automated tests",
    ],
    metrics: [{ value: "50,149", label: "players in the warehouse" }, { value: "120", label: "question evaluation benchmark" }],
    deploy: { mode: "Local", text: "Not deployed yet. FastAPI backend and Next.js frontend with PostgreSQL, DuckDB and Qdrant; Claude API; tracing in LangSmith." },
    stack: ["Claude API", "LangGraph", "LangSmith", "Qdrant", "DuckDB", "FastAPI", "Next.js", "Postgres"],
    status: { state: "beta", label: "IN DEVELOPMENT" },
    links: { github: "https://github.com/davronbek-malikov/touchline" },
  },
  {
    id: "llm-engineering",
    n: "12",
    title: "TeachHelp",
    rarity: "mythic",
    cls: "Post-Training · SFT · DPO · RLHF (PPO / RLOO) · Uzbek–English",
    flavor: "From a base model that only continues text to a teaching assistant: SFT, DPO and RLHF, every stage measured on the same 68 questions.",
    motif: "forge",
    group: "llm",
    stats: { PWR: 88, SCL: 68, AUT: 64, INT: 96, PLH: 86 },
    abilities: [
      "End-to-end LLM post-training: turned a base Qwen2.5 model into a bilingual (Uzbek/English) teaching assistant with SFT, DPO and RLHF, using only free GPUs",
      "Raised accuracy on a held-out test from 22% to 65% with LoRA fine-tuning; 4-bit QLoRA came within 2 points at a fraction of the memory",
      "Found and fixed a length bias in DPO; the final model refuses every harmful or cheating request (8/8) and says \"I don't know\" when it should",
      "RLHF with reward models (PPO, RLOO) and multiple judges, with reward-hacking safeguards; 14 model versions compared on one benchmark",
      "Shipped as a live chat app in English and Uzbek, answering in about 2 to 3 seconds",
    ],
    metrics: [{ value: "22% → 65%", label: "held-out accuracy" }, { value: "14", label: "model versions benchmarked" }],
    deploy: { mode: "Hybrid", text: "Chat UI on Vercel; the model is served by a FastAPI backend on a Kaggle T4 GPU, exposed through a Cloudflare tunnel and started on demand." },
    stack: ["Python", "PyTorch", "Transformers", "PEFT", "LoRA/QLoRA", "DPO", "PPO / RLOO", "Kaggle", "FastAPI", "Vercel"],
    status: { state: "live", label: "LIVE · GPU BACKEND ON DEMAND" },
    links: {
      demo: "https://teach-help.vercel.app",
      github: "https://github.com/davronbek-malikov/Post_Training",
    },
  },
  {
    id: "portiq",
    n: "13",
    title: "Portiq",
    rarity: "legendary",
    cls: "Multi-Agent System · LangGraph · Kafka · A2A · pgvector",
    flavor: "Your door to the right job: 11 agents find jobs in Uzbekistan, Korea and worldwide, map your skill gaps and run company-specific mock interviews.",
    motif: "hub",
    group: "llm",
    stats: { PWR: 88, SCL: 90, AUT: 92, INT: 88, PLH: 84 },
    abilities: [
      "AI career platform for Uzbekistan, Korea and global markets: 11 specialized agents find jobs, explain skill gaps and run mock interviews",
      "Event-driven multi-agent architecture: a LangGraph orchestrator routes work to agents over Kafka and the A2A protocol",
      "Built-in quality control: a judge agent reviews every output and sends weak answers back before the user sees them",
      "Job pipeline from 4 sources with salary normalization, de-duplication and scam filtering; explainable match scores with pgvector",
      "Mock interviews in 4 languages scored on the STAR method, 30/60/90-day learning roadmaps, and distributed tracing with Jaeger; works with Claude, Gemini or local Ollama models",
    ],
    metrics: [{ value: "11", label: "specialized agents" }, { value: "4", label: "interview languages" }],
    deploy: { mode: "Hybrid", text: "Next.js frontend on Vercel (live preview); FastAPI agents, Kafka, PostgreSQL + pgvector, Redis and Jaeger run locally in Docker." },
    stack: ["LangGraph", "Kafka", "A2A", "FastAPI", "Postgres + pgvector", "Redis", "Next.js", "Docker", "Jaeger"],
    status: { state: "beta", label: "UI PREVIEW · BACKEND RUNS LOCALLY" },
    links: { demo: "https://portiq-gamma.vercel.app", demoLabel: "UI preview" },
  },
];

// ----------------------------------------------------------------------------
//  ML SHOWCASE: coming-soon placeholder cards for ML project categories.
//  Each card will link to its own repo once the project is ready.
// ----------------------------------------------------------------------------
export const mlProjects = [
  {
    id: "llm-from-scratch",
    n: "14",
    title: "LLM from Scratch",
    rarity: "legendary",
    cls: "Deep Learning · Transformer · PyTorch · Pretraining",
    flavor: "Every layer written by hand (attention, tokenizer, training loop) and made to pass four sanity checks before a single training step.",
    motif: "transformer",
    group: "dl",
    stats: { PWR: 82, SCL: 70, AUT: 60, INT: 92, PLH: 84 },
    abilities: [
      "GPT-style language model built from first principles in PyTorch: attention, tokenizer and the full training stack, with no high-level libraries",
      "Pretraining data pipeline: cleaning, filtering, MinHash near-duplicate removal and a custom BPE tokenizer",
      "Efficient training on limited GPUs: mixed precision, gradient accumulation, learning-rate scheduling and resumable checkpoints",
      "Engineering discipline: the model passes sanity checks before any training run, and is evaluated by perplexity",
    ],
    metrics: [{ value: "GPT-style", label: "model built from scratch" }, { value: "BPE", label: "own tokenizer and data pipeline" }],
    deploy: { mode: "Training", text: "Trained on Kaggle and Colab GPUs with resumable checkpoints; not deployed (pretraining in progress)." },
    stack: ["Python", "PyTorch", "Transformers (from scratch)", "BPE Tokenizer", "Hugging Face Datasets", "Kaggle / Colab GPU"],
    status: { state: "rnd", label: "PRETRAINING IN PROGRESS" },
    links: { github: "https://github.com/davronbek-malikov/LLM_Model" },
  },
  {
    id: "supervised-ml",
    n: "15",
    title: "Soccer Salary Predictor",
    rarity: "epic",
    cls: "Supervised ML · Regression · Sports Analytics",
    flavor: "Can xG predict a player's salary? Spoiler: yes, with SHAP to prove it.",
    motif: "ml",
    group: "supervised-ml",
    stats: { PWR: 85, SCL: 78, AUT: 70, INT: 90, PLH: 80 },
    extraStat: { label: "R² SCORE", value: 88 },
    abilities: [
      "Predicts football player salaries from performance data to support contract and recruitment decisions; published in an SCIE journal with a 17% accuracy gain",
      "Leakage-safe pipeline with 21 engineered features, moving from linear baselines to XGBoost and LightGBM to stacking and voting ensembles",
      "Hyperparameter optimization with Optuna; SHAP explains which factors drive each prediction",
      "Delivered as a live web app that anyone can try",
    ],
    metrics: [{ value: "+17%", label: "accuracy, published (SCIE)" }, { value: "21", label: "engineered features" }],
    deploy: { mode: "Cloud", text: "Gradio app on Render, monitored 24/7 with UptimeRobot." },
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "Optuna", "Gradio", "Render", "Scikit-learn"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-xg-salary-prediction.onrender.com",
      github: "https://github.com/davronbek-malikov/soccer-xG-salary_prediction",
    },
  },
  {
    id: "unsupervised-ml",
    n: "16",
    title: "TacticalDNA",
    rarity: "epic",
    cls: "Unsupervised ML · Clustering · Sports Analytics",
    flavor: "No name attached, just 25 goals and 15 assists, and the model matched it to prime Messi at 98% similarity.",
    motif: "ml",
    group: "unsupervised-ml",
    extraStat: { label: "TWIN MATCH", value: 98 },
    stats: { PWR: 82, SCL: 80, AUT: 65, INT: 92, PLH: 82 },
    abilities: [
      "Discovers player archetypes from 6,314 player-seasons across three European leagues, helping scouts find comparable players",
      "Compared four clustering algorithms on three validation metrics and documented the results honestly, including where DBSCAN fails on this data",
      "Similarity search finds each player's closest statistical twins: a blind stat line matched prime Messi at 98%",
      "Interactive app: classify any real or hypothetical player and explore radar charts and a PCA map",
    ],
    metrics: [{ value: "6,314", label: "player-seasons clustered" }, { value: "98%", label: "match to prime Messi" }],
    deploy: { mode: "Cloud", text: "Streamlit app on Render, monitored with UptimeRobot." },
    stack: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render", "UptimeRobot"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-player-clustering.onrender.com",
      github: "https://github.com/davronbek-malikov/tactical-dna",
    },
  },
  {
    id: "computer-vision",
    n: "17",
    title: "Computer Vision",
    rarity: "legendary",
    cls: "Object Detection · Image Classification",
    flavor: "Teaching machines to see what humans see.",
    motif: "ml",
    group: "cv",
    comingSoon: true,
    stats: { PWR: 85, SCL: 70, AUT: 60, INT: 90, PLH: 72 },
    abilities: [
      "Object detection with YOLO and real-time video inference with OpenCV",
      "Image classification with CNN and Transformer models, using transfer learning",
      "Dataset labeling and management with Roboflow",
    ],
    metrics: [{ value: "YOLO", label: "object detection" }, { value: "Real-time", label: "video inference" }],
    deploy: { mode: "Planned", text: "Coming soon." },
    stack: ["Python", "YOLO", "PyTorch", "Roboflow", "OpenCV"],
    status: { state: "rnd", label: "COMING SOON" },
    links: {},
  },
];

// ----------------------------------------------------------------------------
//  PRODUCT PROJECTS: full-stack AI products shipped solo (not ML/DS work,
//  but live, in-production apps with real AI features built in).
// ----------------------------------------------------------------------------
export const productProjects = [
  {
    id: "palov",
    n: "18",
    title: "Palov",
    rarity: "rare",
    cls: "Full-Stack · RAG · AI Chatbot",
    flavor: "Halal Uzbek food in Korean cities, with an AI chatbot that actually knows the menu.",
    motif: "module",
    group: "products",
    stats: { PWR: 70, SCL: 65, AUT: 55, INT: 75, PLH: 82 },
    abilities: [
      "Food-ordering platform connecting the Uzbek community in Korea with halal restaurants",
      "AI menu assistant (RAG over the live menu) answers questions and recommends dishes",
      "Phone sign-in for Korea and Uzbekistan with OTP verification, plus Telegram login",
      "Recommendations improve from user feedback and order history",
    ],
    metrics: [{ value: "RAG", label: "AI menu assistant" }, { value: "KR · UZ", label: "phone sign-in" }],
    deploy: { mode: "Cloud", text: "Next.js on Vercel with a hosted LLM API." },
    stack: ["Next.js", "RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://www.palov.app/" },
  },
  {
    id: "hamyon",
    n: "19",
    title: "Hamyon",
    rarity: "rare",
    cls: "Personal Finance · RAG · AI Insights",
    flavor: "\"Pulingiz nazoratda\": your money, under an AI's watch, not just a spreadsheet's.",
    motif: "quant",
    group: "products",
    stats: { PWR: 68, SCL: 62, AUT: 58, INT: 78, PLH: 80 },
    abilities: [
      "Personal finance app: expense tracking, budgets and spending analysis by category",
      "AI assistant answers questions about the user's own transactions in plain language (RAG)",
      "AI-generated budget insights that learn from user corrections",
    ],
    metrics: [{ value: "RAG", label: "finance assistant" }, { value: "AI", label: "budget insights" }],
    deploy: { mode: "Cloud", text: "Next.js on Vercel with a Supabase database and a hosted LLM API." },
    stack: ["Next.js", "Supabase", "RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://hamyon-six.vercel.app/" },
  },
  {
    id: "kotib",
    n: "20",
    title: "Kotib",
    rarity: "epic",
    cls: "AI Agent · Graph RAG · Conversational Memory",
    flavor: "A secretary that never forgets, and quietly gets better at guessing what you need next.",
    motif: "hub",
    group: "products",
    stats: { PWR: 74, SCL: 68, AUT: 72, INT: 82, PLH: 78 },
    abilities: [
      "AI personal secretary that manages tasks, reminders and notes through conversation",
      "Agent pipeline: intent detection, routing and action execution",
      "GraphRAG over the user's personal knowledge base, with long-term memory across sessions",
      "Proactive suggestions that adapt to which tasks get done or missed",
    ],
    metrics: [{ value: "GraphRAG", label: "personal knowledge base" }, { value: "Memory", label: "across sessions" }],
    deploy: { mode: "Cloud", text: "Next.js on Vercel with a hosted LLM API." },
    stack: ["Next.js", "Graph RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://kotib-rouge.vercel.app/" },
  },
];

// ----------------------------------------------------------------------------
//  PUBLICATIONS: shown on the homepage and the About page.
// ----------------------------------------------------------------------------
export const publications = [
  {
    title: "Predicting Soccer Player Salaries with Both Traditional and Automated Machine Learning Approaches",
    venue: "SCIE Journal · Applied Sciences",
    year: "2025",
    highlight: "17% increased prediction accuracy",
    role: "First author",
    link: "https://doi.org/10.3390/app15148108",
  },
  {
    title: "Beyond xG: A Dual Prediction Model for Analyzing Player Performance Through Expected and Actual Goals in European Soccer Leagues",
    venue: "SCIE Journal · Applied Sciences",
    year: "2024",
    highlight: "Up to 12% better performance with constructed features",
    role: "First author",
    link: "https://doi.org/10.3390/app142210390",
  },
  {
    title: "Comparative Evaluation of Machine Learning Models for Predicting Soccer Injury Types",
    venue: "KSCIE Journal",
    year: "2024",
    highlight: "Novel injury prediction model using constructed features",
    role: "First author",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003072688",
  },
  {
    title: "The Application of Machine Learning on the Injury Prediction of Soccer Players",
    venue: "ISE@APSEC · CEUR-WS",
    year: "2022",
    highlight: "Injury prediction without GPS technology",
    role: "First author",
    link: "https://ceur-ws.org/Vol-3362/ISE2022_short02_Malikov_Application.pdf",
  },
  {
    title: "On the construction and properties of lattice-group structure in Cartesian product spaces",
    venue: "Journal of Computer Science",
    year: "2020",
    highlight: "",
    role: "First author",
    link: "https://doi.org/10.3844/jcssp.2020.402.421",
  },
];

export const profile = {
  name: "Davronbek Malikov",
  title: "ML / LLM & RAG Engineer",
  roles: ["ML / LLM & RAG Engineer", "Ph.D. in AI Convergence Engineering"],
  tagline:
    "AI Engineer & Team Lead with a Ph.D. I build end-to-end machine learning systems: predictive models with supervised learning, gradient boosting and stacking ensembles, deep learning and computer vision, with leakage-safe validation, Optuna tuning and SHAP explainability, published in SCIE journals and deployed as live apps. On the LLM side, I lead on-premise multi-agent systems for enterprise clients: post-training (SFT, LoRA/QLoRA, DPO), compressing LLMs into small, quantized models that run on edge devices and small servers while keeping most of the original model's performance, and hybrid RAG and GraphRAG.",
  setName: "Ph.D.",
  links: {
    email: "mailto:davronbekmalikov96@gmail.com",
    github: "https://github.com/davronbek-malikov",
    linkedin: "https://www.linkedin.com/in/davronbek-malikov",
    cv: "/Davronbek_Malikov_CV.pdf?v=20261123", // same file as /cv.pdf (kept for old links); new name avoids stale browser caches
  },
};
