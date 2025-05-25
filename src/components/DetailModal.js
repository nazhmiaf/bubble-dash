import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

const DetailModal = ({
  visible,
  title,
  data,
  onClose,
  onSave,
  onDelete,
  nextStatus,
  saving,
  editableFields = [], 
}) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^./, (str) => str.toUpperCase());

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
            className="relative w-full max-w-md p-6 bg-white shadow-2xl rounded-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button onClick={onClose} className="absolute p-2 text-gray-500 top-2 right-2">
              <FaTimes />
            </button>
            <div className="flex items-center mb-4 space-x-2 text-blue-700">
              <FaInfoCircle className="text-xl" />
              <h2 className="text-lg font-bold">{title}</h2>
            </div>

            <div className="space-y-2 text-sm max-h-[300px] overflow-y-auto border rounded p-3 bg-gray-50">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between pb-1 text-gray-700 border-b">
                  <span className="font-medium capitalize">{formatKey(key)}:</span>
                  {editableFields.includes(key) ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="text-right max-w-[50%] border p-1 rounded text-sm"
                    />
                  ) : (
                    <span className="text-right max-w-[50%] break-words">{value?.toString() || "-"}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-2 mt-6">
              {nextStatus && (
                <button
                  className="flex-1 px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
                  onClick={() => onSave(formData)}
                  disabled={saving}
                >
                  {saving ? "Menyimpan..." : `Set ${nextStatus}`}
                </button>
              )}
              <button
                className="flex-1 px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
                onClick={onDelete}
              >
                Hapus
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;