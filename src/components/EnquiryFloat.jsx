export default function EnquiryFloat() {
  return (
    <a
      href="tel:+917631546903" //
      aria-label="Call Burly for Enquiry"
      title="Call Burly for Enquiry"
      className="fixed bottom-6 left-6 z-50 group"
    >
      {/* Tooltip */}
      <span
        className="
          absolute left-16 top-1/2 -translate-y-1/2
          bg-gray-900 text-white text-sm
          px-3 py-1.5 rounded-md
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          whitespace-nowrap
          pointer-events-none
        "
      >
        Call for Enquiry
      </span>

      {/* Button */}
      <div
        className="
          relative
          w-14 h-14
          flex items-center justify-center
          rounded-full
          bg-gradient-to-br from-red-600 to-red-700
          shadow-xl
          transition-transform duration-300
          hover:scale-110
        "
      >
        {/* Pulse Ring */}
        <span
          className="
            absolute inset-0
            rounded-full
            border-2 border-red-400
            animate-ping
            opacity-30
          "
        />

        {/* Phone Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.7 2.1a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45l2.1.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V7a2 2 0 010-2z"
          />
        </svg>
      </div>
    </a>
  );
}
