import HomePage from "../components/HomePage";

export const metadata = {
  alternates: { canonical: "/", languages: { en: "/", ko: "/ko" } },
};

export default function Home() {
  return <HomePage lang="en" />;
}
