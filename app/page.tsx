import Aside from "@/components/Aside";

export default function Home() {
  return (
    <main className="grid grid-cols-6 min-h-screen">
      <Aside />
      <section className="col-start-2 col-span-5"></section>
    </main>
  );
}
