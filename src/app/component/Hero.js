export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-gray-100 justify-center h-screen text-center p-8">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Resell Your Software Licenses Instantly
      </h2>
      <p className="text-lg md:text-2xl mb-6">
        Turn unused licenses into cash with SoftSell.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Get a Quote
      </button>
    </section>
  );
}