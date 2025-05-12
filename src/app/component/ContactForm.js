"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = 'Valid email required';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    console.log('Form Data:', form);
    alert('Submitted!');
  };

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section className="p-8">
      <h3 className="text-3xl text-center mb-6">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 gap-4">
        {['name', 'email', 'company'].map(f => (
          <div key={f}>
            <input
              type={f === 'email' ? 'email' : 'text'}
              name={f}
              value={form[f]}
              onChange={handleChange}
              placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
              className="w-full p-2 border rounded"
            />
            {errors[f] && <p className="text-red-500 text-sm">{errors[f]}</p>}
          </div>
        ))}
        <select name="license" value={form.license} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">License Type</option>
          <option>Windows</option>
          <option>Office</option>
          <option>Adobe</option>
        </select>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}