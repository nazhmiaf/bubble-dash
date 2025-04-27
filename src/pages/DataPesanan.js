import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineModeEdit, MdOutlineDelete, MdLocalLaundryService, MdHome } from "react-icons/md";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Admin from "../components/Administrator/Admin";
import { IoIosMenu } from "react-icons/io";

const DataPesanan = () => {
    const navigate = useNavigate();

    const orders = [
        {
            userId: "USR001",
            orderId: "ORD101",
            bedcover: 1,
            bedsheet: 2,
            blanket: 0,
            days: 2,
            deliveryTime: "17-19",
            pickupTime: "08-10",
            fragrance: "Lavender",
            weight: "3 kg",
            price: "Rp 45.000",
            status: "Pending",
            timestamp: "2025-04-23T08:10:00"
        },
        {
            userId: "USR002",
            orderId: "ORD102",
            bedcover: 0,
            bedsheet: 1,
            blanket: 1,
            days: 1,
            deliveryTime: "14-16",
            pickupTime: "09-11",
            fragrance: "Rose",
            weight: "2.5 kg",
            price: "Rp 35.000",
            status: "In Process",
            timestamp: "2025-04-22T14:30:00"
        },
        {
            userId: "USR003",
            orderId: "ORD103",
            bedcover: 2,
            bedsheet: 0,
            blanket: 2,
            days: 4,
            deliveryTime: "20-22",
            pickupTime: "10-12",
            fragrance: "Ocean",
            weight: "5 kg",
            price: "Rp 75.000",
            status: "Delivered",
            timestamp: "2025-04-21T10:45:00"
        },
        {
            userId: "USR004",
            orderId: "ORD104",
            bedcover: 1,
            bedsheet: 1,
            blanket: 1,
            days: 3,
            deliveryTime: "18-20",
            pickupTime: "13-15",
            fragrance: "Vanilla",
            weight: "4 kg",
            price: "Rp 60.000",
            status: "Cancelled",
            timestamp: "2025-04-20T09:15:00"
        },
        {
            userId: "USR005",
            orderId: "ORD105",
            bedcover: 0,
            bedsheet: 3,
            blanket: 0,
            days: 2,
            deliveryTime: "15-17",
            pickupTime: "07-09",
            fragrance: "Lemon",
            weight: "2 kg",
            price: "Rp 30.000",
            status: "Pending",
            timestamp: "2025-04-19T07:45:00"
        },
        // Tambahan baru
        {
            userId: "USR006",
            orderId: "ORD106",
            bedcover: 1,
            bedsheet: 2,
            blanket: 1,
            days: 3,
            deliveryTime: "16-18",
            pickupTime: "08-10",
            fragrance: "Mint",
            weight: "4.5 kg",
            price: "Rp 65.000",
            status: "In Process",
            timestamp: "2025-04-18T10:20:00"
        },
        {
            userId: "USR007",
            orderId: "ORD107",
            bedcover: 0,
            bedsheet: 1,
            blanket: 0,
            days: 1,
            deliveryTime: "13-15",
            pickupTime: "09-11",
            fragrance: "Jasmine",
            weight: "2 kg",
            price: "Rp 25.000",
            status: "Pending",
            timestamp: "2025-04-17T12:00:00"
        },
        {
            userId: "USR008",
            orderId: "ORD108",
            bedcover: 2,
            bedsheet: 2,
            blanket: 2,
            days: 5,
            deliveryTime: "19-21",
            pickupTime: "11-13",
            fragrance: "Fresh Linen",
            weight: "6 kg",
            price: "Rp 90.000",
            status: "Delivered",
            timestamp: "2025-04-16T14:15:00"
        },
        {
            userId: "USR009",
            orderId: "ORD109",
            bedcover: 1,
            bedsheet: 0,
            blanket: 1,
            days: 2,
            deliveryTime: "17-19",
            pickupTime: "10-12",
            fragrance: "Citrus",
            weight: "3.5 kg",
            price: "Rp 50.000",
            status: "Cancelled",
            timestamp: "2025-04-15T09:30:00"
        },
        {
            userId: "USR010",
            orderId: "ORD110",
            bedcover: 0,
            bedsheet: 2,
            blanket: 0,
            days: 1,
            deliveryTime: "14-16",
            pickupTime: "07-09",
            fragrance: "Sandalwood",
            weight: "2.2 kg",
            price: "Rp 28.000",
            status: "Pending",
            timestamp: "2025-04-14T07:45:00"
        },
        {
            userId: "USR011",
            orderId: "ORD111",
            bedcover: 1,
            bedsheet: 3,
            blanket: 2,
            days: 4,
            deliveryTime: "20-22",
            pickupTime: "12-14",
            fragrance: "Coconut",
            weight: "7 kg",
            price: "Rp 100.000",
            status: "Delivered",
            timestamp: "2025-04-13T11:50:00"
        },
        {
            userId: "USR012",
            orderId: "ORD112",
            bedcover: 0,
            bedsheet: 1,
            blanket: 0,
            days: 1,
            deliveryTime: "15-17",
            pickupTime: "08-10",
            fragrance: "Cherry Blossom",
            weight: "1.8 kg",
            price: "Rp 22.000",
            status: "Pending",
            timestamp: "2025-04-12T08:25:00"
        },
        {
            userId: "USR013",
            orderId: "ORD113",
            bedcover: 2,
            bedsheet: 0,
            blanket: 1,
            days: 3,
            deliveryTime: "18-20",
            pickupTime: "09-11",
            fragrance: "Green Tea",
            weight: "4 kg",
            price: "Rp 60.000",
            status: "In Process",
            timestamp: "2025-04-11T09:40:00"
        },
        {
            userId: "USR014",
            orderId: "ORD114",
            bedcover: 0,
            bedsheet: 2,
            blanket: 2,
            days: 5,
            deliveryTime: "19-21",
            pickupTime: "10-12",
            fragrance: "Peach",
            weight: "5.5 kg",
            price: "Rp 80.000",
            status: "Delivered",
            timestamp: "2025-04-10T13:10:00"
        },
        {
            userId: "USR015",
            orderId: "ORD115",
            bedcover: 1,
            bedsheet: 1,
            blanket: 1,
            days: 2,
            deliveryTime: "17-19",
            pickupTime: "08-10",
            fragrance: "Apple",
            weight: "3 kg",
            price: "Rp 45.000",
            status: "Pending",
            timestamp: "2025-04-09T07:55:00"
        }
    ];

    const handleDashboard = () => {
        navigate('/Dashboard');
    };

    return (
        <div className="relative min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-14 bg-white border-b z-10 flex items-center px-4">
                <IoIosMenu className="block text-xl text-left sm:hidden"/>
                <h1 className="italic font-extrabold text-2xl hidden sm:block">Bubble Dash</h1>
            </nav>

            {/* Sidebar */}
            <aside className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-white border-r shadow-lg z-20 translate-y-14">
                <div>
                    <Admin />
                </div>
                <div className="p-3 pb-[120px] border-b">
                    <button onClick={handleDashboard} className="hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 gap-3 flex pl-3 pr-3">
                        <MdHome className="translate-y-[3px] -translate-x-[2px] text-2xl" />Dashboard
                    </button>
                    <button className="hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 pl-3 pr-3 flex gap-4">
                        <FaUserAlt className="translate-y-[3px] text-xl" />Manajemen User
                    </button>
                    <button className="bg-gray-400 font-semibold text-black text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 pl-3 flex text-xl gap-3 pr-3">
                        <MdLocalLaundryService className="translate-y-[3px] -translate-x-[2px] text-2xl" />Pesanan
                    </button>
                    <button className="hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 flex gap-4 pl-3 pr-3">
                        <FaMapMarkerAlt className="translate-y-[3px] text-xl" /> Live Tracking
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="md:ml-[250px] pt-[px] p-4 md:p-8">
                {/* Header */}
                <div className="flex flex-col pt-[70px] justify-center items-center text-center space-y-2">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400">BUBBLE DASH</h1>
                    <p className="text-gray-500 text-sm md:text-base">Layanan laundry paling cepat & transparan!</p>
                </div>

                {/* Tambah Pesanan Button */}
                <div className="flex justify-end mt-6">
                    <button className="flex items-center gap-2 text-sm md:text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2">
                        <FaPlus className="text-base" /><span className="hidden sm:block">Tambah Pesanan</span>
                    </button>
                </div>

                {/* Tabel Pesanan */}
                <div className="mt-6 bg-white rounded-lg shadow-lg overflow-x-auto">
                    <table className="min-w-full text-xs md:text-sm">
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
                            {orders.map((order, index) => (
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
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold
                                            ${order.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                                                order.status === "In Process" ? "bg-blue-200 text-blue-800" :
                                                    order.status === "Delivered" ? "bg-green-200 text-green-800" :
                                                        "bg-red-200 text-red-800"
                                            }`}>
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
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default DataPesanan;
