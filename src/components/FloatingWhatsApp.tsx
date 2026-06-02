import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center justify-end">
      
      {/* Wave pulse animation underlay */}
      <span className="absolute w-14 h-14 bg-emerald-500 rounded-full animate-ping opacity-25 pointer-events-none"></span>

      {/* Slide-out Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 shadow-xl tracking-wide opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 mr-2 whitespace-nowrap">
        Chat with Swapnil
      </span>

      {/* Core floating button */}
      <motion.a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all outline-none border border-emerald-400"
        aria-label="Contact Swapnil Talele via WhatsApp Chat"
        id="floating-whatsapp-widget"
      >
        {/* Custom path drawing of high-fidelity WhatsApp logo */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.904 9.904 0 00-6.975-2.872c-5.441 0-9.866 4.372-9.87 9.8a9.69 9.69 0 001.5 5.16l-.992 3.626 3.738-.968.62.368zm11.167-7.798c-.302-.15-1.785-.867-2.062-.966-.277-.1-.478-.15-.679.15-.2.3-.777.966-.953 1.164-.176.198-.352.223-.654.074-1.284-.634-2.14-1.04-2.998-2.484-.222-.38.222-.353.636-1.162.076-.15.038-.282-.019-.382-.056-.1-.478-1.129-.654-1.554-.172-.41-.36-.35-.494-.35h-.42c-.15 0-.395.056-.602.282-.206.223-.788.758-.788 1.85 0 1.09.8 2.146.911 2.296.113.15 1.574 2.373 3.82 3.32.535.226.953.36 1.28.461.538.169 1.028.146 1.415.09.431-.063 1.786-.718 2.037-1.411.252-.693.252-1.288.176-1.411-.076-.123-.277-.198-.579-.348z" />
        </svg>
      </motion.a>
    </div>
  );
}
