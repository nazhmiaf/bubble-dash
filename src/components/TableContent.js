import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import useUserData from "../hooks/useUserData";
import useOrderData from "../hooks/useOrderData";
import DetailModal from "./DetailModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { toast } from "sonner";
import Rupiah from "../lib/rupiah";

const TableContent = () => {
  const { data: users, loading: loadingUsers } = useUserData("users");
  const {
    data: orders,
    loading: loadingOrders,
    updateOrder,
    deleteOrder,
  } = useOrderData("orders");

  const [detailUser, setdetailUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editedFields, setEditedFields] = useState({});

  const handleFieldChange = (field, value) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }));
  };

  const statusFlow = {
    Pending: "Process",
    Process: "Done",
  };

  const getStatusPriority = (status) => {
    if (status === "Done") return 0;
    if (status === "Process") return 1;
    if (status === "Pending") return 2;
    return 3;
  };

  const isOrdersEmpty = () =>
    !orders ||
    Object.values(orders).every(
      (userOrders) => !userOrders || Object.keys(userOrders).length === 0
    );

  const handleSave = async (updatedData) => {
    if (!detailUser) return;

    const { userId, orderId } = detailUser;
    const nextStatus = statusFlow[detailUser.order.status];
    const newWeight = updatedData.weight;
    const parsedWeight = Number(newWeight);

    if (
      !newWeight ||
      isNaN(parsedWeight) ||
      parsedWeight <= 0 ||
      !/^\d+(\.\d+)?$/.test(newWeight)
    ) {
      toast.error("Berat harus berupa angka positif yang valid.");
      return;
    }

    const calculatePrice = (order) => {
      const weight = Number(newWeight) || 0;
      const days = Number(order.days) || 0;
      const blanket = Number(order.blanket) || 0;
      const bedsheet = Number(order.bedsheet) || 0;
      const bedcover = Number(order.bedcover) || 0;

      let pricePerKg = 0;
      if (days === 1) pricePerKg = 7500;
      else if (days === 2) pricePerKg = 6500;
      else if (days === 3) pricePerKg = 6000;

      const clothesPrice = pricePerKg * weight;
      const blanketPrice = blanket * 10000;
      const bedsheetPrice = bedsheet * 10000;
      const bedcoverPrice = bedcover * 15000;

      return clothesPrice + blanketPrice + bedsheetPrice + bedcoverPrice;
    };

    setSaving(true);
    try {
      await updateOrder(userId, orderId, nextStatus, {
        weight: Number(newWeight),
        price: calculatePrice({
          ...detailUser.order,
          weight: Number(newWeight),
        }),
      });
      toast.success("Perubahan pesanan berhasil disimpan.");
      setShowModal(false);
    } catch (err) {
      toast.error("Gagal menyimpan perubahan pesanan.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!detailUser) return;
    const { userId, orderId } = detailUser;
    setSaving(true);
    try {
      await deleteOrder(userId, orderId);
      toast.success("Pesanan berhasil dihapus.");
      setShowModal(false);
      setShowDeleteConfirm(false);
    } catch (err) {
      toast.error("Gagal menghapus pesanan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {showModal && detailUser && (
        <DetailModal
          visible={showModal && detailUser}
          title="Detail Pesanan"
          data={detailUser?.order || {}}
          onClose={() => setShowModal(false)}
          onSave={(updatedData) => handleSave(updatedData)}
          onDelete={() => setShowDeleteConfirm(true)}
          nextStatus={statusFlow[detailUser?.order?.status]}
          saving={saving}
          editableFields={
            detailUser?.order?.status === "Pending" ? ["weight"] : []
          }
        />
      )}
      {showDeleteConfirm && (
        <ConfirmDeleteModal
          visible={showDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
          onConfirm={handleDelete}
          saving={saving}
        />
      )}
      <div>
        {loadingOrders ? (
          <p className="text-center">Memuat data Pesanan...</p>
        ) : (
          <table className="w-full overflow-hidden text-sm text-left border-collapse shadow-lg rounded-xl">
            <thead className="text-white bg-gradient-to-r from-blue-800 to-blue-600">
              <tr>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3">Bedcover</th>
                <th className="px-4 py-3">Bedsheet</th>
                <th className="px-4 py-3">Blanket</th>
                <th className="px-4 py-3">Hari</th>
                <th className="px-4 py-3">Berat</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Metode Antar</th>
                <th className="px-4 py-3">Aroma</th>
                <th className="px-4 py-3">Waktu Jemput</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {isOrdersEmpty() ? (
                <tr>
                  <td colSpan={14} className="py-6 text-center text-gray-500">
                    Tidak ada data pesanan.
                  </td>
                </tr>
              ) : (
                Object.entries(orders || {}).map(([userId, userOrders]) =>
                  Object.entries(userOrders || {}).map(([orderId, order]) => {
                    const user = users?.[userId] || {};
                    const isEditable = order.status !== "Done";

                    return (
                      <tr
                        key={`${userId}-${orderId}`}
                        className={`even:bg-gray-50 transition-all duration-200 hover:bg-blue-50 hover:text-blue-800 ${
                          isEditable
                            ? "cursor-pointer hover:scale-[1.01]"
                            : "opacity-60"
                        }`}
                        onClick={() => {
                          if (isEditable) {
                            setdetailUser({ userId, orderId, order });
                            setShowModal(true);
                          }
                        }}
                      >
                        <td className="px-4 py-2">{user.nama || "-"}</td>
                        <td className="px-4 py-2">{user.telp || "-"}</td>
                        <td className="px-4 py-2">{order.bedcover}</td>
                        <td className="px-4 py-2">{order.bedsheet}</td>
                        <td className="px-4 py-2">{order.blanket}</td>
                        <td className="px-4 py-2">{order.days}</td>
                        <td className="px-4 py-2">{`${order.weight} Kg`}</td>
                        <td className="px-4 py-2">
                          {Rupiah(order.price).replace("Rp", "Rp ")}
                        </td>
                        <td className="px-4 py-2">{order.deliveryMethod}</td>
                        <td className="px-4 py-2">{order.fragrance}</td>
                        <td className="px-4 py-2">{order.pickupTime}</td>
                        <td className="px-4 py-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm cursor-default`}
                            title={`Status: ${order.status}`}
                            style={{
                              backgroundColor:
                                order.status === "Pending"
                                  ? "#FEF3C7"
                                  : order.status === "Process"
                                  ? "#DBEAFE"
                                  : order.status === "Done"
                                  ? "#D1FAE5"
                                  : "#FECACA",
                              color:
                                order.status === "Pending"
                                  ? "#92400E"
                                  : order.status === "Process"
                                  ? "#1E3A8A"
                                  : order.status === "Done"
                                  ? "#065F46"
                                  : "#991B1B",
                            }}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {order.timestamp}
                        </td>
                      </tr>
                    );
                  })
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TableContent;
