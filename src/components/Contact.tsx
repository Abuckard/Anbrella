import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Ange ditt namn.";
    if (!email.trim()) {
      newErrors.email = "Ange din e-post.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ange en giltig e-postadress.";
    }
    if (!message.trim()) newErrors.message = "Ange ett meddelande.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const formData = { name, email, message };

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Något gick fel. Försök igen.");
      }
    } catch {
      alert("Ett oväntat fel uppstod.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center mt-20 w-full mx-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Kontakta oss</h2>
      {submitted ? (
        <p className="text-green-600 text-xl">Tack för ditt meddelande! Vi hör av oss snart.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="font-medium">Namn</label>
            <input
              type="text"
              className="p-3 border rounded-lg w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="font-medium">E-post</label>
            <input
              type="email"
              className="p-3 border rounded-lg w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="font-medium">Meddelande</label>
            <textarea
              className="p-3 border rounded-lg w-full"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 bg-blue-700 text-white py-3 rounded-lg transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800'
            }`}
          >
            {loading ? "Skickar..." : "Skicka"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
