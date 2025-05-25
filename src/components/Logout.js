import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="pl-2 pt-2">
      <button className="border w-8 h-8 flex justify-center items-center rounded-lg hover:bg-gray-400 hover:text-white bg-gray-300">
        <MdLogout onClick={handleLogout} className="text-2xl" />
      </button>
    </div>
  );
};

export default Logout;
