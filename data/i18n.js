// ============================================================================
//  TRANSLATIONS: English (default, "/") and Korean ("/ko").
//  `ui` holds interface text; the rest holds Korean versions of the career data.
//  Technical terms, project names and project card details stay in English.
// ============================================================================

export const LANGS = ["en", "ko"];

// Path prefix for each language: "" for English, "/ko" for Korean.
export const prefix = (lang) => (lang === "ko" ? "/ko" : "");

export const ui = {
  en: {
    htmlLang: "en",
    nav: { about: "About", skills: "Skills", ask: "Ask my AI", experience: "Experience", projects: "Projects", publications: "Publications", contact: "Contact" },
    heroMeta: "📍 Seoul, South Korea · E-7-1 work visa · in Korea since 2018",
    roles: ["ML / LLM & RAG Engineer", "Ph.D. in AI Convergence Engineering"],
    btn: { about: "About me →", cv: "Download CV", projects: "Projects ↓", ask: "Ask my AI" },
    stats: {
      phd: "AI Convergence Engineering",
      papers: "first-author papers (2 SCIE)",
      lead: "AI engineering at TripleH",
      projects: (n, live) => `AI projects (${live} live)`,
    },
    skills: {
      eyebrow: "Technical Skills",
      title: ["What I know, ", "and where I used it"],
      sub: "Two views of the same skills: a classic list, and a brain map where the left hemisphere holds LLM systems and the right holds machine learning, MLOps and backend. Every skill in the map links to the projects, papers or work where I used it. Click a group in the list to highlight it in the brain.",
    },
    ask: {
      eyebrow: "Ask my AI",
      title: ["Ask my AI ", "anything about me"],
      sub: "A small RAG assistant I built for this site: your question is matched against my CV and project data with BM25 retrieval, and only the relevant parts are sent to an open-weight LLM (gpt-oss-120b on Groq) to write a grounded answer.",
      note: "AI answers can contain mistakes. The CV is the source of truth.",
    },
    exp: { eyebrow: "Experience", title: ["Where I've ", "worked and studied"], more: "Full experience on the About page →" },
    llm: {
      eyebrow: "LLM & RAG Projects",
      title: ["LLM Systems ", "Agents, RAG & Post-Training"],
      sub: "Production-style LLM systems: a multi-agent learning platform with permission-aware RAG (ERA Academy), an AI scouting copilot with cited reports (Touchline), evidence-first football intelligence (TACTIQ), end-to-end post-training of an open-weight model that raised accuracy from 22% to 65% (TeachHelp), and an event-driven platform of 11 agents (Portiq).",
    },
    ml: {
      eyebrow: "ML & Deep Learning Projects",
      title: ["Machine Learning ", "& Deep Learning"],
      sub: "Predictive and deep learning work: a published salary model with a 17% accuracy gain (Soccer Salary Predictor, SCIE 2025), player archetype discovery with clustering (TacticalDNA), and a GPT-style Transformer built from scratch (LLM from Scratch). Computer vision is coming next.",
    },
    products: {
      eyebrow: "Product Projects",
      title: ["Full-Stack ", "AI Products"],
      sub: "Three live products, built solo end-to-end: Palov (food ordering with a RAG menu chatbot), Hamyon (finance tracking with AI-generated insights), and Kotib (an AI secretary with Graph RAG and persistent memory).",
    },
    cardsNote: "",
    pubs: {
      eyebrow: "Publications",
      title: ["Research ", "Publications"],
      sub: "Five first-author papers in SCIE journals, a KSCIE journal and an international conference, on machine learning for soccer analytics (salaries, performance, injuries) and mathematics for distributed systems.",
      role: "First author",
      read: "Read paper ↗",
    },
    footer: {
      title: "Let's build something together.",
      text: (name, title) => `${name}, ${title}. Open to LLM, RAG, Agentic AI, ML, Deep Learning and Computer Vision Engineer roles.`,
      email: "Email",
      publications: "Publications",
      note: (year, name) => `© ${year} ${name}. Built with Next.js · deployed on Vercel.`,
    },
    card: {
      category: { llm: "LLM system", dl: "Deep learning", "supervised-ml": "Machine learning", "unsupervised-ml": "Machine learning", cv: "Computer vision", products: "AI product" },
      deployment: "Deployment",
      mode: {},
      live: "Live",
      code: "Code",
      demoLabel: {},
      soon: "Coming Soon",
      soonSub: "Repository in progress",
    },
    brain: {
      head: "Explore my brain",
      headSub: "Select a skill to see the projects behind it",
      idleTitle: "Select a skill",
      idleText: "Skills are grouped by area. Lines connect skills used together in the same project. Select any skill to see the projects and work behind it.",
      statProjects: "projects",
      statLive: "live apps",
      statPapers: (n) => `papers (${n} SCIE)`,
      whereUsed: "Where I used it",
      usedWith: "Used together with",
      askSkill: "Ask my AI about this →",
      askSkillQ: (name) => `What has Davronbek done with ${name}?`,
      region: "Region",
      pickOne: (n) => `${n} skills, pick one`,
      askRegion: (label) => `Ask my AI about ${label} →`,
      askRegionQ: (label) => `Tell me about Davronbek's ${label} experience.`,
      hint: "Swipe sideways to see the whole brain →",
      groupTitle: "Highlight in the brain map",
    },
    chat: {
      empty: ["Ask anything about my experience, projects, skills or research.", "Answers come from my CV and project data."],
      suggestions: ["What are his strongest LLM projects?", "Has he done LLM post-training?", "What is his ML research about?", "Why should we hire him?"],
      placeholder: "e.g. What did he build with LangGraph?",
      send: "Ask",
      thinking: "Thinking…",
      empty_answer: "Sorry, I couldn't answer that. Please try rephrasing.",
      error: "I'm sorry, something went wrong. Please try again in a moment.",
      network: "I'm sorry, I couldn't reach my AI assistant. Please check your connection and try again.",
      label: "Your question",
    },
    about: {
      contact: "Contact",
      back: "← Back",
      eyebrow: "About me",
      labels: { experience: "Experience", education: "Education", publications: "Publications", projects: "Selected Projects", tools: "Tools & Frameworks", languages: "Languages" },
      live: "Live ↗",
      moreProjects: "See the full project cards →",
      ctaTitle: "Open to new opportunities",
      ctaSub: "ML / LLM & RAG Engineer | Ph.D.",
      ctaContact: "Get in touch",
    },
    switchTo: { label: "한국어", title: "한국어로 보기" },
    theme: { dark: "Dark mode", light: "Light mode" },
  },

  ko: {
    htmlLang: "ko",
    nav: { about: "소개", skills: "기술", ask: "AI에게 질문", experience: "경력", projects: "프로젝트", publications: "논문", contact: "연락처" },
    heroMeta: "📍 대한민국 서울 · E-7-1 취업 비자 · 2018년부터 한국 거주",
    roles: ["ML / LLM & RAG 엔지니어", "AI융합공학 박사"],
    btn: { about: "소개 보기 →", cv: "이력서 다운로드", projects: "프로젝트 ↓", ask: "AI에게 질문" },
    stats: {
      phd: "AI융합공학 박사",
      papers: "제1저자 논문 (SCIE 2편)",
      lead: "TripleH AI 엔지니어링 팀",
      projects: (n, live) => `AI 프로젝트 (서비스 중 ${live}개)`,
    },
    skills: {
      eyebrow: "기술 스택",
      title: ["보유 기술과 ", "실제 활용 사례"],
      sub: "같은 기술을 두 가지 방식으로 보여 드립니다. 하나는 일반적인 기술 목록이고, 다른 하나는 두뇌 지도입니다. 두뇌 지도의 왼쪽 반구에는 LLM 시스템이, 오른쪽 반구에는 머신러닝, MLOps, 백엔드가 있으며, 각 기술은 실제로 사용한 프로젝트, 논문 또는 업무와 연결되어 있습니다. 목록의 그룹을 클릭하면 두뇌 지도에서 해당 분야가 강조됩니다.",
    },
    ask: {
      eyebrow: "AI에게 질문",
      title: ["저에 대해 ", "무엇이든 물어보세요"],
      sub: "이 사이트를 위해 직접 만든 RAG 어시스턴트입니다. 질문을 BM25 검색으로 제 이력서와 프로젝트 데이터와 대조한 뒤, 관련된 내용만 오픈 웨이트 LLM(Groq의 gpt-oss-120b)에 전달해 근거 있는 답변을 생성합니다. 한국어로 질문하시면 한국어로 답변합니다.",
      note: "AI 답변에는 오류가 있을 수 있습니다. 정확한 정보는 이력서를 기준으로 해 주세요.",
    },
    exp: { eyebrow: "경력", title: ["일하고 ", "공부한 곳"], more: "소개 페이지에서 전체 경력 보기 →" },
    llm: {
      eyebrow: "LLM & RAG 프로젝트",
      title: ["LLM 시스템 ", "에이전트, RAG, 포스트 트레이닝"],
      sub: "실서비스 수준의 LLM 시스템: 권한 기반 RAG를 갖춘 멀티 에이전트 학습 플랫폼(ERA Academy), 출처가 인용된 리포트를 제공하는 AI 스카우팅 코파일럿(Touchline), 근거 중심의 축구 인텔리전스(TACTIQ), 오픈 웨이트 모델의 정확도를 22%에서 65%로 끌어올린 엔드투엔드 포스트 트레이닝(TeachHelp), 그리고 11개 에이전트로 구성된 이벤트 기반 플랫폼(Portiq).",
    },
    ml: {
      eyebrow: "ML & 딥러닝 프로젝트",
      title: ["머신러닝 ", "& 딥러닝"],
      sub: "예측 모델과 딥러닝: 정확도를 17% 개선해 SCIE 저널에 게재한 연봉 예측 모델(Soccer Salary Predictor, 2025), 클러스터링으로 선수 유형을 찾아내는 TacticalDNA, 그리고 처음부터 직접 구현한 GPT 스타일 Transformer(LLM from Scratch). 컴퓨터 비전 프로젝트는 준비 중입니다.",
    },
    products: {
      eyebrow: "프로덕트 프로젝트",
      title: ["풀스택 ", "AI 프로덕트"],
      sub: "혼자서 기획부터 배포까지 완성해 운영 중인 서비스 3개: Palov(RAG 메뉴 챗봇을 갖춘 음식 주문 플랫폼), Hamyon(AI 인사이트를 제공하는 가계부), Kotib(GraphRAG와 장기 기억을 갖춘 AI 비서).",
    },
    cardsNote: "※ 프로젝트 카드의 상세 설명은 영어로 제공됩니다.",
    pubs: {
      eyebrow: "논문",
      title: ["연구 ", "논문"],
      sub: "축구 데이터 분석을 위한 머신러닝(연봉, 경기력, 부상)과 분산 시스템을 위한 수학을 주제로 한 제1저자 논문 5편 (SCIE 2편, KSCIE 1편, 국제 학술대회 1편, 국제 저널 1편).",
      role: "제1저자",
      read: "논문 보기 ↗",
    },
    footer: {
      title: "함께 일할 기회를 찾고 있습니다.",
      text: (name) => `${name}, ML / LLM & RAG 엔지니어. LLM, RAG, AI 에이전트, 머신러닝, 딥러닝, 컴퓨터 비전 엔지니어 포지션에 관심이 있습니다.`,
      email: "이메일",
      publications: "논문",
      note: (year, name) => `© ${year} ${name}. Next.js로 제작하고 Vercel에 배포했습니다.`,
    },
    card: {
      category: { llm: "LLM 시스템", dl: "딥러닝", "supervised-ml": "머신러닝", "unsupervised-ml": "머신러닝", cv: "컴퓨터 비전", products: "AI 프로덕트" },
      deployment: "배포",
      mode: { Cloud: "클라우드", Hybrid: "하이브리드", Local: "로컬", "On-premise": "온프레미스", Training: "학습 환경", Planned: "예정" },
      live: "라이브",
      code: "코드",
      demoLabel: { "UI preview": "UI 미리보기" },
      soon: "출시 예정",
      soonSub: "저장소 준비 중",
    },
    brain: {
      head: "두뇌 지도 탐색",
      headSub: "기술을 선택하면 관련 프로젝트를 볼 수 있습니다",
      idleTitle: "기술을 선택하세요",
      idleText: "기술은 분야별로 묶여 있습니다. 선은 같은 프로젝트에서 함께 사용한 기술을 연결합니다. 기술을 선택하면 관련 프로젝트와 업무를 확인할 수 있습니다.",
      statProjects: "프로젝트",
      statLive: "서비스 중인 앱",
      statPapers: (n) => `논문 (SCIE ${n}편)`,
      whereUsed: "사용한 곳",
      usedWith: "함께 사용한 기술",
      askSkill: "AI에게 물어보기 →",
      askSkillQ: (name) => `Davronbek은 ${name}을(를) 어떻게 활용했나요?`,
      region: "분야",
      pickOne: (n) => `기술 ${n}개 중 하나를 선택하세요`,
      askRegion: (label) => `${label} 경험을 AI에게 묻기 →`,
      askRegionQ: (label) => `Davronbek의 ${label} 경험에 대해 알려 주세요.`,
      hint: "좌우로 밀어서 전체 지도를 확인하세요 →",
      groupTitle: "두뇌 지도에서 강조하기",
    },
    chat: {
      empty: ["제 경력, 프로젝트, 기술, 연구에 대해 무엇이든 물어보세요.", "답변은 이력서와 프로젝트 데이터를 바탕으로 합니다."],
      suggestions: ["가장 뛰어난 LLM 프로젝트는 무엇인가요?", "LLM 포스트 트레이닝 경험이 있나요?", "머신러닝 연구 분야는 무엇인가요?", "이 지원자를 채용해야 하는 이유는 무엇인가요?"],
      placeholder: "예: LangGraph로 무엇을 만들었나요?",
      send: "질문",
      thinking: "답변을 준비하고 있습니다…",
      empty_answer: "죄송합니다. 답변하지 못했습니다. 질문을 바꿔 다시 시도해 주세요.",
      error: "죄송합니다. 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      network: "죄송합니다. AI 어시스턴트에 연결할 수 없습니다. 인터넷 연결을 확인한 뒤 다시 시도해 주세요.",
      label: "질문 입력",
    },
    about: {
      contact: "연락처",
      back: "← 홈",
      eyebrow: "소개",
      labels: { experience: "경력", education: "학력", publications: "논문", projects: "주요 프로젝트", tools: "기술 스택", languages: "언어" },
      live: "라이브 ↗",
      moreProjects: "전체 프로젝트 카드 보기 →",
      ctaTitle: "새로운 기회를 찾고 있습니다",
      ctaSub: "ML / LLM & RAG 엔지니어 | 박사",
      ctaContact: "연락하기",
    },
    switchTo: { label: "EN", title: "View in English" },
    theme: { dark: "다크 모드", light: "라이트 모드" },
  },
};

