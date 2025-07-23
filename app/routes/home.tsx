import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAi" },
    { name: "description", content: "Your personal AI for resume polishing." },
  ];
}

export default function Home() {
  return <main className="bg-[url(/images/bg-main.svg)] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review you submissions and check AI-powered feedback</h2>
      </div>
    </section>
  </main>;
}
