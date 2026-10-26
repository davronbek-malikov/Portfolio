// ============================================================================
//  PROJECTS DATA  â€”  single source of truth for the whole portfolio.
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
//    stats     { PWR, SCL, AUT, INT, PLH }  each 0â€“100
//    extraStat optional { label, value } shown as a 6th highlighted meter
//    abilities array of strings (bullet points)
//    stack     array of tech chips
//    status    { state: "live"|"beta"|"rnd"|"proven", label }
//    links     { demo, github }  (either may be omitted)
//    group     used for the future "category" filter ("agent","platform","rnd","ml")
// ============================================================================

export const RARITY_ORDER = ["mythic", "legendary", "epic", "rare", "common"];

// ----------------------------------------------------------------------------
//  LLM & RAG PROJECTS  â€”  LLM systems: agents, retrieval, post-training, evaluation.
//  Rendered first on the homepage.
// ----------------------------------------------------------------------------
export const llmProjects = [
  {
    id: "touchline",
    n: "09",
    title: "Touchline",
    rarity: "mythic",
    cls: "AI Scouting Copilot Â· Agentic RAG Â· LangGraph Â· LangSmith",
    flavor: "Describe the player you need. Get a ranked shortlist and a cited report â€” the AI never makes a number up.",
    motif: "pitch",
    group: "llm",
    stats: { PWR: 90, SCL: 84, AUT: 88, INT: 94, PLH: 86 },
    abilities: [
      "Plain-language scouting briefs â†’ Claude fills typed tool forms; Python builds the query â€” the model never writes SQL",
      "LangGraph agent with 7 strict tools (search, profile, similar, compare, notes, shortlist) and an 8-round cap",
      "Human-in-the-loop: pauses with a shortlist via interrupt(), resumes from a checkpoint â€” even after a restart",
      "Cited scouting reports: every style claim links to its source passage (Claude citations over Qdrant hybrid search)",
      "Warehouse of 50,149 players (Transfermarkt) + 297 StatsBomb matches â†’ 18 per-90 metrics for 594 players",
      "120-question golden set in LangSmith: filter accuracy, precision/recall@10, numeric grounding, invented-player check",
      "102 automated tests Â· ChatGPT-style Next.js app with voice, file uploads, folders and a model picker",
    ],
    stack: ["Claude API", "LangGraph", "LangSmith", "Qdrant", "DuckDB", "FastAPI", "Next.js", "Postgres"],
    status: { state: "beta", label: "IN DEVELOPMENT" },
    links: { github: "https://github.com/davronbek-malikov/touchline" },
  },
  {
    id: "llm-engineering",
    n: "10",
    title: "TeachHelp",
    rarity: "mythic",
    cls: "Post-Training Â· SFT Â· DPO Â· RLHF (PPO / RLOO) Â· Uzbekâ€“English",
    flavor: "From a base model that only continues text to a teaching assistant â€” SFT, DPO and RLHF, every stage measured on the same 68 questions.",
    motif: "forge",
    group: "llm",
    stats: { PWR: 88, SCL: 68, AUT: 64, INT: 96, PLH: 86 },
    abilities: [
      "Full post-training journey on Qwen2.5: base â†’ SFT â†’ DPO â†’ RLHF â†’ deployment, 14 models on one 68-question held-out test",
      "SFT: Qwen2.5-1.5B 15/68 â†’ 44/68; LoRA vs QLoRA under identical settings (4-bit cost only 2 points)",
      "DPO from scratch: v1 learned \"shorter is better\" (40/68); v2 with length-balanced pairs and an SFT term â†’ 44/68, the final model",
      "Classic RLHF (InstructGPT recipe): reward model + PPO, then RLOO, with 4 judges incl. Skywork-Reward-V2 and Gemini as a live judge",
      "Reward-hacking checks: a rule score the policy never sees and a length-bias gate â€” RLHF reached 39â€“41/68, only as good as its judge",
      "Spec-first: MODEL_SPEC.md defines behaviour; DPO v2 refuses all harmful and cheating requests (8/8), \"Bilmayman\" 5/5",
      "TeachHelp: Claude-style chat in English and Uzbek on Vercel, Kaggle GPU backend over a Cloudflare tunnel (~2â€“3 s per answer)",
    ],
    stack: ["Python", "PyTorch", "Transformers", "PEFT", "LoRA/QLoRA", "DPO", "PPO / RLOO", "Kaggle", "FastAPI", "Vercel"],
    status: { state: "live", label: "LIVE Â· GPU BACKEND ON DEMAND" },
    links: {
      demo: "https://teach-help.vercel.app",
      github: "https://github.com/davronbek-malikov/Post_Training",
    },
  },
  {
    id: "portiq",
    n: "11",
    title: "Portiq",
    rarity: "legendary",
    cls: "Multi-Agent System Â· LangGraph Â· Kafka Â· A2A Â· pgvector",
    flavor: "Your door to the right job: 11 agents find jobs in Uzbekistan, Korea and worldwide, map your skill gaps and run company-specific mock interviews.",
    motif: "hub",
    group: "llm",
    stats: { PWR: 88, SCL: 90, AUT: 92, INT: 88, PLH: 84 },
    abilities: [
      "LangGraph orchestrator plans each conversation: language â†’ mode â†’ country â†’ asks only for what's missing â†’ routes the work",
      "11 agents over Kafka topics and A2A (Agent Cards + JSON-RPC): profile, match, company research, interviewer, roadmap, judgeâ€¦",
      "Judge agent checks every output and sends weak work back for a retry before the user sees it",
      "Job pipeline: Remotive, Saramin, hh.uz and Telegram channels â†’ normaliser (so'm / â‚© / $ salaries, dedup) â†’ scam filter â†’ Postgres + pgvector",
      "Explainable match %: skills you have and miss, salary and visa fit; CV parsing from PDF, DOCX and TXT",
      "Mock interviews: 11 rounds (intro â€¦ stress â€¦ salary â€¦ reverse) in Uzbek, Russian, Korean and English, scored on a STAR rubric",
      "30/60/90-day skill-gap roadmap with free official resources; company briefs from Wikipedia + Google News, every line sourced",
      "Claude, Gemini or Ollama â€” with deterministic fallbacks; Jaeger tracing across agents, unit tests, end-to-end script and evals",
    ],
    stack: ["LangGraph", "Kafka", "A2A", "FastAPI", "Postgres + pgvector", "Redis", "Next.js", "Docker", "Jaeger"],
    status: { state: "live", label: "LIVE PREVIEW Â· BACKEND LOCAL" },
    links: { demo: "https://portiq-gamma.vercel.app" },
  },
];

