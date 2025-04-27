import { FaAngleDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Logout from "../Logout/Logout";

const Admin = () => {
    return (
        <div className="p-4 border bg-gray-100">
            <div className=" flex gap-2 ">
                <FaUserAlt className="text-lg text-gray-600  border h-9 w-9 bg-gray-200 flex jutify-center items-center border-black rounded-[50%]" />
                <div>
                    <h1 className="font-semibold">Administrator</h1>
                    <p className="text-gray-800">Admin</p>
                </div>
                <Logout/>
            </div>
        </div>
    )
}

export default Admin