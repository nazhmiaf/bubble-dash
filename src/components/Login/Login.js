
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import mesinCuci from '../Login/mesin cuci.png';
import "./login.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`http://localhost:3001/admin`)
      const user = res.data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        navigate("/Dashboard")
      } else {
        setErrorMsg("Username atau Password salah!");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat login!");
    }
  };
  
  return (
    <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 login flex justify-center items-center pt-[100px]">

      <div className="wrapper bg-white flex justify-center items-center flex-col p-[16px] w-[350px] rounded-xl shadow-md">
        <form onSubmit={handleLogin} className="w-full" action="">
          <div className="title-mobile">
            <h1 className="text-3xl font-extrabold text-center text-[#ffc85c] border-b p-2">BUBBLE DASH</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src={mesinCuci} className="w-[250px] " />
          </div>
          {errorMsg && (
            <div className="bg-red-100 text-red-700 p-2 rounded-md mb-3 text-sm border border-red-300">
              {errorMsg}
            </div>
          )}
          <div className="input-box h-[40px] relative mt-[5px] mb-[5px]">
            <input value={username} className="border border-black rounded-2xl p-[10px] h-full w-full  " onChange={(e) => setUsername(e.target.value)}
              type="text" placeholder="Username" required></input>
            <FaUser className="icons absolute right-[20px] top-[50%]" />
          </div>
          <div className="input-box h-[40px] relative mt-[5px] mb-[20px]">
            <input value={password} className="border border-black rounded-2xl p-[10px] h-full w-full  " onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder="Password" required></input>
            <FaLock className="icons absolute right-[20px] top-[50%]" />
          </div>
          <button type="submit" className="w-full bg-[#ffc85c] hover:bg-[#ffdb7a] pt-[5px] pb-[5px] rounded-xl">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Login