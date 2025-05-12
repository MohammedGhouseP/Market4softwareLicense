const features = [
  { icon: '🔒', title: 'Secure', desc: 'We protect your data.' },
  { icon: '⚡', title: 'Fast', desc: 'Instant valuations.' },
  { icon: '💳', title: 'Competitive', desc: 'Best market rates.' },
  { icon: '🤝', title: 'Trusted', desc: '1000+ happy customers.' },
];

export default function WhyChooseUs() {
  return (
    <section className="p-8">
      <h3 className="text-3xl text-center mb-6">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map(f => (
          <div key={f.title} className="flex flex-col items-center p-4 border rounded">
            <div className="text-4xl mb-2">{f.icon}</div>
            <h4 className="font-semibold mb-1">{f.title}</h4>
            <p className="text-center text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}