// ----------------------------------------------------------------------------
//  ML SHOWCASE  â€”  coming-soon placeholder cards for ML project categories.
//  Each card will link to its own repo once the project is ready.
// ----------------------------------------------------------------------------
export const mlProjects = [
  {
    id: "supervised-ml",
    n: "12",
    title: "Soccer Salary Predictor",
    rarity: "epic",
    cls: "Supervised ML Â· Regression Â· Sports Analytics",
    flavor: "Can xG predict a player's salary? Spoiler: yes â€” with SHAP to prove it.",
    motif: "ml",
    group: "supervised-ml",
    stats: { PWR: 85, SCL: 78, AUT: 70, INT: 90, PLH: 80 },
    extraStat: { label: "RÂ² SCORE", value: 88 },
    abilities: [
      "Zero data leakage: split first, fit preprocessor on train only, no target imputation",
      "Baseline (Linear/Ridge/Lasso/DT) â†’ Improved (RF/XGBoost/LightGBM/GB) â†’ Ensemble (Stacking + Voting)",
      "21 engineered features: xG/game, efficiency index, contribution index â€” target never touched",
      "Optuna Bayesian tuning (60 trials, TPE sampler) on XGBoost",
      "SHAP global beeswarm + local waterfall â€” proves which features drive salary",
      "Live Gradio demo deployed on Render, kept alive 24/7 via UptimeRobot",
      "Linked to SCIE publication â€” 17% accuracy improvement over baseline",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "Optuna", "Gradio", "Render", "Scikit-learn"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-xg-salary-prediction.onrender.com",
      github: "https://github.com/davronbek-malikov/soccer-xG-salary_prediction",
    },
  },
  {
    id: "unsupervised-ml",
    n: "13",
    title: "TacticalDNA",
    rarity: "epic",
    cls: "Unsupervised ML Â· Clustering Â· Sports Analytics",
    flavor: "No name attached, just 25 goals and 15 assists â€” the model matched it to prime Messi at 98% similarity.",
    motif: "ml",
    group: "unsupervised-ml",
    extraStat: { label: "TWIN MATCH", value: 98 },
    stats: { PWR: 82, SCL: 80, AUT: 65, INT: 92, PLH: 82 },
    abilities: [
      "6,314 qualified player-seasons (â‰¥900 min) across Bundesliga, La Liga, Serie A â€” zero salary/target leakage",
      "Algorithm bake-off: KMeans beats Agglomerative, DBSCAN, and Gaussian Mixture on Silhouette, Davies-Bouldin & Calinski-Harabasz",
      "DBSCAN empirically collapses to one cluster â€” documented as a real density finding, not hidden",
      "Rule-based archetype naming from centroids: Elite Complete Forward, Clinical Poacher, Deep-Lying Playmaker & more",
      "Cosine-similarity engine finds each player's closest statistical twins within their own archetype",
      "Interactive Streamlit demo: classify any real or hypothetical player, see radar chart + PCA map",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Render", "UptimeRobot"],
    status: { state: "live", label: "LIVE DEMO" },
    links: {
      demo: "https://soccer-player-clustering.onrender.com",
      github: "https://github.com/davronbek-malikov/tactical-dna",
    },
  },
  {
    id: "computer-vision",
    n: "14",
    title: "Computer Vision",
    rarity: "legendary",
    cls: "Object Detection Â· Image Classification",
    flavor: "Teaching machines to see what humans see.",
    motif: "ml",
    group: "cv",
    comingSoon: true,
    stats: { PWR: 85, SCL: 70, AUT: 60, INT: 90, PLH: 72 },
    abilities: [
      "Object detection with YOLO (v8/v11) â€” real-time inference",
      "Image classification with CNN and transformer architectures",
      "Custom dataset annotation and management via Roboflow",
      "Transfer learning on domain-specific image datasets",
      "Real-time video processing pipeline with OpenCV",
    ],
    stack: ["Python", "YOLO", "PyTorch", "Roboflow", "OpenCV"],
    status: { state: "rnd", label: "COMING SOON" },
    links: {},
  },
];

// ----------------------------------------------------------------------------
//  PRODUCT PROJECTS  â€”  full-stack AI products shipped solo (not ML/DS work,
//  but live, in-production apps with real AI features built in).
// ----------------------------------------------------------------------------
export const productProjects = [
  {
    id: "palov",
    n: "15",
    title: "Palov",
    rarity: "rare",
    cls: "Full-Stack Â· RAG Â· AI Chatbot",
    flavor: "Halal Uzbek food, in Korean cities â€” with an AI chatbot that actually knows the menu.",
    motif: "module",
    group: "products",
    stats: { PWR: 70, SCL: 65, AUT: 55, INT: 75, PLH: 82 },
    abilities: [
      "Multi-country phone auth (+82 KR / +998 UZ) with OTP verification and Telegram OAuth",
      "RAG system over the menu database â€” chatbot answers dish queries with real-time recommendations",
      "Self-improvement loop: user feedback and order patterns continuously refine suggestions",
      "Full-stack food ordering platform connecting the Uzbek community in South Korea to halal cuisine",
    ],
    stack: ["Next.js", "RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://www.palov.app/" },
  },
  {
    id: "hamyon",
    n: "16",
    title: "Hamyon",
    rarity: "rare",
    cls: "Personal Finance Â· RAG Â· AI Insights",
    flavor: "\"Pulingiz nazoratda\" â€” your money, under an AI's watch, not just a spreadsheet's.",
    motif: "quant",
    group: "products",
    stats: { PWR: 68, SCL: 62, AUT: 58, INT: 78, PLH: 80 },
    abilities: [
      "Real-time expense tracking, budget monitoring, category-based spending analysis",
      "RAG-powered AI chatbot over transaction history â€” natural-language finance queries",
      "Self-improvement loop: learns from user corrections to refine categorisation & advice",
      "AI-generated budget insights, not just static charts",
    ],
    stack: ["Next.js", "Supabase", "RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://hamyon-six.vercel.app/" },
  },
  {
    id: "kotib",
    n: "17",
    title: "Kotib",
    rarity: "epic",
    cls: "AI Agent Â· Graph RAG Â· Conversational Memory",
    flavor: "A secretary that never forgets â€” and quietly gets better at guessing what you need next.",
    motif: "hub",
    group: "products",
    stats: { PWR: 74, SCL: 68, AUT: 72, INT: 82, PLH: 78 },
    abilities: [
      "Multi-step agent pipeline: intent classification â†’ action routing â†’ task/reminder/note execution",
      "Graph RAG over the user's personal knowledge base for deep contextual understanding",
      "Persistent conversational memory maintaining full context across all sessions",
      "Self-improvement: tracks completed vs. missed tasks, adjusts proactive suggestions autonomously",
    ],
    stack: ["Next.js", "Graph RAG", "LLM API", "Vercel"],
    status: { state: "live", label: "LIVE" },
    links: { demo: "https://kotib-rouge.vercel.app/" },
  },
];

// ----------------------------------------------------------------------------
//  PUBLICATIONS  â€”  shown on the homepage and the About page.
// ----------------------------------------------------------------------------
export const publications = [
  {
    title: "Predicting Soccer Player Salaries with Both Traditional and Automated Machine Learning Approaches",
    venue: "SCIE Journal Â· Applied Sciences",
    year: "2025",
    highlight: "17% increased prediction accuracy",
    role: "First author",
    link: "https://doi.org/10.3390/app15148108",
  },
  {
    title: "Beyond xG: A Dual Prediction Model for Analyzing Player Performance Through Expected and Actual Goals in European Soccer Leagues",
    venue: "SCIE Journal Â· Applied Sciences",
    year: "2024",
    highlight: "12% improvement on player performance prediction",
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
    venue: "ISE@APSEC Â· CEUR-WS",
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
  title: "PhD in AI Engineering",
  roles: ["LLM Engineer", "RAG Engineer", "Agentic AI Engineer", "ML Engineer"],
  tagline:
    "LLM, RAG, Agentic AI and ML engineer. I fine-tune and serve models, build retrieval pipelines and multi-agent systems, and ship them to production â€” from a single reusable chatbot core to self-hosted enterprise deployments.",
  setName: "Agent Constellation",
  links: {
    email: "mailto:davronbekmalikov96@gmail.com",
    github: "https://github.com/davronbek-malikov",
    linkedin: "https://www.linkedin.com/in/davronbek-malikov",
    cv: "/Davronbek_Malikov_CV.pdf?v=20261026", // same file as /cv.pdf (kept for old links); new name avoids stale browser caches
  },
};
