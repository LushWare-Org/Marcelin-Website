'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 px-4  overflow-hidden">
      {/* --- NEW HIGH-END GRADIENT SYSTEM --- */}
      {/* 1. The Main Horizon Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-cyan-900/20 to-transparent opacity-50 pointer-events-none" />
      
      {/* 2. The Diagonal "Blade" of Light */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[40%] bg-cyan-900/5 -rotate-12 blur-[120px] pointer-events-none" />
      
      {/* 3. Subtle Texture Overaly (Optional: add 'bg-grid-white/[0.02]' if you have the plugin) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      {/* ------------------------------------ */}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-cyan-500 font-bold mb-4">Contact</h2>
          <h3 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Institutional <span className="font-bold">Inquiry</span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Connect with our global strategic oversight team for partnership opportunities and transformative ventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Side - Span 7 */}
          <div className="lg:col-span-7 bg-[#050505] backdrop-blur-md rounded-2xl p-8 md:p-12 border border-zinc-800 shadow-2xl">
            <h3 className="text-xl font-medium text-white mb-8 tracking-wide text-center lg:text-left">Send an Official Message</h3>

            {submitted && (
              <div className="mb-8 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl p-4 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-cyan-500 rounded-full">
                    <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Inquiry received. Our office will respond shortly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-950 transition-all duration-300 placeholder:text-zinc-700"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Official Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-950 transition-all duration-300 placeholder:text-zinc-700"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Brief Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-950 transition-all duration-300 resize-none placeholder:text-zinc-700"
                  placeholder="Describe the nature of your request..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-cyan-600 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-cyan-500 shadow-xl shadow-cyan-900/20"
              >
                <span className="relative z-10 transition-transform group-hover:scale-105 inline-block">Dispatch Message</span>
              </button>
            </form>
          </div>

          {/* Details Side - Span 5 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-10 border border-zinc-800">
              <h3 className="text-xl font-medium text-white mb-10 tracking-wide">Strategic Channels</h3>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center transition-all group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">HQ Location</h4>
                    <p className="text-white font-light text-lg">Mahe, Victoria, <span className="font-bold text-cyan-500/80">Seychelles</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center transition-all group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Secure Channel</h4>
                    <p className="text-white font-light text-lg">info@mgh.sc</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic Status Card */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/10 rounded-2xl p-8 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold mb-1">Operational Status</p>
                <p className="text-white font-medium italic font-serif">Awaiting Correspondence</p>
              </div>
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-1 h-4 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}