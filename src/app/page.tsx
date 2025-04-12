import Hero from "@/components/home/hero";
import KeyPoints from "@/components/home/keyPoints";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <KeyPoints />
      <div className="h-screen"></div>
    </main>
  );
}
