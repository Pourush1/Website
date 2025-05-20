import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold underline">Hello World</h1>
        <Hero />
      </div>
    </main>
  );
}
