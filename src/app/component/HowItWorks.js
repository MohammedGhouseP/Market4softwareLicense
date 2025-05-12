const steps = [
  { title: 'Upload License', icon: '📤' },
  { title: 'Get Valuation', icon: '💰' },
  { title: 'Get Paid', icon: '🏦' },
];

export default function HowItWorks() {
  return (
    <section className="p-8 bg-gray-100 text-white dark:bg-gray-800">
      <h3 className="text-3xl text-center mb-6">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-around">
        {steps.map(s => (
          <div key={s.title} className="flex flex-col items-center p-4">
            <div className="text-5xl mb-2">{s.icon}</div>
            <p className="font-semibold">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}