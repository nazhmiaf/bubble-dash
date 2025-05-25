import LocationTracking from "../components/LocationTracking";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LiveTrackingPage = () => {
  const navigate = useNavigate();
  const handleUserManagement = () => navigate("/ManajemenUser");
  const handlePesanan = () => navigate("/DataPesanan");
  const handleDashboard = () => navigate("/Dashboard");

  return (
    <div className="relative h-full bg-gray-100">
      <Sidebar
        dashboard={handleDashboard}
        orderList={handlePesanan}
        userManagement={handleUserManagement}
      />
      <div className="ml-[250px] p-[5px]">
        
      <div className="items-center justify-center mt-10 mx-14">
        <Header desc="LIVE TRACKING" />
        <div className="mt-4">
          <LocationTracking />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LiveTrackingPage;