// ---------------------------------------------------------------- page text

export const heroTitle = {
  en: { parts: ["I build ", "ML", ", ", "deep learning", " and ", "LLM systems", "", " from data to production."] },
  ko: { parts: ["", "ML", ", ", "딥러닝", ", ", "LLM 시스템", "을", " 데이터부터 프로덕션까지 구축합니다."] },
};

export const taglineKo =
  "박사 학위를 보유한 AI 엔지니어 겸 팀 리드입니다. 지도학습, 그래디언트 부스팅과 스태킹 앙상블, 딥러닝, 컴퓨터 비전을 활용한 예측 모델을 데이터 누수 방지 검증, Optuna 튜닝, SHAP 기반 설명까지 엔드투엔드로 구축하며, 그 결과를 SCIE 저널에 게재하고 실제 서비스로 배포했습니다. LLM 분야에서는 기업 고객을 위한 온프레미스 멀티 에이전트 시스템 개발을 이끌고 있습니다. 포스트 트레이닝(SFT, LoRA/QLoRA, DPO), 원래 성능을 최대한 유지하면서 엣지 디바이스와 소형 서버에서 구동되는 경량 양자화 모델(sLLM)로의 압축, 그리고 하이브리드 RAG, GraphRAG, 온톨로지 기반 지식 그래프(Neo4j)를 담당합니다.";

