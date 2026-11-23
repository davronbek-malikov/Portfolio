import HomePage from "../../components/HomePage";
import { taglineKo } from "../../data/i18n";

export const metadata = {
  title: "Davronbek Malikov | ML / LLM & RAG 엔지니어 | 박사",
  description: taglineKo,
  alternates: { canonical: "/ko", languages: { en: "/", ko: "/ko" } },
  openGraph: { title: "Davronbek Malikov | ML / LLM & RAG 엔지니어 | 박사", description: taglineKo, locale: "ko_KR", type: "website" },
};

export default function HomeKo() {
  return <HomePage lang="ko" />;
}
