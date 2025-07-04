// import React, { useState } from 'react';

// const Contact: React.FC = () => {
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = (e: React.FormEvent<HTMLFormElement>) => {
//     const form = e.currentTarget;
//     const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
//     const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
//     const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

//     const newErrors: { [key: string]: string } = {};
//     if (!name) newErrors.name = "Ange ditt namn.";
//     if (!email) {
//       newErrors.email = "Ange din e-post.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Ange en giltig e-postadress.";
//     }
//     if (!message) newErrors.message = "Ange ett meddelande.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     if (!validate(e)) {
//       e.preventDefault(); // Stoppa submit om validering failar
//     } else {
//       setSubmitted(true);
//     }
//   };

//   return (
//     <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center mt-20 w-full mx-4">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6">Kontakta oss</h2>
//       {submitted ? (
//         <p className="text-green-600 text-xl">Tack för ditt meddelande! Vi hör av oss snart.</p>
//       ) : (
//         <form 
//           action="https://formsubmit.co/alexander.buckard@gmail.com" 
//           method="POST" 
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-4 text-left"
//         >
//           <div>
//             <label className="font-medium">Namn</label>
//             <input type="text" name="name" className="p-3 border rounded-lg w-full" required />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="font-medium">E-post</label>
//             <input type="email" name="email" className="p-3 border rounded-lg w-full" required />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="font-medium">Meddelande</label>
//             <textarea name="message" className="p-3 border rounded-lg w-full" rows={5} required />
//             {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//           </div>

//           <button type="submit" className="mt-4 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
//             Skicka
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center mt-20 w-full mx-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Kontakta oss</h2>

      {!submitted ? (
        <form
          action="https://formsubmit.co/6b95acc144e7b40e3729ebc0fdbcaf12"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          <div>
            <label className="font-medium">Namn</label>
            <input type="text" name="name" className="p-3 border rounded-lg w-full" required />
          </div>

          <div>
            <label className="font-medium">E-post</label>
            <input type="email" name="email" className="p-3 border rounded-lg w-full" required />
          </div>

          <div>
            <label className="font-medium">Meddelande</label>
            <textarea name="message" className="p-3 border rounded-lg w-full" rows={5} required />
          </div>

          {/* Dold redirect för att undvika Formsubmits egna sida */}
          <input type="hidden" name="_next" value={window.location.href} />

          <button type="submit" className="mt-4 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
            Skicka
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-green-600 text-2xl font-semibold mb-4">Tack för ditt meddelande!</p>
          <p className="text-gray-600">Vi hör av oss så snart vi kan.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
