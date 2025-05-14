import { MdLocalLaundryService, MdHome } from "react-icons/md";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Admin from "../components/Admin";

const Sidebar = (props) => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-14 bg-white border-b z-10 flex items-center px-4">
        <IoIosMenu className="block text-xl text-left sm:hidden" />
        <h1 className="italic font-extrabold text-2xl hidden sm:block">
          Admin Dash
        </h1>
      </nav>
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-white border-r shadow-lg z-20 translate-y-14">
        <div>
          <Admin />
        </div>
        <div className="p-3 pb-[120px] border-b">
          <button
            onClick={props.dashboard}
            className={`hover:bg-gray-200 hover:font-semibold text-black rounded-lg w-full transition-all text-left pt-2 pb-2 gap-3 flex pl-3 pr-3 ${props.onDashboard}`}
          >
            <MdHome className="translate-y-[3px] -translate-x-[2px] text-2xl" />
            Dashboard
          </button>
          <button onClick={props.userManagement}
            className={`hover:bg-gray-200 hover:font-semibold text-black rounded-lg w-full transition-all text-left pt-2 pb-2 gap-3 flex pl-3 pr-3 ${props.onUserManagement}`}

          >
            <FaUserAlt className="translate-y-[3px] text-xl" />
            Manajemen User
          </button>
          <button
            onClick={props.orderList}
            className={`hover:bg-gray-200 hover:font-semibold text-black  rounded-lg w-full transition-all text-left pt-2 pb-2 gap-3 flex pl-3 pr-3 ${props.onOrderList}`}
          >
            <MdLocalLaundryService className="translate-y-[1px] -translate-x-[2px] text-2xl" />
            Pesanan
          </button>
          <button className="hover:bg-gray-200 text-black hover:font-semibold  rounded-lg w-full transition-all text-left pt-2 pb-2 flex gap-4 pl-3 pr-3">
            <FaMapMarkerAlt className="translate-y-[3px] text-xl" /> Live
            Tracking
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
