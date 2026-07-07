import { generatePageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/home/Hero";

export const metadata = generatePageMetadata(
  "AI, Web Development & Digital Marketing Agency",
  "Creators Touch Global — a next-generation agency delivering AI solutions, web development, and digital marketing that transforms brands and drives growth.",
  "/"
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
    </main>
  );
}
