import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CardContent from "../components/CardContent";
import { GrGroup } from "react-icons/gr";
import { FaShirt } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import Rupiah from "../lib/rupiah";
import CardStatus from "../components/CardStatus";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import Header from "../components/Header";
import { GiWashingMachine } from "react-icons/gi";
import useUserData from "../hooks/useUserData";
import useOrderData from "../hooks/useOrderData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: users, loading } = useUserData("users");
  const { data: orders } = useOrderData("orders");

  if (loading) return <div>Loading...</div>;

  const userCounter = users ? Object.keys(users).length : 0;
  const totalOrders = orders
  ? Object.values(orders).reduce(
    (total, userOrders) => total + Object.keys(userOrders || {}).length,
    0
  )
  : 0;
  
  const usersWithOrders = orders
  ? Object.entries(orders).filter(
    ([_, userOrders]) => userOrders && Object.keys(userOrders).length > 0
  )
  : [];
  const pelangganCount = usersWithOrders.length || 0;

  let totalPendapatan = 0;
  let pending = 0;
  let process = 0;
  let done = 0;
  
  if (orders && typeof orders === "object") {
  Object.values(orders).forEach((userOrders) => {
    if (userOrders && typeof userOrders === "object") {
      Object.values(userOrders).forEach((order) => {
        const status = order?.status?.toLowerCase(); 
        if (status === "pending") pending++;
        else if (status === "process") process++;
        else if (status === "done") {
          done++;
          totalPendapatan += Number(order.price) || 0;
        }
      });
    }
  });
}

  const handleUserManagement = () => navigate("/ManajemenUser");
  const handlePesanan = () => navigate("/DataPesanan");
  const handleTracking = () => navigate("/liveTracking");

  return (
    <div className="relative h-screen bg-gray-100">
      <Sidebar
        userManagement={handleUserManagement}
        orderList={handlePesanan}
        liveTracking={handleTracking}
        
      />
      <div className="ml-[250px] p-[5px]">
        <div className="items-center justify-center mt-10 mx-14">
          <Header desc="DASHBOARD" />
          <div className="flex items-center justify-between gap-10 pt-10">
            <CardContent
              name="USER"
              value={userCounter}
              Style="bg-[#FFCCB6] text-white"
              Icon={<GrGroup />}
            />
            <CardContent
              name="PESANAN"
              value={totalOrders}
              Style="bg-[#55CBCD] text-white"
              Icon={<FaShirt />}
            />
            <CardContent
              name="PELANGGAN"
              value={pelangganCount}
              Style="bg-[#97C1A9] text-white"
              Icon={<FaHandshakeSimple />}
            />
            <CardContent
              name="PENDAPATAN"
              value={Rupiah(totalPendapatan).replace("Rp", "Rp ")}
              Style="bg-[#FF968A] text-white"
              Icon={<FaMoneyBill1Wave />}
            />
          </div>

          <div className="flex items-center justify-around gap-10 mt-10">
            <CardStatus
              status="PENDING"
              value={pending}
              style="bg-yellow-500"
              text="text-yellow-500"
              icon={<MdOutlinePendingActions />}
            />
            <CardStatus
              status="IN PROCESS"
              value={process}
              style="bg-blue-500"
              text="text-blue-500"
              icon={<GiWashingMachine />}
            />
            <CardStatus
              status="DONE"
              value={done}
              style="bg-green-500"
              text="text-green-500"
              icon={<MdDoneOutline />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

