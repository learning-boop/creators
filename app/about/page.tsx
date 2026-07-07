import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "About Us",
  "Learn about Creators Touch Global — our mission, team, and vision to redefine digital creativity through AI, design, and strategy.",
  "/about"
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* About page content coming soon */}
    </main>
  );
}
