import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import AdminDash from '../assets/images/admin.png';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Dashboard");
    } catch (error) {
      setErrorMsg("Email atau password salah");
    }
  };

  return (
    <div className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 login">
      <div className="bg-white flex flex-col p-6 w-[350px] rounded-xl shadow-xl transition-all duration-300 ease-in-out">
        <form onSubmit={handleLogin} className="w-full">
          <h1 className="text-3xl font-extrabold text-center text-[#ffc85c] border-b pb-2">ADMIN DASH</h1>

          <div className="flex items-center justify-center py-5">
            <img src={AdminDash} className="w-[200px]" alt="Admin-Dash" />
          </div>

          {errorMsg && (
            <div className="p-2 mb-3 text-sm text-center text-red-700 bg-red-100 border border-red-300 rounded-md">
              {errorMsg}
            </div>
          )}

          <div className="relative mb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ffc85c] transition"
            />
            <FaUser className="absolute text-gray-500 transform -translate-y-1/2 right-4 top-1/2" />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ffc85c] transition"
            />
            <FaLock className="absolute text-gray-500 transform -translate-y-1/2 right-4 top-1/2" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ffc85c] hover:bg-[#ffdb7a] text-black font-semibold py-2 rounded-xl transition duration-150 active:scale-95 active:shadow-inner"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
