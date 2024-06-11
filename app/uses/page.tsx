import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Uses() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1>Hello, About!</h1>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
