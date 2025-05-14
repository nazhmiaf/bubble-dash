import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ManajemenUser = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/Dashboard");
  };

  const handleOrderList = () => {
    navigate("/DataPesanan");
  };

  return (
    <div className="relative h-screen bg-gray-100">
      <Sidebar
        dashboard={handleDashboard}
        orderList={handleOrderList}
        onUserManagement="bg-gray-400 font-semibold hover:bg-gray-400"
      />
      <div className="ml-[250px] pt-[100px] p-[30px]">
        <h1 className="font-semibold text-2xl">MANAJEMEN USER</h1>
        <div className="mt-10 mx-14 border flex justify-center items-center">
          <div className="flex gap-48">
            <div className="bg-white shadow-md rounded-lg p-6 w-[300px] h-[200px]">
              <h2 className="text-xl font-semibold mb-4">User 1</h2>
              <p>Detail user 1</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-[300px] h-[200px]">
              <h2 className="text-xl font-semibold mb-4">User 2</h2>
              <p>Detail user 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManajemenUser;
