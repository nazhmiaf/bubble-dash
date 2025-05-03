import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";

const TableContent = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/orders"); 
        setOrders(res.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mt-6 bg-white rounded-lg shadow-lg overflow-x-auto p-10">
      <table className="min-w-full text-xs rounded-lg md:text-sm">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-2 md:px-4 py-2 border">User ID</th>
            <th className="px-2 md:px-4 py-2 border">Order ID</th>
            <th className="px-2 md:px-4 py-2 border">Bedcover</th>
            <th className="px-2 md:px-4 py-2 border">Bedsheet</th>
            <th className="px-2 md:px-4 py-2 border">Blanket</th>
            <th className="px-2 md:px-4 py-2 border">Day(s)</th>
            <th className="px-2 md:px-4 py-2 border">Delivery</th>
            <th className="px-2 md:px-4 py-2 border">Pickup</th>
            <th className="px-2 md:px-4 py-2 border">Fragrance</th>
            <th className="px-2 md:px-4 py-2 border">Weight</th>
            <th className="px-2 md:px-4 py-2 border">Price</th>
            <th className="px-2 md:px-4 py-2 border">Status</th>
            <th className="px-2 md:px-4 py-2 border">Timestamp</th>
            <th className="px-2 md:px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="14" className="text-center py-4">
                Memuat data...
              </td>
            </tr>
          ) : orders.length === 0 ? (
            <tr>
              <td colSpan="14" className="text-center py-4">
                Tidak ada pesanan.
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index} className="text-center hover:bg-gray-50 transition">
                <td className="px-2 md:px-4 py-2 border text-left">{order.userId}</td>
                <td className="px-2 md:px-4 py-2 border text-left">{order.orderId}</td>
                <td className="px-2 md:px-4 py-2 border">{order.bedcover}</td>
                <td className="px-2 md:px-4 py-2 border">{order.bedsheet}</td>
                <td className="px-2 md:px-4 py-2 border">{order.blanket}</td>
                <td className="px-2 md:px-4 py-2 border">{order.days} Day(s)</td>
                <td className="px-2 md:px-4 py-2 border">{order.deliveryTime}</td>
                <td className="px-2 md:px-4 py-2 border">{order.pickupTime}</td>
                <td className="px-2 md:px-4 py-2 border">{order.fragrance}</td>
                <td className="px-2 md:px-4 py-2 border">{order.weight}</td>
                <td className="px-2 md:px-4 py-2 border">{order.price}</td>
                <td className="px-2 md:px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        order.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : order.status === "In Process"
                          ? "bg-blue-200 text-blue-800"
                          : order.status === "Delivered"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-2 md:px-4 py-2 border">{order.timestamp}</td>
                <td className="px-2 md:px-4 py-2 border">
                  <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs md:text-sm flex items-center gap-1">
                      <MdOutlineModeEdit /> Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs md:text-sm flex items-center gap-1">
                      <MdOutlineDelete /> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