export const timelineKo = [
  {
    role: "AI 엔지니어 & 팀 리드",
    org: "TripleH, 서울",
    period: "2025.12 – 현재",
    text: "기업 고객을 위한 온프레미스 멀티 에이전트 LLM 시스템을 개발하는 팀을 이끌고 있습니다. 에이전트, RAG, 포스트 트레이닝, 소형 서버용 양자화 배포, LangSmith와 Arize Phoenix를 활용한 모니터링을 담당합니다.",
  },
  {
    role: "대학원 연구원",
    org: "경상국립대학교",
    period: "2018 – 2025",
    text: "축구 데이터 분석을 위한 머신러닝(연봉, 경기력, 부상 예측)과 분산 시스템을 위한 수학을 연구했습니다. 제1저자 논문 5편(SCIE 2편).",
  },
  {
    role: "AI 강사 (파트타임)",
    org: "온라인, 우즈베크어권 학생 대상",
    period: "2020 – 2025",
    text: "머신러닝, 딥러닝, 컴퓨터 비전, LLM 강의를 진행하고 학생들의 엔드투엔드 AI 프로젝트를 지도했습니다.",
  },
  {
    role: "AI융합공학 박사",
    org: "경상국립대학교",
    period: "2020 – 2025",
    text: "학위 논문: Advancements in Soccer Analytics: Players' Goals and Salary Prediction Models with Machine Learning. 정보학 석사(2018 – 2020), 수학 학사(2014 – 2018).",
  },
];

