import BookingForm from '@/components/booking/BookingForm';

export default function BookSlot() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-cyan-400 font-mono">&gt; Book Your Training Slot</h1>
          <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-cyan-500/30">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
} 