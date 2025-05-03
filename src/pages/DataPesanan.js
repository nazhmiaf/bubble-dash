import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableContent from "../components/TableContent";
import AdminLaundry from "../assets/images/admin.png"

const DataPesanan = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/Dashboard");
  };

  const handleAddOrder = () => {
    navigate("/AddOrder");
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar dashboard={handleDashboard} onOrderList="bg-gray-400 font-semibold hover:bg-gray-400"/>
      <div className="md:ml-[250px] pt-[px] p-4 md:p-8">
        <div className="flex mt-10 justify-center items-center text-center">
          <img src={AdminLaundry} className="w-[80px] h-full pt-10"/>
          <div className="flex flex-col pt-[70px] justify-center items-center text-center space-y-2">
            <h1 className="text-2xl md:text-6xl font-extrabold text-orange-400">
              ADMIN DASH
            </h1>
            <p className="text-gray-500 md:text-sm text-xs">
              Layanan laundry paling cepat & transparan!
            </p>
          </div>
          <img src={AdminLaundry} className="w-[80px] h-full pt-10"/>
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={handleAddOrder} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2"
          ><FaPlus className="text-base" /><span className="hidden sm:block">Tambah Pesanan</span></button>
        </div>
        <TableContent />
      </div>
    </div>
  );
};

export default DataPesanan;
