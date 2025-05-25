import { MdOutlineDelete } from "react-icons/md";
import useUserData from "../hooks/useUserData";
import { useState } from "react";
import { toast } from "sonner";

const TableUser = () => {
  const { data: users, loading, deleteUserData } = useUserData("users");
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({
    userId: "",
  });

  const handleDeleteClick = (userId) => {
    setDeleteInfo({
      userId,
    });
    setShowModal(true);
  };

  const handleSave = () => {
    setSaving(true);
    try {
      deleteUserData(deleteInfo.userId, true);
      toast.success("Pengguna berhasil dihapus.");
      setShowModal(false);
    } catch (err) {
      toast.error("Gagal menghapus pengguna. Silakan coba lagi.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-[90%] max-w-md p-6 bg-white rounded-xl shadow-xl animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-lg font-bold text-gray-800">
                Konfirmasi Hapus
              </h2>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak
              dapat dibatalkan.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 active:scale-95"
                onClick={() => setShowModal(false)}
                disabled={saving}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 active:scale-95"
                onClick={handleSave}
                disabled={saving}
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        {loading ? (
          <p className="text-center">Memuat data Pengguna...</p>
        ) : (
          <table className="w-full overflow-hidden text-sm text-left border-collapse shadow-lg rounded-xl">
            <thead className="text-white bg-gradient-to-r from-violet-900 to-violet-700">
              <tr>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3">Alamat</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users && Object.keys(users).length > 0 ? (
                Object.entries(users).map(([id, user], index) => (
                  <tr
                    key={id}
                    className={`transition-all duration-150 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-violet-50 hover:scale-[1.01]`}
                  >
                    <td className="px-4 py-3 truncate">{user.nama}</td>
                    <td className="px-4 py-3 truncate">{user.email}</td>
                    <td className="px-4 py-3">{user.telp}</td>
                    <td className="px-4 py-3 truncate">{user.alamat}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDeleteClick(id)}
                        title="Hapus Pengguna"
                        className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white transition-all bg-red-500 rounded shadow-md hover:bg-red-600 active:scale-95 shadow-red-300"
                      >
                        <MdOutlineDelete className="text-lg" />
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-5 text-center text-gray-500">
                    Tidak ada data pengguna.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TableUser;
