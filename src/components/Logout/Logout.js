import { MdLogout } from "react-icons/md";

const Logout = () => {
    return (
        <div className="pl-2 pt-2">
            <button className="border w-8 h-8 flex justify-center items-center rounded-lg hover:bg-gray-400 hover:text-white bg-gray-300"><MdLogout className="text-2xl"/></button>
        </div>
    )
}

export default Logout