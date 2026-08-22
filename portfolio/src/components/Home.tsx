import Navigation from "./Navigation";

export default function Home() {
  return (
    <div className="min-h-screen max-h-auto bg-gray-950">
      <Navigation />
      <div className="flex items-center justify-center h-screen flex-col">
        <div>
          <h3 className="text-white text-3xl">Hello, I'm</h3>
          <h1 className="text-white text-9xl font-bold">Hairum Qureshi</h1>
          <div className="w-full border border-sky-600 shadow-[0_0_10px_#34d399,0_0_20px_#10b981] my-3 bg-linear-to-r transition duration-1000 group-hover:duration-200" />{" "}
        </div>
      </div>
    </div>
  );
}
