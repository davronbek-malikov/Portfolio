import AboutPage from "../../../components/AboutPage";

export const metadata = {
  title: "소개 | Davronbek Malikov",
  description: "ML / LLM & RAG 엔지니어 | AI융합공학 박사",
  alternates: { canonical: "/ko/about", languages: { en: "/about", ko: "/ko/about" } },
};

export default function AboutKo() {
  return <AboutPage lang="ko" />;
}
