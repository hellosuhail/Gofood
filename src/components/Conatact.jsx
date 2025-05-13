import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate network delay
      console.log('Sending data to server:', form);

      // Simulate success response
      setResponseMessage(' Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage(' Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        {responseMessage && (
          <div
            className={`text-center mb-4 font-medium ${
              responseMessage.startsWith('') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
