"use client"
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        await new Promise(res => setTimeout(res, 1000));
        const dummy = [
          { name: 'Jane Doe', role: 'CTO', company: 'TechCorp', quote: 'Great service!' },
          { name: 'John Smith', role: 'IT Manager', company: 'SoftCo', quote: 'Fast and easy!' },
        ];
        setData(dummy);
      } catch {
        setError('Failed to load testimonials.');
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (loading) return <p className="text-center p-8">Loading testimonials...</p>;
  if (error) return <p className="text-center p-8 text-red-500">{error}</p>;

  return (
    <section className="p-8 bg-gray-100 text-white dark:bg-gray-800">
      <h3 className="text-3xl text-center mb-6">What Our Customers Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map(t => (
          <div key={t.name} className="p-4 border rounded bg-white dark:bg-gray-700">
            <p className="italic">"{t.quote}"</p>
            <p className="mt-2 font-semibold">{t.name}, {t.role} at {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}