import { useNavigate } from "react-router-dom";
import { MdLocalLaundryService } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Admin from "../components/Administrator/Admin";
import Logout from "../components/Logout/Logout";


const Dashboard = () => {
    const navigate = useNavigate()

    const handlePesanan = () => {
        navigate('/DataPesanan')
    }
    return (
        <div className="relative h-screen bg-gray-100">
            <nav className="fixed top-0 left-0 w-full h-14 bg-white border-b z-10 flex justify-end items-center px-4">
                <h1 className='italic font-extrabold text-2xl'>Bubble Dash</h1>
            </nav>
            <aside className="fixed top-0 left-0 h-screen w-[250px] bg-white border-r translate-y-14 shadow-lg z-20 ">
                <div>
                    <Admin />
                </div>
                <div className='p-3 pb-[120px] border-b'>
                    <button className='bg-gray-400 font-semibold text-black text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 pl-3 text-xl gap-3 flex pl-3 pr-3'><MdHome className='translate-y-[3px] -translate-x-[2px] text-2xl' />Dashboard</button>
                    <button className='hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 pl-3 pr-3 flex gap-4'><FaUserAlt className='translate-y-[3px] text-xl' />Manajemen User</button>
                    <button className='hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 gap-6 flex pr-3' onClick={handlePesanan}><MdLocalLaundryService className='translate-y-[3px] translate-x-[10px] text-2xl' />Pesanan</button>
                    <button className='hover:bg-gray-200 text-black hover:font-semibold text-lg rounded-lg w-full transition-all text-left pt-2 pb-2 flex gap-4 pl-3 pr-3'><FaMapMarkerAlt className='translate-y-[3px] text-xl' /> Live Tracking</button>
                </div>
            </aside>
            <div className="ml-[250px] pt-[100px] p-[30px]">

            </div>
        </div>
    )
}

export default Dashboard;