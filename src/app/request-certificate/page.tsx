'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RequestCertificatePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    studentId: '',
    type: 'Good Moral Certificate',
    purpose: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Request submitted successfully!');
        router.push('/');
      } else {
        alert('Failed to submit request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6 text-black"
      >
        <h1 className="text-2xl font-bold text-center text-blue-900">
          Certificate Request Form
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          className="w-full p-3 border rounded-lg"
          value={form.studentId}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          className="w-full p-3 border rounded-lg"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option>Good Moral Certificate</option>
          <option>Certificate of Enrollment</option>
          <option>Certificate of Graduation</option>
          <option>Certificate of Registration</option>
          <option>Certificate of Grades</option>
          <option>Other</option>
        </select>

        <textarea
          name="purpose"
          placeholder="Purpose of the request"
          className="w-full p-3 border rounded-lg"
          value={form.purpose}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-800 text-white w-full py-3 rounded-lg hover:bg-blue-900 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
