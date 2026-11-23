import AboutPage from "../../components/AboutPage";

export const metadata = {
  title: "About | Davronbek Malikov",
  description: "ML / LLM & RAG Engineer | Ph.D. in AI Convergence Engineering.",
  alternates: { canonical: "/about", languages: { en: "/about", ko: "/ko/about" } },
};

export default function About() {
  return <AboutPage lang="en" />;
}
