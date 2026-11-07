import Shutter from "@/components/Shutter";
import Nav from "@/components/Nav";
import StickyBar from "@/components/StickyBar";
import AskAI from "@/components/AskAI";
import Feedback from "@/components/Feedback";
import { Hero, Sapna, Templates, Services, Process, Projects, EasyDevOps, About, Certificates, Contact } from "@/components/Sections";

// Section order badalna ho to bas yahan lines upar-neeche karo.
export default function Home() {
  return (
    <>
      <Shutter />
      <Nav />
      <main>
        <Hero />
        <Sapna />
        <Templates />
        <Services />
        <Process />
        <Projects />
        <EasyDevOps />
        <About />
        <Certificates />
        <AskAI />
        <Feedback />
        <Contact />
      </main>
      <StickyBar />
    </>
  );
}
