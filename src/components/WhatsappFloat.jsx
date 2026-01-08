export default function WhatsAppFloat() {
  const message =
    "Hello, I’m interested in Burly home care products and would like details about product pricing and distributorship opportunities.";

  return (
    <a
      href={`https://wa.me/917631546903?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Burly on WhatsApp"
      title="Chat with Burly on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span
        className="
          absolute right-16 top-1/2 -translate-y-1/2
          bg-gray-900 text-white text-sm
          px-3 py-1.5 rounded-md
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          whitespace-nowrap
          pointer-events-none
        "
      >
        Chat with Burly Team
      </span>

      {/* Button */}
      <div
        className="
          relative
          w-14 h-14
          flex items-center justify-center
          rounded-full
          bg-gradient-to-br from-green-500 to-green-600
          shadow-xl
          transition-transform duration-300
          hover:scale-110
        "
      >
        {/* Online Indicator */}
        <span
          className="
            absolute top-1 right-1
            w-3 h-3
            bg-green-400
            rounded-full
            ring-2 ring-white
            animate-pulse
          "
        />

        {/* WhatsApp Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </div>
    </a>
  );
}