export const aboutSummary = {
  en: [
    "Ph.D. in AI Convergence Engineering and AI Engineer & Team Lead at TripleH, leading the design and development of on-premise multi-agent AI systems for enterprise clients: system architecture, LLM orchestration, RAG pipelines, agent workflows, and observability with LangGraph, LangSmith and Arize Phoenix.",
    "On the LLM side I post-train models with SFT, LoRA, QLoRA, DPO and RLHF on limited GPU, improving a Qwen2.5-1.5B model's accuracy on a held-out bilingual (Uzbek/English) teaching test from 22% to 65%. I compress models with 4-bit quantization (GGUF, AWQ, GPTQ) so they run on edge devices and small on-premise servers, and build enterprise knowledge systems with hybrid RAG, GraphRAG and ontology-based knowledge graphs (Neo4j).",
    "On the ML side I build end-to-end prediction models: feature engineering, leakage-safe validation, XGBoost, LightGBM, stacking ensembles, Optuna tuning and SHAP explainability. Author of 5 first-author papers, including 2 in SCIE journals, with published models improving prediction accuracy by up to 17% and deployed as live apps.",
  ],
  ko: [
    "AI융합공학 박사이자 TripleH의 AI 엔지니어 겸 팀 리드로서, 기업 고객을 위한 온프레미스 멀티 에이전트 AI 시스템의 설계와 개발을 이끌고 있습니다. 시스템 아키텍처, LLM 오케스트레이션, RAG 파이프라인, 에이전트 워크플로, 그리고 LangGraph, LangSmith, Arize Phoenix를 활용한 모니터링을 담당합니다.",
    "LLM 분야에서는 제한된 GPU 환경에서 SFT, LoRA, QLoRA, DPO, RLHF로 모델을 포스트 트레이닝하여, Qwen2.5-1.5B 모델의 이중 언어(우즈베크어/영어) 교육용 테스트 정확도를 22%에서 65%로 향상시켰습니다. 4비트 양자화(GGUF, AWQ, GPTQ)로 모델을 경량화해 엣지 디바이스와 소형 온프레미스 서버에서 구동하고, 하이브리드 RAG, GraphRAG, 온톨로지 기반 지식 그래프(Neo4j)로 기업용 지식 시스템을 구축합니다.",
    "머신러닝 분야에서는 피처 엔지니어링, 데이터 누수 방지 검증, XGBoost, LightGBM, 스태킹 앙상블, Optuna 튜닝, SHAP 기반 설명까지 예측 모델을 엔드투엔드로 구축합니다. 제1저자 논문 5편(SCIE 2편)을 발표했으며, 게재된 모델은 예측 정확도를 최대 17% 개선했고 실제 서비스로 배포되었습니다.",
  ],
};

