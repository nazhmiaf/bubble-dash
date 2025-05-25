import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableContent from "../components/TableContent";
import Header from "../components/Header";

const DataPesanan = () => {
  const navigate = useNavigate();

  const handleUserManagement = () => {
    navigate("/ManajemenUser");
  };

  const handleDashboard = () => {
    navigate("/Dashboard");
  };

  const handleAddOrder = () => {
    navigate("/AddOrder");
  };
  const handleTracking = () => navigate("/liveTracking");

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar
        dashboard={handleDashboard}
        handleClick="bg-gray-100 font-semibold hover:bg-gray-100 text-orange-400 hover:text-orange-400 "
        userManagement={handleUserManagement}
        liveTracking={handleTracking}
      />
      <div className="ml-[250px] pt-[5px] px-10">
        <Header desc="DATA PESANAN" />
        <div className="mt-10">
          <TableContent />
        </div>
      </div>
    </div>
  );
};

export default DataPesanan;
