import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/contact/FAQ';

export default function Contact() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-cyan-400">Contact Us & FAQs</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">&gt; Frequently Asked Questions</h2>
            <FAQ />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">&gt; Get in Touch</h2>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-cyan-500/30">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 