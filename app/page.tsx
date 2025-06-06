import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[{ name: "About", link: "#about" }]} /> */}
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
