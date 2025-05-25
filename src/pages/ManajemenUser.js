import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableUser from "../components/TableUser";

const ManajemenUser = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/Dashboard");
  };

  const handleOrderList = () => {
    navigate("/DataPesanan");
  };

  const handleTracking = () => navigate("/liveTracking");
  
  return (
    <div className="relative h-screen bg-gray-100">
      <Sidebar
        dashboard={handleDashboard}
        orderList={handleOrderList}
        onUserManagement="bg-gray-100 font-semibold hover:bg-gray-100 text-orange-400 hover:text-orange-400  "
        liveTracking={handleTracking}
      />
      <div className="ml-[250px] p-[5px]">
        <div className="items-center justify-center mt-10 mx-14">
          <Header desc="MANAJEMEN USER" />  
          <div className="mt-10">

          <TableUser/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManajemenUser;
