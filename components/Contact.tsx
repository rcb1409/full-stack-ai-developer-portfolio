
import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's build something <span className="text-red-600 underline underline-offset-8">great</span>.</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Currently based in Raleigh, NC. Available for remote work or relocation worldwide starting Spring 2026.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 bg-white rounded-[40px] shadow-2xl overflow-hidden text-slate-900 flex flex-col md:flex-row">
        {/* Contact Info Sidebar */}
        <div className="md:w-1/3 bg-slate-50 p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="font-medium">hello@ravibollepalli.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn</p>
                  <p className="font-medium">/in/grad-dev</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Status</p>
            <p className="text-slate-500 text-sm italic">Responding within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <form className="md:w-2/3 p-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Subject</label>
            <select className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all appearance-none">
              <option>Job Opportunity</option>
              <option>Collaboration</option>
              <option>Just Saying Hi</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Message</label>
            <textarea placeholder="How can I help you?" rows={4} className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-xl shadow-red-600/10">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