export const experienceKo = [
  {
    role: "AI 엔지니어 & 팀 리드",
    org: "TripleH",
    period: "2025.12 – 현재",
    bullets: [
      "자율 에이전트 시스템과 기업용 AI 제품을 개발하는 AI 엔지니어링 팀을 이끌고 있습니다.",
      "기업 고객을 위한 실서비스 수준의 AI 에이전트를 설계하고 출시합니다: 멀티 에이전트 오케스트레이션, 법률 리서치, 회의 인텔리전스, 직원별 AI 어시스턴트.",
      "연구와 프로토타이핑부터 클라우드 및 온프레미스 인프라 배포까지 전 과정을 주도합니다.",
    ],
  },
  {
    role: "AI 강사 (파트타임)",
    org: "온라인 및 개인 지도",
    period: "2020 – 2025",
    bullets: [
      "머신러닝, 딥러닝, 컴퓨터 비전, LLM 심화 강의를 설계하고 진행했습니다.",
      "학생과 현업 종사자들이 엔드투엔드 AI 시스템을 구축하도록 멘토링했습니다.",
      "산업과 학계에서의 실용적인 AI 활용에 초점을 맞췄습니다.",
    ],
  },
  {
    role: "대학원 연구원",
    org: "빅데이터 시스템 소프트웨어 연구실, 경상국립대학교",
    period: "2022 – 2025",
    bullets: [
      "축구 데이터 분석을 위한 머신러닝: 전통적 ML과 AutoML을 활용한 연봉 예측, 기대 득점/실제 득점 이중 예측 모델, 부상 유형 예측.",
      "제1저자 논문 4편 게재 (SCIE 2편, KSCIE 1편, 국제 학술대회 1편).",
    ],
  },
  {
    role: "대학원 연구원",
    org: "분산 시스템 연구실, 경상국립대학교",
    period: "2018 – 2021",
    bullets: [
      "고급 수학 개념을 분산 시스템에 적용했습니다.",
      "데카르트 곱 공간의 격자군 구조에 관한 논문을 발표했습니다.",
    ],
  },
  {
    role: "수학 강사",
    org: "대학 입시, SAT 및 국제 수학 시험 대비 · 우즈베키스탄 페르가나",
    period: "2014 – 2017",
    bullets: [
      "대학 입시, SAT 및 국제 수학 시험 대비 고급 수학과 분석적 사고를 지도했습니다.",
      "학생들의 문제 해결력과 논리적 사고력을 키우는 맞춤형 교재를 개발했습니다.",
    ],
  },
];

export const educationKo = [
  {
    degree: "AI융합공학 박사",
    school: "경상국립대학교, 대한민국",
    period: "2020 – 2025",
    note: "학위 논문: Advancements in Soccer Analytics: Players' Goals and Salary Prediction Models with Machine Learning",
  },
  { degree: "정보학 석사", school: "경상국립대학교, 대한민국", period: "2018 – 2020" },
  { degree: "수학 학사", school: "페르가나 국립대학교, 우즈베키스탄", period: "2014 – 2018" },
];

export const languagesByLang = {
  en: [
    { lang: "English", level: "Fluent", pct: 90 },
    { lang: "Uzbek", level: "Native", pct: 100 },
    { lang: "Turkish", level: "Advanced", pct: 80 },
    { lang: "Russian", level: "Intermediate", pct: 60 },
    { lang: "Korean", level: "Conversational", pct: 40 },
  ],
  ko: [
    { lang: "영어", level: "유창", pct: 90 },
    { lang: "우즈베크어", level: "모국어", pct: 100 },
    { lang: "터키어", level: "고급", pct: 80 },
    { lang: "러시아어", level: "중급", pct: 60 },
    { lang: "한국어", level: "일상 회화", pct: 40 },
  ],
};
