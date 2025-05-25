import { FaExclamationTriangle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmDeleteModal = ({ visible, onCancel, onConfirm, saving }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-sm p-6 bg-white shadow-2xl rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-col items-center text-center">
              <FaExclamationTriangle className="mb-4 text-4xl text-red-500" />
              <h3 className="mb-2 text-xl font-bold text-gray-800">Hapus Data?</h3>
              <p className="mb-6 text-sm text-gray-600">
                Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin ingin melanjutkan?
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 font-semibold text-gray-700 transition bg-gray-200 rounded hover:bg-gray-300"
                onClick={onCancel}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 font-semibold text-white transition bg-red-600 rounded hover:bg-red-700 disabled:opacity-50"
                onClick={onConfirm}
                disabled={saving}
              >
                {saving ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDeleteModal;
