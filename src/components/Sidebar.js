import { MdLocalLaundryService, MdHome } from "react-icons/md";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Admin from "../components/Admin";
import NavigationBar from "./NavigationBar";
import ButtonComponent from "./ButtonComponent";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-gray-100 font-semibold hover:bg-gray-100 text-orange-400 hover:text-orange-400"
      : "text-black hover:text-orange-400";

  return (
    <div>
      <NavigationBar />
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-white border-r shadow-lg z-20 translate-y-14">
        <div>
          <Admin />
        </div>
        <div className="p-3 pb-[120px] border-b">
          <ButtonComponent
            onClick={props.dashboard}
            label="Dashboard"
            handleClick={isActive("/Dashboard")}
            icon={<MdHome/>}
          />
          <ButtonComponent
            onClick={props.userManagement}
            label="Manajemen User"
            handleClick={isActive("/ManajemenUser")}
            icon={<FaUserAlt/>}
          />

          <ButtonComponent
            onClick={props.orderList}
            label="Pesanan"
            handleClick={isActive("/DataPesanan")}
            icon={<MdLocalLaundryService/>}
          />

          <ButtonComponent
            label="Live Tracking"
            icon={<FaMapMarkerAlt />}
            handleClick={isActive("/liveTracking")}
            onClick={props.liveTracking}
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
