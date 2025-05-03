import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CardContent from "../components/CardContent";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handlePesanan = () => {
    navigate("/DataPesanan");
  };
  return (
    <div className="relative h-screen bg-gray-100">
      <Sidebar
        orderList={handlePesanan}
        onDashboard="bg-gray-400 font-semibold hover:bg-gray-400 "
      />
      <div className="ml-[250px] pt-[100px] p-[30px]">
        <h1 className="font-semibold text-2xl">DASHBOARD</h1>
        <div className="mt-10 mx-14 border flex justify-center items-center">
          <div className="flex gap-48">
            <CardContent  />
            <CardContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
