import { useState } from 'react';
import '../styles/index.css';
import { supabase } from '../../lib/supabase';

export default function Beta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    interest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, affiliation, interest } = formData;

  try {
    // Check for duplicate email first
    const { data: existing, error: selectError } = await supabase
      .from('beta-testers')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (selectError) throw selectError;

    if (existing) {
      setMessage('You’ve already signed up! 🎉');
      setSubmitted(true);
      return;
    }

    const { error: insertError } = await supabase.from('beta-testers').insert([
      { name, email, affiliation, interest },
    ]);

    if (insertError) throw insertError;

    setMessage('Thanks for signing up! You’re now on the list ✅');
    setSubmitted(true);
  } catch (error) {
    console.error('Supabase error:', error.message);
    alert('There was an error submitting your form. Please try again.');
  }
};

  return (
    <div className="min-h-screen px-6 py-16 bg-primaryBackground text-primaryText">
      <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg">

        {submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">{message}</h2>
            <button
              className="mt-4 inline-block bg-primary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-primary/90 transition duration-200"
              onClick={() => {
                setFormData({ name: '', email: '', affiliation: '', interest: '' });
                setSubmitted(false);
                setMessage('');
              }}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Join Our Beta Testing Program</h1>
            <p className="mb-6 text-secondaryText">
              Help shape the future of ADHD-supportive tools. Sign up below to get early access to Clarifi and provide feedback that helps us improve.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-black dark:bg-neutral-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-black dark:bg-neutral-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="affiliation" className="block mb-1 font-semibold">University / Role (optional)</label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-black dark:bg-neutral-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block mb-1 font-semibold">Why are you interested in testing Clarifi?</label>
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-black dark:bg-neutral-800 dark:text-white"
                  rows={4}
                />
              </div>

              <p className="text-xs text-secondaryText">
                Your info will only be used for the Clarifi beta. You can opt out at any time.
              </p>

              <button
                type="submit"
                className="mt-4 inline-block bg-primary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-primary/90 transition duration-200"
              >
                Join the Beta
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}