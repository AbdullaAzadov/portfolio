import NavBar from "@/components/NavBar";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-950 py-6 sm:px-6 md:px-28 md:py-16 lg:px-48 2xl:px-80">
      <NavBar />
    </main>
  );
}
